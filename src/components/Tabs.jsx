import React from 'react';

function Tabs({ activeTab, setActiveTab }) {
  const tabs = [
    { label: 'Admins', value: 'admins' },
    { label: 'Bookings', value: 'bookings' },
    { label: 'Events', value: 'events' },
    { label: 'Users', value: 'users' }
  ];

  return (
    <div style={{display:'flex',gap:'1rem',marginBottom:'2rem'}}>
      {tabs.map(tab => (
        <button
          key={tab.value}
          onClick={() => setActiveTab(tab.value)}
          style={{
            padding: '10px 20px',
            background: activeTab === tab.value ? '#333' : '#eee',
            color: activeTab === tab.value ? '#fff' : '#333',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: activeTab === tab.value ? 'bold' : 'normal'
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
