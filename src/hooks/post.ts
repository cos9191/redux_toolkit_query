import { postAPI } from '../services/PostService'
import { IPost } from '../models/IPost'

const [updatePost, {}] = postAPI.useUpdatePostMutation()

const [deletePost, {}] = postAPI.useDeletePostMutation()

const handleRemove = (post: IPost) => {
    deletePost(post)
}

const handleEdit = (post: IPost) => {
    updatePost(post)
}

export { handleRemove, handleEdit }
