import { useState, useEffect } from "react";
import { fetchComments } from "../fetchData/FetchData";
import Comment from "./Comment";
import styles from "./Comment.module.css";

export default function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(postId).then(setComments);
  }, [postId]);

  return (
    <div className={styles.commentList}>
      <h3>Comentários</h3>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
