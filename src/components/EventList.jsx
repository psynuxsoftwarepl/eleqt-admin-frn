import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../api/dashboardApi';


function EventList({ page = 1, pageSize = 10, search = '' }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents()
      .then(res => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch events');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading events...</div>;
  if (error) return <div style={{color:'red'}}>{error}</div>;
  if (events.length === 0) return <div>No events found.</div>;

  const startIdx = (page - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const filtered = events.filter(event => {
    const s = search.toLowerCase();
    return (
      event.id?.toLowerCase().includes(s) ||
      event.organizerName?.toLowerCase().includes(s) ||
      event.organizerPhone?.toLowerCase().includes(s) ||
      event.eventType?.toLowerCase().includes(s) ||
      event.status?.toLowerCase().includes(s) ||
      event.desc?.toLowerCase().includes(s)
    );
  });
  const pagedEvents = filtered.slice(startIdx, endIdx);

  return (
    <div style={{marginBottom: '2rem'}}>
      <h2>Events</h2>
      <table style={{width:'100%',borderCollapse:'collapse'}}>
        <thead>
          <tr>
            <th style={{border:'1px solid #ccc',padding:'8px'}}>ID</th>
            <th style={{border:'1px solid #ccc',padding:'8px'}}>Organizer</th>
            <th style={{border:'1px solid #ccc',padding:'8px'}}>Phone</th>
            <th style={{border:'1px solid #ccc',padding:'8px'}}>Type</th>
            <th style={{border:'1px solid #ccc',padding:'8px'}}>Status</th>
            <th style={{border:'1px solid #ccc',padding:'8px'}}>Description</th>
          </tr>
        </thead>
        <tbody>
          {pagedEvents.map(event => (
            <tr key={event.id}>
              <td style={{border:'1px solid #ccc',padding:'8px'}}>{event.id}</td>
              <td style={{border:'1px solid #ccc',padding:'8px'}}>{event.organizerName}</td>
              <td style={{border:'1px solid #ccc',padding:'8px'}}>{event.organizerPhone}</td>
              <td style={{border:'1px solid #ccc',padding:'8px'}}>{event.eventType}</td>
              <td style={{border:'1px solid #ccc',padding:'8px'}}>{event.status}</td>
              <td style={{border:'1px solid #ccc',padding:'8px'}}>{event.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventList;
