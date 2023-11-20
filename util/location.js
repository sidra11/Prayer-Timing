const GOOGLE_API_KEY = 'AIzaSyB_fKt6MiUjki5iftDMlpwY8a6Uz_TiWrE';

export async function getAddress(lat, lng) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error('Failed to fetch address!');
    }
  
    const data = await response.json();
    const address = data.results[4].formatted_address;
    return address;
  }