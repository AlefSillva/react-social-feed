import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Breadcrumb({ selectedUserId, selectedPostId, onBackToUsers, onBackToPosts }) {
  return (
    <Breadcrumbs>
        <Link color="primary" underline="hover" onClick={onBackToUsers} style={{ cursor: 'pointer' }}>
        Usuários
      </Link>

      {selectedUserId && (
        <Link
          color={selectedPostId ? 'primary' : 'textPrimary'}
          underline="hover"
          onClick={selectedPostId ? onBackToPosts : undefined}
          style={{ cursor: selectedPostId ? 'pointer' : 'default' }}
        >
          Posts
        </Link>
      )}

      {selectedUserId && selectedPostId && (
        <Typography color="textPrimary">Comentários</Typography>
      )}
    
    </Breadcrumbs>
  );
}
