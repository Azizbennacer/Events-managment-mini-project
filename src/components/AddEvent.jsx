import React, { useState } from "react";
import { addEvent } from "../service/api";
import CancelEvent from "./CancelEvent";
import './AddEvent.css';

function AddEvent() {
  const [event, setEvent] = useState({
    name: "",
    description: "",
    price: "",
    nbTickets: "",
    img: ""
  });

  // Mise à jour des champs quand l’utilisateur écrit
  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleAddEvent = () => {
    addEvent(event);
  };

  // Lire un fichier image choisi par l'utilisateur et le convertir en base64
  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setEvent(prev => ({ ...prev, img: reader.result }));
    };
    reader.onerror = () => {
      console.error('Erreur lors de la lecture du fichier');
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="add-event-container">
      <h2 className="add-event-title">Add New Event</h2>

      <div className="form-group">
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="Enter the event's name"
          value={event.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <input
          className="form-input"
          type="text"
          name="description"
          placeholder="Brief description of the event"
          value={event.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <input
          className="form-input"
          type="number"
          name="price"
          placeholder="Enter the ticket price"
          value={event.price}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <input
          className="form-input"
          type="number"
          name="nbTickets"
          placeholder="Enter the number of tickets"
          value={event.nbTickets}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label style={{ display: 'block', fontSize: 14, color: '#4a5568', marginBottom: 8 }}>Attach an image</label>
        <input
          className="form-input"
          type="file"
          accept="image/*"
          name="image"
          onChange={handleFileChange}
        />
        {event.img && (
          <img
            src={event.img}
            alt="preview"
            style={{ marginTop: 10, maxWidth: '100%', borderRadius: 6, boxShadow: '0 2px 6px rgba(0,0,0,0.12)' }}
          />
        )}
      </div>

      <div className="button-group">
        <button className="add-button" onClick={handleAddEvent}>
          Add an Event
        </button>
        <CancelEvent />
      </div>
    </div>
  );
}

export default AddEvent;
