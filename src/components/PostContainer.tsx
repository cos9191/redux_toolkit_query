import { postAPI } from '../services/PostService'
import { PostItem } from './PostItem'
import { useEffect, useState } from 'react'
import { IPost } from '../models/IPost'

export const PostContainer = () => {

    const [limit, setLimit] = useState(20)

    const {data: posts, error, isLoading, refetch} = postAPI.useGetAllPostsQuery(limit,
        // {pollingInterval: 1000}
    )

    const [createPost, {error: createError, isLoading: isCreateLoading}] = postAPI.useCreatePostMutation()

    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(3)
        // }, 2000)
    }, [])

    const handleCreatePost = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    return (
        <ul>
            <button onClick={() => refetch()}>Update</button>
            <button onClick={handleCreatePost}>+ post</button>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error: {JSON.stringify(error)}</h1>}
            {posts && posts.map(post =>
                <PostItem post={post} key={post.id} />
            )}
        </ul>
    )
}
