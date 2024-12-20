import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import PropTypes from "prop-types";

function Comment(props) {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/Thurzin11.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{props.author.name}</strong>
              <time title="10 de dezembro de 2024 as 13h" dateTime="2024-10-12">
                Cerca de 1h atras
              </time>
            </div>
            <button title="Deletar comentario">
              <Trash
                size={24}
                onClick={() => {
                  props.deleteComment(props.idComment);
                }}
              />
            </button>
          </header>
          <p>{props.textCommand}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

Comment.propTypes = {
  idComment: PropTypes.number.isRequired,
  idPost: PropTypes.number.isRequired,
  author: {
    id: PropTypes.number.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  },
  textCommand: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

export default Comment;
