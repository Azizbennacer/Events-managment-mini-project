import event1 from './event1.jpg';
import event2 from './event2.jpg';
import defaultEvent from './default-event.jpg';

// Mapping des noms d'images vers leurs imports
export const eventImages = {
  'event1.jpg': event1,
  'event2.jpg': event2,
  'default': defaultEvent
};

export function getEventImageUrl(imageName) {
  return eventImages[imageName] || eventImages.default;
}