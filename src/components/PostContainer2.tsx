import { postAPI } from '../services/PostService'
import { PostItem } from './PostItem'


export const PostContainer2 = () => {

    const {data: posts, error, isLoading} = postAPI.useGetAllPostsQuery(20)

    return (
        <ul>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error: {JSON.stringify(error)}</h1>}
            {posts && posts.map(post =>
                <PostItem post={post} key={post.id} />
            )}
        </ul>
    )
}
