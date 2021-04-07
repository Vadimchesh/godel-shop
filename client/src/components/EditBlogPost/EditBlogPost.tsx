import React, { useState, FC } from 'react';
interface IEditPostProps {
  updatePost: (e: React.FormEvent, formData: IPost | any) => void;
}
const EditBlogPost: FC<IEditPostProps> = ({ updatePost }) => {
  const [formData, setFormData] = useState<IPost | any>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form onSubmit={e => updatePost(e, formData)}>
      <div>
        <div>
          <label htmlFor='name'>Name</label>
          <input onChange={handleForm} type='text' id='name' />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input onChange={handleForm} type='text' id='description' />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false}>Update Post</button>
    </form>
  );
};

export default EditBlogPost;
