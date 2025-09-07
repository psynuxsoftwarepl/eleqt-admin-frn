// import React, { useState } from 'react';

// const allowedUsers = [
//   { username: 'user1', password: 'pass1' },
//   { username: 'user2', password: 'pass2' }
// ];

// function Login({ onLogin }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const user = allowedUsers.find(u => u.username === username && u.password === password);
//     if (user) {
//       setError('');
//       onLogin(username);
//     } else {
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh'}}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',width:'300px'}}>
//         <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required style={{marginBottom:'10px',padding:'8px'}} />
//         <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={{marginBottom:'10px',padding:'8px'}} />
//         <button type="submit" style={{padding:'8px'}}>Login</button>
//         {error && <div style={{color:'red',marginTop:'10px'}}>{error}</div>}
//       </form>
//     </div>
//   );
// }

// export default Login;










import React, { useState, useEffect } from 'react';

const allowedUsers = [
  { username: 'user1', password: 'pass1' },
  { username: 'user2', password: 'pass2' }
];

const quotes = [
  "✨ Believe in yourself and all that you are.",
  "🚀 Great things never come from comfort zones.",
  "💡 Every moment is a fresh beginning.",
  "🔥 Don’t watch the clock; do what it does. Keep going.",
  "🌟 Push yourself, because no one else is going to do it for you.",
  "🎯 Stay focused and never give up."
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [quote, setQuote] = useState('');

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = allowedUsers.find(u => u.username === username && u.password === password);
    if (user) {
      setError('');
      onLogin(username);
    } else {
      setError('❌ Invalid credentials');
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#000',
      color: '#FFD700',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      boxSizing: 'border-box',
      padding: '20px'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 0 25px rgba(255, 215, 0, 0.3)',
        maxWidth: '400px',
        width: '100%'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '25px' }}>🔐 Elegant Login</h2>
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}>
          <input
            type="text"
            placeholder="👤 Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            style={{
              marginBottom: '15px',
              padding: '12px',
              borderRadius: '6px',
              border: '1px solid #FFD700',
              backgroundColor: '#000',
              color: '#FFD700',
              fontSize: '1rem'
            }}
          />
          <input
            type="password"
            placeholder="🔒 Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{
              marginBottom: '15px',
              padding: '12px',
              borderRadius: '6px',
              border: '1px solid #FFD700',
              backgroundColor: '#000',
              color: '#FFD700',
              fontSize: '1rem'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '12px',
              borderRadius: '6px',
              backgroundColor: '#FFD700',
              color: '#000',
              fontWeight: 'bold',
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={e => e.target.style.backgroundColor = '#e6c200'}
            onMouseOut={e => e.target.style.backgroundColor = '#FFD700'}
          >
            🚪 Login
          </button>
          {error && <div style={{ color: '#FF4C4C', marginTop: '15px', textAlign: 'center' }}>{error}</div>}
        </form>
        <div style={{
          marginTop: '30px',
          fontStyle: 'italic',
          textAlign: 'center',
          maxWidth: '100%',
          fontSize: '1rem',
          opacity: 0.85
        }}>
          {quote}
        </div>
      </div>
    </div>
  );
}

export default Login;
