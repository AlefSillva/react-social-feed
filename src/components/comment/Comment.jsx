import styles from "./Comment.module.css";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Comment({ comment, onDelete }) {
  const nameParts = comment.name.split(" ");
  const name =
    nameParts.length > 1
      ? `${nameParts[0]} ${nameParts[nameParts.length - 1]}`
      : nameParts[0];

  const username = "@" + comment.email.split("@")[0].toLowerCase();

  const limitCaracters =
    comment.body.length > 140
      ? comment.body.slice(0, 140).trim() + "..."
      : comment.body;

  return (
    <div className={styles.commentCard}>
      <div className={styles.commentTop}>
        <img
          src={`https://i.pravatar.cc/40?u=${comment.id}`}
          alt="Avatar do usuário"
          className={styles.avatar}
        />
        <div className={styles.userInfo}>
          <span className={styles.userName}>{name}</span>
          <span className={styles.userHandle}>{username}</span>
        </div>
      </div>

      <p className={styles.commentBody}>{limitCaracters}</p>

      <DeleteIcon
        className={styles.deleteIcon}
        onClick={() => {
          if (window.confirm("Deseja realmente excluir este comentário?")) {
            onDelete(comment.id);
          }
        }}
      />
    </div>
  );
}
