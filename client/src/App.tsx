import './App.css';
import React, { useEffect, useState } from 'react'
import {addBlogPost} from "./API";
import AddBlogPost from './components/AddBlogPost';

const App: React.FC = () => {
  const [posts, setPosts] = useState<IBlogPost[]>([])

  const handleSaveTodo = (e: React.FormEvent, formData: IBlogPost): void => {
    e.preventDefault()
    addBlogPost(formData)
    .then(({ data }) => {

     setPosts(data.posts)
   })
   .catch((err) => console.log(err))
 }
 

  return (
    <div className="App">
      <AddBlogPost saveBlogPost={handleSaveTodo}/>
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
