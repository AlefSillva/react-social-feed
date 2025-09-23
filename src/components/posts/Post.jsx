import styles from "./Post.module.css";
import CommentList from "../comment/CommentList";

export default function Post({ post, isSelected, isGrid, onClick }) {
  return (
    <div
      className={`${styles.postCard} ${
        isGrid && isSelected ? styles.expandedCard : ""
      }`}
      onClick={onClick}
    >
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      {isSelected && <CommentList postId={post.id} />}
    </div>
  );
}
