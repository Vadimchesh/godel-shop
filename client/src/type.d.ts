interface IPost {
  _id: string
  name: string
  description: string
  status: boolean
  createdAt?: string
  updatedAt?: string
}

type PostProps = {
  post: IPost
}

type ApiDataType = {
  message: string
  status: string
  posts: IPost[]
  post?: IPost
}