import PostLiked from "./PostLiked";

const Post = ({question, answer, liked, index, isLiked}) => {

    return (
        <article className="postCard">
            <p className="question">Question: {question}</p>
            <p className="answer">Answer: {answer}</p>
            {!liked ? 
                (<button className="likeBtn" onClick={() => isLiked(index)}>Like</button>) 
                : <PostLiked />
            }
        </article>
    )
}

export default Post;