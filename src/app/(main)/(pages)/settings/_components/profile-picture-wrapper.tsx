'use client'

import React from 'react'
import ProfilePicture from './profile-picture'

interface ProfilePictureWrapperProps {
  removeProfileImage: () => Promise<any>
  uploadProfileImage: (imageUrl: string) => Promise<any>
  initialImage: string | null
}

export default function ProfilePictureWrapper({
  removeProfileImage,
  uploadProfileImage,
  initialImage
}: ProfilePictureWrapperProps) {
  return (
    <ProfilePicture
      userImage={initialImage}
      onDelete={removeProfileImage}
      onUpload={uploadProfileImage}
    />
  )
}