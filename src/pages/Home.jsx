// import React from 'react';

// function Home({ username }) {
//   return (
//     <div style={{padding:'2rem'}}>
//       <h1>Welcome, {username}!</h1>
//       <p>This is your admin dashboard home page.</p>
//     </div>
//   );
// }

// export default Home;




import React from 'react';

function Home({ username }) {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      backgroundColor: '#000',
      color: '#FFD700',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Fixed Navbar */}
      <div style={{
        backgroundColor: '#000',
        color: '#FFD700',
        padding: '1rem 2rem',
        borderBottom: '1px solid #FFD700',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        position: 'relative',
        zIndex: 1
      }}>
        🛡️ Admin Panel
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{
          fontSize: '2.8rem',
          marginBottom: '1rem'
        }}>
          🎉 Welcome, <span style={{ color: '#FFF' }}>{username}</span>!
        </h1>
        <p style={{
          fontSize: '1.2rem',
          maxWidth: '600px',
          lineHeight: '1.6',
          opacity: 0.9
        }}>
          This is your <strong style={{ color: '#FFF' }}>admin dashboard</strong>. Explore, manage, and make things happen! 🚀
        </p>
      </div>
    </div>
  );
}

export default Home;
