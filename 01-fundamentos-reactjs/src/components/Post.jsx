import PropTypes from "prop-types";
import Comment from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import { id, ptBR } from "date-fns/locale";
import { useState } from "react";
import { deleteOneComment, postComment } from "../api/comments";

export default function Post(props) {
  // const publisheDateFormater = format(props.postedAt,"dd 'de' LLLL 'de' yyyy 'as' HH:mm'h'",{
  //   locale: ptBR,
  // });

  // const publishedDateRelativeToNow = formatDistanceToNow(props.postedAt, {
  //   locale: ptBR,
  //   addSuffix: true,
  // })
  const [comments, setComments] = useState(props.comments);

  const handleCommentSubmit = (event) => {
    // event.preventDefault();
    const textComment = event.target.comment.value;
    const newComment = {
      author: {
        id: 1,
      },
      textComment,
      post:{
        id: props.idPost,
      }
    };
    postComment(newComment);
  };

  const deleteComment = (commentId) => {
    // setComments(comments.filter((c) => c.textComment !== comment));
    deleteOneComment(commentId);
    
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={props.imgPath} alt="" />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>Web Developer</span>
          </div>
        </div>

        {/* <time title={publisheDateFormater} dateTime={props.postedAt.toISOString()}>
          {publishedDateRelativeToNow} atras
        </time> */}
      </header>

      <div className={styles.content}>
        <p>{props.content}</p>
        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>

        <p className={styles.links}>
          <a href="">#novoprojeto</a>
          <a href="">#nlw</a>
          <a href="">#rocketseat</a>
        </p>
      </div>
      <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" name="comment" />
        <footer>
          <button type="submit">Comentario</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment.textComment}
            idPost={props.idPost}
            author={comment.author}
            textCommand={comment.textComment}
            deleteComment={deleteComment}
            idComment={comment.id}
          />
        ))}
      </div>
    </article>
  );
}

Post.propTypes = {
  idPost: PropTypes.number.isRequired,
  author: {
    id: PropTypes.number.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  },
  content: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  postedAt: PropTypes.any.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: {
        id: PropTypes.number.isRequired,
        avatarUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
      },
      textComment: PropTypes.string.isRequired,
    })
  ),
};
