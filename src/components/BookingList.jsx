import React, { useEffect, useState } from 'react';
import { fetchBookings } from '../api/dashboardApi';


function BookingList({ page = 1, pageSize = 10, search = '', users = [] }) {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBookings()
      .then(res => {
        setBookings(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch bookings');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading bookings...</div>;
  if (error) return <div style={{color:'red'}}>{error}</div>;
  if (bookings.length === 0) return <div>No bookings found.</div>;

  const startIdx = (page - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const s = search.toLowerCase();
  // Find user IDs that match the search
  const matchedUserIds = users
    .filter(u =>
      u.name?.toLowerCase().includes(s) ||
      u.email?.toLowerCase().includes(s) ||
      u.id?.toLowerCase().includes(s)
    )
    .map(u => u.id);

  const filtered = bookings.filter(booking => {
    return (
      booking.id?.toLowerCase().includes(s) ||
      booking.userId?.toLowerCase().includes(s) ||
      booking.rideType?.toLowerCase().includes(s) ||
      booking.carType?.toLowerCase().includes(s) ||
      booking.status?.toLowerCase().includes(s) ||
      matchedUserIds.includes(booking.userId)
    );
  });
  const pagedBookings = filtered.slice(startIdx, endIdx);

  return (
    <div style={{marginBottom: '2rem'}}>
      <h2>Bookings</h2>
      <table style={{width:'100%',borderCollapse:'collapse'}}>
        <thead>
          <tr>
            <th style={{border:'1px solid #ccc',padding:'8px'}}>ID</th>
            <th style={{border:'1px solid #ccc',padding:'8px'}}>User</th>
            <th style={{border:'1px solid #ccc',padding:'8px'}}>Ride Type</th>
            <th style={{border:'1px solid #ccc',padding:'8px'}}>Car Type</th>
            <th style={{border:'1px solid #ccc',padding:'8px'}}>Status</th>
            <th style={{border:'1px solid #ccc',padding:'8px'}}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {pagedBookings.map(booking => (
            <tr key={booking.id}>
              <td style={{border:'1px solid #ccc',padding:'8px'}}>{booking.id}</td>
              <td style={{border:'1px solid #ccc',padding:'8px'}}>{booking.userId}</td>
              <td style={{border:'1px solid #ccc',padding:'8px'}}>{booking.rideType}</td>
              <td style={{border:'1px solid #ccc',padding:'8px'}}>{booking.carType}</td>
              <td style={{border:'1px solid #ccc',padding:'8px'}}>{booking.status}</td>
              <td style={{border:'1px solid #ccc',padding:'8px'}}>{booking.payment?.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingList;
