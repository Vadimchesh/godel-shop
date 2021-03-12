import React, { useState } from 'react';

type Props = {
  savePost: (e: React.FormEvent, formData: IPost | any) => void;
};

const AddPost: React.FC<Props> = ({ savePost }) => {
  const [formData, setFormData] = useState<IPost | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form onSubmit={(e) => savePost(e, formData)}>
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
      <button disabled={formData === undefined ? true : false}>Add Post</button>
    </form>
  );
};

export default AddPost;
