import React, { useState, useEffect } from "react";
import { updateEvent, getEventbyId } from "../service/api";
import { useParams, useNavigate } from 'react-router-dom';

  function UpdateEvent() {
    const { id } = useParams();
    const navigate = useNavigate();

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
  
    const handleupdateEvent = async () => {
      try {
        await updateEvent(id, event);
        navigate('/events');
      } catch (err) {
        console.error('Erreur update:', err);
      }
    };

    // Charger l'événement courant au montage
    useEffect(() => {
      if (!id) return;
      getEventbyId(id)
        .then(res => {
          setEvent(res.data || {});
        })
        .catch(err => console.error('Erreur getEventbyId', err));
    }, [id]);
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
    <div>
      <h2>Update Event</h2>
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
        <button className="add-button" onClick={handleupdateEvent}>
          Update event
        </button>
      </div>
    </div>
  );
}
export default UpdateEvent;