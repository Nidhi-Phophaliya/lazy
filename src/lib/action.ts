import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

export async function removeProfileImage() {
    'use server'
  const authUser = await currentUser()
  if (!authUser) throw new Error('Unauthorized')

  const response = await db.user.update({
    where: {
      clerkId: authUser.id,
    },
    data: {
      profileImage: '',
    },
  })

  revalidatePath('/settings')
  return response
}

export async function uploadProfileImage(image: string) {
  const authUser = await currentUser()
  if (!authUser) throw new Error('Unauthorized')

  const response = await db.user.update({
    where: {
      clerkId: authUser.id,
    },
    data: {
      profileImage: image,
    },
  })

  revalidatePath('/settings')
  return response
}