import styles  from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/Thurzin11.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Arthur</strong>
              <time title="10 de dezembro de 2024 as 13h" dateTime="2024-10-12">
                Cerca de 1h atras
              </time>
            </div>
              <button title="Deletar comentario">
                <Trash size={24} />
              </button>
          </header>
          <p>Muito bom Devon, parabens!! </p>
        </div>
        <footer>
            <button>
                <ThumbsUp/>
                Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
}

export default Comment;
