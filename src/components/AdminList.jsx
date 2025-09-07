import React, { useEffect, useState } from 'react';
import { fetchAdmins } from '../api/dashboardApi';


function AdminList({ page = 1, pageSize = 10, search = '' }) {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAdmins()
      .then(res => {
        setAdmins(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch admins');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading admins...</div>;
  if (error) return <div style={{color:'red'}}>{error}</div>;
  if (admins.length === 0) return <div>No admins found.</div>;

  const startIdx = (page - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const filtered = admins.filter(admin => {
    const s = search.toLowerCase();
    return (
      admin.name?.toLowerCase().includes(s) ||
      admin.email?.toLowerCase().includes(s) ||
      admin.role?.toLowerCase().includes(s)
    );
  });
  const pagedAdmins = filtered.slice(startIdx, endIdx);

  return (
    <div style={{marginBottom: '2rem'}}>
      <h2>Admins</h2>
      <table style={{width:'100%',borderCollapse:'collapse'}}>
        <thead>
          <tr>
            <th style={{border:'1px solid #ccc',padding:'8px'}}>Name</th>
            <th style={{border:'1px solid #ccc',padding:'8px'}}>Email</th>
            <th style={{border:'1px solid #ccc',padding:'8px'}}>Role</th>
          </tr>
        </thead>
        <tbody>
          {pagedAdmins.map(admin => (
            <tr key={admin.id}>
              <td style={{border:'1px solid #ccc',padding:'8px'}}>{admin.name}</td>
              <td style={{border:'1px solid #ccc',padding:'8px'}}>{admin.email}</td>
              <td style={{border:'1px solid #ccc',padding:'8px'}}>{admin.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminList;
