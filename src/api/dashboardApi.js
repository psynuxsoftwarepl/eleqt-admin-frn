import axios from 'axios';

const API_BASE = 'https://admin-back-4nqh.onrender.com/api'; // Use Render backend for API

export const fetchAdmins = () => axios.get(`${API_BASE}/admins`);
export const fetchBookings = () => axios.get(`${API_BASE}/bookings`);
export const fetchEvents = () => axios.get(`${API_BASE}/events`);
export const fetchUsers = () => axios.get(`${API_BASE}/users`);
