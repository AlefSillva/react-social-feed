import styles from "./Post.module.css";
import { useState } from "react";
import CommentList from "../comment/CommentList";

export default function Post({post}) {
    const [showComments, setShowComments] = useState(false);

    const handleClick = () => {
        setShowComments(!showComments);
    }

    return (
        <div>
            <div className={styles.postCard} onClick={() => setShowComments(!showComments)}>
                <h3 onClick={handleClick}>{post.title}</h3>
                <p>{post.body}</p>
            </div>
                {showComments && <CommentList postId={post.id} />}
        </div>
    )
}