import styles from "../../App.module.css";
import UserList from "../userComponents/userList/UserList";
import PostList from "../posts/PostList";
import { useState } from "react";

export default function Main() {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <main className={styles.principal}>
      {!selectedUserId && <UserList onUserClick={handleUserClick} />}
      {selectedUserId && <PostList userId={selectedUserId} />}
    </main>
  );
}
