"use client"

import Profile from '@components/Profile'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react'

const ProfilePage = () => {

    const {data: session} = useSession();
    const [posts, setPosts] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchPosts = async() => {
          try {
            const res = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await res.json();
            setPosts(data);
          } catch (error) {
            console.log(error.message);
          }
        }
    
        if(session?.user.id) fetchPosts();
      },[]) ;
    

    const handleEdit = (post) => {
      router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = async(post) => {
      const hasConfirmed = confirm("Are you sure, you want to delete this prompt?");

      if(hasConfirmed) {
        try {
          await fetch(`/api/prompt/${post._id.toString()}`, {
            method: 'DELETE'
          });

          const filteredPosts = posts.filter((p) => p._id !== post._id) ;
          setPosts(filteredPosts) ;
        } catch (error) {
          console.log(error.message);
        }
      }
    }

  return (
    <Profile 
        name="My"
        desc="Welcome to your profile page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default ProfilePage