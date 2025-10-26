
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const imageUrl = searchParams.get('imageUrl');

  if (!imageUrl) {
    console.error('Missing imageUrl parameter');
    return new Response('Missing imageUrl query parameter', { status: 400 });
  }

  try {
    // Fetch original images
    console.log('Fetching original image:', imageUrl);
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      throw new Error(`Failed to fetch image: ${imageResponse.status}`);
    }
    const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());

    // Load local watermark image
    const watermarkPath = path.join(process.cwd(), 'public', 'LogoWatermark.png');
    let watermarkBuffer = await fs.readFile(watermarkPath);

    // Resize watermark to fixed size (100x100) and set opacity
    const watermarkOpacity = 0.5; // 20% opacity

    // Resize and apply opacity using a transparent background
    const resizedWatermark = await sharp(watermarkBuffer)
      .resize(100, 100)
      .ensureAlpha()
      .toBuffer();

    // Create an overlay with reduced opacity (using a workaround with flatten)
    const transparentWatermark = await sharp({
      create: {
        width: 100,
        height: 100,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
      .composite([{ input: resizedWatermark, blend: 'over', opacity: watermarkOpacity }])
      .png()
      .toBuffer();

    // Get main image metadata for positioning
    const imageMeta = await sharp(imageBuffer).metadata();

    // Center watermark on main image
    const left = Math.round((imageMeta.width - 100) / 2);
    const top = Math.round((imageMeta.height - 100) / 2);

    // Composite watermark onto original image
    let compositeImage = sharp(imageBuffer).composite([
      { input: transparentWatermark, left, top }
    ]);

    // Handle output format
    const format = imageMeta.format || 'jpeg';
    if (format === 'jpeg' || format === 'jpg') {
      compositeImage = compositeImage.jpeg({ quality: 80 });
    } else if (format === 'png') {
      compositeImage = compositeImage.png();
    } else if (format === 'webp') {
      compositeImage = compositeImage.webp({ quality: 80 });
    } else {
      compositeImage = compositeImage.jpeg({ quality: 80 });
    }

    const outputBuffer = await compositeImage.toBuffer();
    const contentType = {
      jpeg: 'image/jpeg',
      jpg: 'image/jpeg',
      png: 'image/png',
      webp: 'image/webp',
    }[format] || 'image/jpeg';

    return new Response(outputBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  } catch (err) {
    console.error('Watermark error:', err);
    return new Response('Error processing image', { status: 500 });
  }
}

// import sharp from 'sharp';
// import fs from 'fs/promises';
// import path from 'path';

// export async function GET(req) {
//   const { searchParams } = new URL(req.url);
//   const imageUrl = searchParams.get('imageUrl');

//   if (!imageUrl) {
//     console.error('Missing imageUrl parameter');
//     return new Response('Missing imageUrl query parameter', { status: 400 });
//   }

//   try {
//     // Fetch original image
//     console.log('Fetching original image:', imageUrl);
//     const imageResponse = await fetch(imageUrl);
//     if (!imageResponse.ok) {
//       throw new Error(`Failed to fetch image: ${imageResponse.status}`);
//     }
//     const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());

//     // Load local watermark image
//     const watermarkPath = path.join(process.cwd(), 'public', 'watermark.png');
//     let watermarkBuffer = await fs.readFile(watermarkPath);

//     // Resize watermark to fixed size (100x100) and set opacity
//     const watermarkOpacity = 0.5;
//     const watermarkSize = 100;

//     // Create resized watermark with opacity
//     const transparentWatermark = await sharp({
//       create: {
//         width: watermarkSize,
//         height: watermarkSize,
//         channels: 4,
//         background: { r: 0, g: 0, b: 0, alpha: 0 }
//       }
//     })
//       .composite([{ 
//         input: await sharp(watermarkBuffer)
//           .resize(watermarkSize, watermarkSize)
//           .ensureAlpha()
//           .toBuffer(), 
//         blend: 'over', 
//         opacity: watermarkOpacity 
//       }])
//       .png()
//       .toBuffer();

//     // Get main image metadata for positioning
//     const imageMeta = await sharp(imageBuffer).metadata();

//     // Calculate positions for multiple watermarks
//     const positions = [
//       // Top left
//       { left: 20, top: 20 },
//       // Top right
//       // { left: imageMeta.width - watermarkSize - 20, top: 20 },
//       // Bottom left
//       // { left: 20, top: imageMeta.height - watermarkSize - 20 },
//       // Bottom right
//       { left: imageMeta.width - watermarkSize - 20, top: imageMeta.height - watermarkSize - 20 },
//       // Center
//       { left: Math.round((imageMeta.width - watermarkSize) / 2), top: Math.round((imageMeta.height - watermarkSize) / 2) }
//     ];

//     // Create composite array with multiple watermarks
//     const compositeArray = positions.map(position => ({
//       input: transparentWatermark,
//       left: position.left,
//       top: position.top
//     }));

//     // Composite all watermarks onto original image
//     let compositeImage = sharp(imageBuffer).composite(compositeArray);

//     // Handle output format
//     const format = imageMeta.format || 'jpeg';
//     if (format === 'jpeg' || format === 'jpg') {
//       compositeImage = compositeImage.jpeg({ quality: 80 });
//     } else if (format === 'png') {
//       compositeImage = compositeImage.png();
//     } else if (format === 'webp') {
//       compositeImage = compositeImage.webp({ quality: 80 });
//     } else {
//       compositeImage = compositeImage.jpeg({ quality: 80 });
//     }

//     const outputBuffer = await compositeImage.toBuffer();
//     const contentType = {
//       jpeg: 'image/jpeg',
//       jpg: 'image/jpeg',
//       png: 'image/png',
//       webp: 'image/webp',
//     }[format] || 'image/jpeg';

//     return new Response(outputBuffer, {
//       status: 200,
//       headers: {
//         'Content-Type': contentType,
//         'Cache-Control': 'public, max-age=31536000',
//       },
//     });
//   } catch (err) {
//     console.error('Watermark error:', err);
//     return new Response('Error processing image', { status: 500 });
//   }
// }
