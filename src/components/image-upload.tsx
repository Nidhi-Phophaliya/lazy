"use client";
import React, { useState } from "react";

import {UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";

const ImageUpload = () => {

    const [imageUrl, setImageUrl] = useState<string>('');
  return (
    <div>
    <UploadDropzone
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        setImageUrl(res[0].url); 
      }}
      onUploadError={(error: Error) => {
        alert(`ERROR! ${error.message}`);
      }}
    ></UploadDropzone>
    {imageUrl.length  ? <div>
        <Image src={imageUrl} alt='profile' width={50} height={50}></Image>
    </div>: null}
    </div>
  );
};

export default ImageUpload;
