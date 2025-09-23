import { useState, useEffect } from "react";
import { fetchComments } from "../fetchData/FetchData";
import Comment from "./Comment";
import styles from "./Comment.module.css";

export default function CommentList({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (commentId) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchComments(postId)
      .then((data) => setComments(data))
      .catch(() => setError("Erro ao carregar comentários."))
      .finally(() => setLoading(false));
  }, [postId]);

  if (loading) {
    return <p>Carregando comentários...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.commentList}>
      <h3>Comentários</h3>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
