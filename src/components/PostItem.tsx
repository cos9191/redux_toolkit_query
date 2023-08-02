import React, { FC } from "react";
import { IPost } from '../models/IPost'
import { postAPI } from '../services/PostService'

interface PostItemProps {
    post: IPost;
    // remove: (post: IPost) => void;
    // edit: (post: IPost) => void;
}

export const PostItem: FC<PostItemProps> = ({post}) => {

    const [updatePost, {}] = postAPI.useUpdatePostMutation()

    const [deletePost, {}] = postAPI.useDeletePostMutation()

    const remove = (post: IPost) => {
        deletePost(post)
    }

    const edit = (post: IPost) => {
        updatePost(post)
    }

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(post)
    }

    const handleEdit = (event: React.MouseEvent) => {
        const title = prompt('Enter new title:') || ''
        const body = prompt('Enter new body:') || ''
        edit({...post, title, body})
    }

    return (
        <li>
            <h2>{post.id} {post.title}</h2>
            <p>{post.body}</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleRemove}>Delete</button>
        </li>
    )
}
