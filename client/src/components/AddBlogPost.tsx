import React, { useState } from "react"

type Props = {
  saveBlogPost: (e: React.FormEvent, formData: IBlogPost | any) => void
}

const AddBlogPost: React.FC<Props> = ({ saveBlogPost }) => {
  const [formData, setFormData] = useState<IBlogPost | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className="Form" onSubmit={e => saveBlogPost(e, formData)}>
      <div>
        <div>
          <label htmlFor="title">Name</label>
          <input onChange={handleForm} type="text" id="title" />
        </div>
        <div>
          <label htmlFor="data">Description</label>
          <input onChange={handleForm} type="text" id="data" />
        </div>
        <div>
          <label htmlFor="id">Description</label>
          <input onChange={handleForm} type="text" id="id" />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false}>Add Post</button>
    </form>
  )
}

export default AddBlogPost