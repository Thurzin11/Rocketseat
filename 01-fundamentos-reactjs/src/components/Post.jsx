import PropTypes from "prop-types";
import Comment from "./Comment";
import styles from "./Post.module.css";



export default function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/Thurzin11.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="10 de dezembro de 2024 as 13h" dateTime="2024-10-12">
          Publicado a 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          {props.content}
        </p>

        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>

        <p className={styles.links}>
          <a href="">#novoprojeto</a>
          <a href="">#nlw</a>
          <a href="">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Comentario</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {
          props.comments.map((comment, index) => (
            <Comment
              key={index}
              author={comment.author}
              textCommand={comment.textComment}
            />
          ))
        }
      </div>
    </article>
  );
}

Post.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      textComment: PropTypes.string.isRequired,
    })
  ),
};
