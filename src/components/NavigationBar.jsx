import { Link } from "react-router-dom";

function NavigationBar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">My Events</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/add">Add New Event</Link></li>
            </ul>
        </nav>
    );
}

export default NavigationBar;
