import axios from 'axios';

const BASE = 'http://localhost:3001';

export function getAllEvents() {
    return axios.get(`${BASE}/events`);
}

export function addEvent(event) {
    // send the whole event including img (base64) if present
    return axios.post(`${BASE}/events`, event);
}

export function deleteEvent(id) {
    return axios.delete(`${BASE}/events/${id}`);
}

export function getEventbyId(id) {
    return axios.get(`${BASE}/events/${id}`);
}

export function updateEvent(id, updatedEvent) {
    return axios.put(`${BASE}/events/${id}`, updatedEvent);
}
