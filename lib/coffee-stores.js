



export const fetchCoffeeStores = async() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.FOURSQUARE_API_KEY,
        }
      };
      
       const response = await fetch('https://api.foursquare.com/v3/places/search?query=coffee%20store&ll=27.196649160608874%2C77.99873913354944', options);
       const data = await response.json();
       return data.results;
    
}