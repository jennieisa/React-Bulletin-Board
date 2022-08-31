import PostLiked from "./PostLiked";

const Post = ({question, answer, liked, index, isLiked}) => {

    return (
        <article className="postCard">
            <p>Question: {question}</p>
            <p>Answer: {answer}</p>
            {!liked ? 
                (<button onClick={() => isLiked(index)}>{`${liked}`}</button>) 
                : <PostLiked />
            }
        </article>
    )
}

export default Post;