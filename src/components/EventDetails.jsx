import { getEventbyId } from "../service/api";
function EventsDetails(id) {
    try {
        return (
            < div >
                <input
                    type="text"
                    id="id"
                    name="id"
                    placeholder="Entrer l'ID de l'event"
                    required
                />
                <button onClick={getEventbyId(id)}>Afficher les détails de l'event</button>
            </div >
        )

    } catch (error) {
        <p id="Error">Event does not exist !</p>
    }
}

