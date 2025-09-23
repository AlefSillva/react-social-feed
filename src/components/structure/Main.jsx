import styles from "../../App.module.css";
import UserList from "../userComponents/userList/UserList";
import PostList from "../posts/PostList";
import CommentList from "../comment/CommentList";
import Breadcrumb from "../menu/BreadCrumb";
import { useState } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";

export default function Main() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [isGrid, setIsGrid] = useState(true);

  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
  };

  const backToPosts = () => {
    setSelectedPostId(null);
  };

  return (
    <main className={styles.principal}>
      <Breadcrumb
        selectedUserId={selectedUserId}
        selectedPostId={selectedPostId}
        onBackToUsers={() => setSelectedUserId(null)}
        onBackToPosts={() => setSelectedPostId(null)}
      />

      <button className={styles.layoutToggle} onClick={() => setIsGrid(!isGrid)}>
        {isGrid ? <ViewListIcon /> : <GridViewIcon />}
      </button>

      {!selectedUserId && <UserList onUserClick={handleUserClick} isGrid={isGrid} />}

      {selectedUserId && !selectedPostId && (
        <PostList userId={selectedUserId} onPostClick={setSelectedPostId} isGrid={isGrid}/>
      )}

      {selectedUserId && selectedPostId && (
        <CommentList postId={selectedPostId} onBack={backToPosts} />
      )}
    </main>
  );
}
