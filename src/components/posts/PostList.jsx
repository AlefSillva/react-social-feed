import { useState, useEffect } from "react";
import { fetchPosts } from "../fetchData/FetchData";
import Post from "./Post"; 
import styles from "../posts/Post.module.css";

export default function PostList({ userId, isGrid }) {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchPosts(userId)
      .then((data) => setPosts(data))
      .catch(() => setError("Erro ao carregar posts."))
      .finally(() => setLoading(false));
  }, [userId]);

  const handleClick = (postId) => {
    setSelectedPostId(selectedPostId === postId ? null : postId);
  };

  if (loading) {
    return <p>Carregando posts...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h2>Posts</h2>
      <div className={isGrid ? styles.postListGrid : styles.postListList}>
        {posts.map((post) =>
          selectedPostId === null || selectedPostId === post.id ? (
            <Post
              key={post.id}
              post={post}
              isSelected={selectedPostId === post.id}
              isGrid={isGrid}
              onClick={() => handleClick(post.id)}
            />
          ) : null
        )}
      </div>
    </>
  );
}
