import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api/dashboardApi';


function UserList({ page = 1, pageSize = 10, search = '' }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch users');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading users...</div>;
  if (error) return <div style={{color:'red'}}>{error}</div>;
  if (users.length === 0) return <div>No users found.</div>;

  const startIdx = (page - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const filtered = users.filter(user => {
    const s = search.toLowerCase();
    return (
      user.id?.toLowerCase().includes(s) ||
      user.name?.toLowerCase().includes(s) ||
      user.email?.toLowerCase().includes(s) ||
      user.phone?.toLowerCase().includes(s) ||
      user.homecity?.toLowerCase().includes(s)
    );
  });
  const pagedUsers = filtered.slice(startIdx, endIdx);

  return (
    <div style={{marginBottom: '2rem'}}>
      <h2>Users</h2>
      <table style={{width:'100%',borderCollapse:'collapse'}}>
        <thead>
          <tr>
            <th style={{border:'1px solid #ccc',padding:'8px'}}>ID</th>
            <th style={{border:'1px solid #ccc',padding:'8px'}}>Name</th>
            <th style={{border:'1px solid #ccc',padding:'8px'}}>Email</th>
            <th style={{border:'1px solid #ccc',padding:'8px'}}>Phone</th>
            <th style={{border:'1px solid #ccc',padding:'8px'}}>Home City</th>
            <th style={{border:'1px solid #ccc',padding:'8px'}}>Status</th>
          </tr>
        </thead>
        <tbody>
          {pagedUsers.map(user => (
            <tr key={user.id}>
              <td style={{border:'1px solid #ccc',padding:'8px'}}>{user.id}</td>
              <td style={{border:'1px solid #ccc',padding:'8px'}}>{user.name}</td>
              <td style={{border:'1px solid #ccc',padding:'8px'}}>{user.email}</td>
              <td style={{border:'1px solid #ccc',padding:'8px'}}>{user.phone}</td>
              <td style={{border:'1px solid #ccc',padding:'8px'}}>{user.homecity}</td>
              <td style={{border:'1px solid #ccc',padding:'8px'}}>{user.accountVerified ? 'Verified' : 'Unverified'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
