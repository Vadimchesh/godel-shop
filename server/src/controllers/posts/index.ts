
const getPosts = () => {
 return Posts.find()
}
const addPost = () => {
 return Posts.post()
}
const updatePost = () => {
 return Posts.put()
}
const deletePost = () => {
 return Posts.delete()
}

  
  export { getPosts, addPost, updatePost, deletePost }