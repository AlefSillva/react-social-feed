import styles from './UserList.module.css'
import User from '../user/User'
import { useState, useEffect } from "react";
import { fetchData } from "../../fetchData/FetchData";

export default function UserList({ onUserClick }) {
  const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData().then(setUsers)
    }, []);

  return (
    <div className={styles.userGrid}>
      {users.map((user) => (
        <User 
            key={user.id} 
            user={user} 
            onClick={onUserClick} />
      ))}
    </div>
  );
}




