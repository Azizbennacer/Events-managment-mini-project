import { useState, useEffect } from "react";
import { getAllEvents, deleteEvent } from "../service/api";
import './Events.css';
import { useNavigate } from 'react-router-dom';


export function Events() {
  const [events, setEvents] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    handleGetEvents();
  }, []);


  const handleDeleteEvent = async (id) => {
  try {
    await deleteEvent(id);
    // Rafraîchir la liste après suppression
    handleGetEvents();
  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
    }
};
  const handleGetEvents = () => {
    getAllEvents()
      .then(response => {
        console.log(response.data); 
        setEvents(response.data);   
      })
      .catch(error => {
        console.error("Erreur lors du chargement des événements :", error);
      });
  };
  return (
    <div>
      <div className="events-header">
        <h2>Liste des événements</h2>
        <button className="show-events-button" onClick={handleGetEvents}>
          Actualiser les évènements
        </button>
      </div>

      <div className="events-grid">
        {events
          .filter(event => event.name && event.price)
          .map(event => (
            <div key={event.id} className="event-card">
              <img 
                src={
                  event.img
                    ? (typeof event.img === 'string' && event.img.startsWith('data:')
                        ? event.img
                        : `/events/${event.img}`)
                    : '/events/event2.jpg'
                }
                alt={event.name}
                className="event-image"
                onError={(e) => {
                  e.target.src = '/events/event1.jpg';
                  e.target.onerror = null;
                }}
              />
              <div className="event-content">
                <h3 className="event-title">{event.name}</h3>
                <p className="event-description">{event.description}</p>
                <p className="event-price">{event.price} €</p>
                <button className="buy-button">
                  Acheter un ticket ({event.nbTickets} disponibles)
                </button>
              </div>
              <button
                className="buy-button"
                onClick={() => navigate(`/events/${event.id}/updateEvent`)}
              >
                Update event details
              </button>
              <button
                className="buy-button"
                onClick={() => handleDeleteEvent(event.id)}
              >
                Delete Event
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
