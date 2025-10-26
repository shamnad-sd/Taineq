import React from 'react'
import { siteName } from '@/utils/variable'
import Image from 'next/image'

const Images = ({
  imageurl,
  styles,
  quality,
  width,
  height,
  alt,
  classes,
  placeholder

}) => {
  const blurUrl_ = 'data:image/webp;base64,UklGRhICAABXRUJQVlA4WAoAAAAgAAAABQAAAwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggJAAAANABAJ0BKgYABAAJAKwlAF2AHpMfuDUAAP6wuhuLZW9nb+eAAA';
  return (
    <>

      {
        <Image
          width={width}
          height={height}
          quality={quality}
          fill={false}
          placeholder={placeholder == true ? 'blur' : 'empty'}
          blurDataURL={blurUrl_}
          src={imageurl ? imageurl : '/placeholder.png'}
          className={classes}
          alt={alt || siteName}
          title={alt || siteName}


        />
      }

    </>
  )
}

export default Images