import { useNavigate } from 'react-router-dom';

function CancelEvent() {
  const navigate = useNavigate();

  function handleCancel() {
    navigate('/events');
  }

  return <button onClick={handleCancel}>Annuler</button>;
}

export default CancelEvent;