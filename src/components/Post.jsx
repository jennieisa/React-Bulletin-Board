const Post = ({question, answer, liked, index, isLiked}) => {

    return (
        <article className="postCard">
            <p>Question: {question}</p>
            <p>Answer: {answer}</p>
            <button onClick={() => isLiked(index)}>{`${liked}`}</button>
        </article>
    )
}

export default Post;