interface IBlogPost {
    _id: string
    title: string
    id: string
    data: string
    createdAt?: string
  }
  
  interface BlogProps {
    post: IBlogPost
  }
  
  type ApiDataType = {
    title: string
    data: string
    posts: IBlogPost[]
    todo?: IBlogPost
  }