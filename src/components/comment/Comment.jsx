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
      <h4>{name}</h4>
      <p className={styles.username}>{username}</p>
      <p>{limitCaracters}</p>

      <DeleteIcon
        style={{ cursor: "pointer", color: "red", marginTop: "0.5rem" }}
        onClick={() => {
          if (window.confirm("Deseja realmente excluir este comentário?")) {
            onDelete(comment.id);
          }
        }}
      />
    </div>
  );
}
