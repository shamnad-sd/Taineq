import { siteName } from "@/utils/variable";
import Image from "next/image";
import React from "react";

export default function WatermarkedImage({ src, alt, classes, width, height , quality, imageurl, placeholder }) {
  const blurUrl_ = 'data:image/webp;base64,UklGRhICAABXRUJQVlA4WAoAAAAgAAAABQAAAwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggJAAAANABAJ0BKgYABAAJAKwlAF2AHpMfuDUAAP6wuhuLZW9nb+eAAA';
  return (
    <Image
      src={ imageurl ? `/api/watermark?imageUrl=${encodeURIComponent(imageurl)}`: '/placeholder.png'}
      alt={alt || ""}
      width={`${width || "800"}`}
      height={`${height || "600"}`}
      className={classes}
      // alt={alt || siteName}
      // title={alt || siteName}
      blurDataURL={blurUrl_}
      placeholder={placeholder == true ? "blur" : "empty"}
      quality={quality}
      fill={false}
      //style={{ maxWidth: '100%', height: 'auto' }}
    />
  );
}
