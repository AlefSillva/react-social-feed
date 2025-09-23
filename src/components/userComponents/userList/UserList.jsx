import styles from "./UserList.module.css";
import User from "../user/User";
import { useState, useEffect } from "react";
import { fetchData } from "../../fetchData/FetchData";

export default function UserList({ onUserClick, isGrid }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchData()
      .then((data) => setUsers(data))
      .catch(() => setError("Erro ao carregar usuários."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Carregando usuários...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={isGrid ? styles.gridLayout : styles.listLayout}>
      {users.map((user) => (
        <User key={user.id} user={user} onClick={onUserClick} />
      ))}
    </div>
  );
}
