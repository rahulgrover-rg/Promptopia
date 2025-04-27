import Link from 'next/link'

const Form = ({type,post,setPost,submitting,handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text sm:head_text_sm text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='desc sm:desc_sm text-left max-w-md'>
        {type} and share amazing prompts with the world and let your imagination run wild with AI-powered platform.
      </p>

      <form onSubmit={handleSubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
        <label>
          <span className='font-semibold text-base text-gray-700'>Your AI Prompt</span>
          <textarea 
          value={post.prompt} 
          onChange={(e) => setPost({...post, prompt: e.target.value})} 
          placeholder='write your prompt here...' 
          required 
          className='form_textarea'/>
        </label>
        <label>
          <span className='font-semibold text-base text-gray-700'>Tag{` `} <span className='font-normal'>(#product, #webdevelopment, #next.js)</span></span>
          <input 
          value={post.tag} 
          onChange={(e) => setPost({...post, tag: e.target.value})} 
          placeholder='#product, #webdevelopment, #next.js and so on.' 
          required 
          className='form_input'/>
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href="/" className='text-gray-500 text-sm  cursor-pointer'>Cancel</Link>
          <button type='submit' disabled={submitting} className='px-5 py-1.5 text-sm bg-orange-600 rounded-full text-white cursor-pointer'>
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form ;