"use client"

import Form from '@components/Form';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react'

const EditPropmt = () => {

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get('id');

  useEffect(() => {
    const getPromptDetails = async() => {
        try {
            const response = await fetch(`api/prompt/${promptId}`);
            const data = await response.json();
    
            setPost({
                prompt: data.prompt,
                tag: data.tag
            })    
        } catch (error) {
            console.log(error.message) ;
        }
    }

    if(promptId) getPromptDetails();
  },[promptId]);

  const editPrompt = async(e) => {
    e.preventDefault() ;
    setSubmitting(true) ;

    if(!promptId) alert('Prompt ID not found')

    try {
      const res = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag
        })
      });

      if(res.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setSubmitting(false) ;
    }
  }

  return (
    <Form
      type = "Edit" 
      post = {post} 
      setPost = {setPost}
      submitting = {submitting}
      handleSubmit = {editPrompt}
    />
  )
}

export default EditPropmt