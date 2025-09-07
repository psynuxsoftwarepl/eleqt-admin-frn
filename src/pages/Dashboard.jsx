
// import React, { useState } from 'react';
// import AdminList from '../components/AdminList';
// import BookingList from '../components/BookingList';
// import EventList from '../components/EventList';
// import UserList from '../components/UserList';

// function Dashboard({ activeTab }) {
//   const [page, setPage] = useState(1);

//   const handleNext = () => setPage(p => p + 1);
//   const handlePrev = () => setPage(p => (p > 1 ? p - 1 : 1));

//   return (
//     <div>
//       <h1 style={{marginBottom:'2rem'}}>Admin Dashboard</h1>
//       {activeTab === 'admins' && <AdminList page={page} pageSize={10} />}
//       {activeTab === 'bookings' && <BookingList page={page} pageSize={10} />}
//       {activeTab === 'events' && <EventList page={page} pageSize={10} />}
//       {activeTab === 'users' && <UserList page={page} pageSize={10} />}
//       <div style={{marginTop:'2rem',display:'flex',gap:'1rem'}}>
//         <button onClick={handlePrev} style={{padding:'8px'}}>Previous</button>
//         <button onClick={handleNext} style={{padding:'8px'}}>Next</button>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;










import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../api/dashboardApi';
import AdminList from '../components/AdminList';
import BookingList from '../components/BookingList';
import EventList from '../components/EventList';
import UserList from '../components/UserList';


function Dashboard({ activeTab }) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(res => setUsers(res.data)).catch(() => setUsers([]));
  }, []);

  const handleNext = () => setPage(p => p + 1);
  const handlePrev = () => setPage(p => (p > 1 ? p - 1 : 1));

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      backgroundColor: '#000',
      color: '#FFD700',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      boxSizing: 'border-box',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '2rem',
        fontSize: '2rem',
        fontWeight: 'bold'
      }}>
        🛠️ Admin Dashboard
      </div>

      {/* Search Bar */}
      <div style={{marginBottom:'1.5rem',textAlign:'center'}}>
        <input
          type="text"
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1); }}
          placeholder="Search..."
          style={{
            padding:'10px',
            width:'300px',
            borderRadius:'6px',
            border:'1px solid #FFD700',
            fontSize:'1rem',
            background:'#222',
            color:'#FFD700'
          }}
        />
      </div>

      {/* Dynamic Section Rendering */}
      <div style={{
        flex: 1,
        overflowY: 'auto', // In case internal list scroll is needed
        padding: '1rem',
        backgroundColor: '#1c1c1c',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(255, 215, 0, 0.2)',
      }}>
  {activeTab === 'admins' && <AdminList page={page} pageSize={10} search={search} />}
  {activeTab === 'bookings' && <BookingList page={page} pageSize={10} search={search} users={users} />}
  {activeTab === 'events' && <EventList page={page} pageSize={10} search={search} />}
  {activeTab === 'users' && <UserList page={page} pageSize={10} search={search} />}
      </div>

      {/* Pagination Controls */}
      <div style={{
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem'
      }}>
        <button
          onClick={handlePrev}
          style={{
            padding: '10px 16px',
            borderRadius: '6px',
            border: '1px solid #FFD700',
            backgroundColor: '#000',
            color: '#FFD700',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background 0.3s ease'
          }}
          onMouseOver={e => e.target.style.backgroundColor = '#1a1a1a'}
          onMouseOut={e => e.target.style.backgroundColor = '#000'}
        >
          ⬅️ Previous
        </button>
        <button
          onClick={handleNext}
          style={{
            padding: '10px 16px',
            borderRadius: '6px',
            border: '1px solid #FFD700',
            backgroundColor: '#000',
            color: '#FFD700',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background 0.3s ease'
          }}
          onMouseOver={e => e.target.style.backgroundColor = '#1a1a1a'}
          onMouseOut={e => e.target.style.backgroundColor = '#000'}
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
