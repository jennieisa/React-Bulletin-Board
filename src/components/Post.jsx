import PostLiked from "./PostLiked";

const Post = ({question, answer, liked, index, isLiked}) => {

    return (
        <article className="postCard">
            <p className="question">Fråga: {question}</p>
            <p className="answer">Svar: {answer}</p>
            {!liked ? //Om liked är false på den här posten så syns knappen. Klickar vi på knappen blir like true och då syns inte knappen och vi använder oss av PostLiked komponenten.
                (<button className="likeBtn" onClick={() => isLiked(index)}>Gilla</button>) 
                : <PostLiked />
            }
        </article>
    )
}

export default Post;