import React from 'react'
import PromptCard from '@components/PromptCard'

const Profile = ({name, desc, data, handleEdit, handleDelete}) => {
  return (
    <section className='w-full'>
      <h1 className='head_text sm:head_text_sm text-left'>
        <span className='blue_gradient'>{name} Profile</span>
      </h1>
      <p className='desc sm:desc_sm text-left'>{desc}</p>
      
      <div className='mt-16 prompt_layout sm:prompt_layout_sm xl:prompt_layout_xl'>
      {data.map((post) => (
        <PromptCard 
          key={post._id}
          post={post}
          handleEdit={() => handleEdit && handleEdit(post)}
          handleDelete={() => handleDelete && handleDelete(post)}
        />
      ))}
    </div>
    </section>
  )
}

export default Profile