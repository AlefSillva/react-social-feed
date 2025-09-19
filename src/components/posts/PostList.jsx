import { useState, useEffect } from "react";
import { fetchPosts } from "../fetchData/FetchData";
import Post from "./Post";
import styles from "../posts/Post.module.css";

export default function PostList({ userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts(userId).then(setPosts);
  }, [userId]);

  return (
    <div className={styles.postList}>
      <h2>Posts</h2>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}