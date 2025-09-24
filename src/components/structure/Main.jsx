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
  const [isGrid, setIsGrid] = useState(true);
  const [isPostExpanded, setIsPostExpanded] = useState(false); 

  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
    setIsPostExpanded(false); 
  };

  const handlePostClick = (expanded) => {
    setIsPostExpanded(expanded); 
  };

  const backToPosts = () => {
    setIsPostExpanded(false);
  };

  return (
    <main className={styles.principal}>
      <Breadcrumb
        selectedUserId={selectedUserId}
        onBackToUsers={() => setSelectedUserId(null)}
        onBackToPosts={backToPosts}
      />

      
      {!isPostExpanded && (
        <button
          className={styles.layoutToggle}
          onClick={() => setIsGrid(!isGrid)}
        >
          {isGrid ? <ViewListIcon /> : <GridViewIcon />}
        </button>
      )}

      {!selectedUserId && <UserList onUserClick={handleUserClick} isGrid={isGrid} />}

      {selectedUserId && (
        <PostList
          userId={selectedUserId}
          isGrid={isGrid}
          onPostClick={handlePostClick} 
        />
      )}
    </main>
  );
}
