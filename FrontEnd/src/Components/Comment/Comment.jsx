import React from 'react';

const styles = {
    commentContainer: { display: 'flex', alignItems: 'flex-start', marginBottom: '10px',  },
    avatar: { width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' },
    commentContent: { backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '8px' },
    noComments: { color: '#888', fontStyle: 'italic' },
  };

function Comment({ user, comment }){
    return (
        <div style={styles.commentContainer}>
          <img src="https://placehold.co/40x40" alt={user.name} style={styles.avatar} />
          <div style={styles.commentContent}>
            <span style={styles.username}>{user.name}</span>
            <p style={styles.commentText}>{comment}</p>
          </div>
        </div>
      );
}
export default Comment;