import axios from "axios";

export const getLocation = async () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        const coordinate = {
          lat: location.coords.latitude,
          lon: location.coords.longitude,
        };

        resolve(coordinate);
      },
      (error) => {
        console.log("Location getLocation", error);
        alert("Unable to fetch currenty location");
        reject(null);
      }
    );
  });
};

export const getCountryName = async ({ lat, lon }) => {
  try {
    const { data } = await axios.get(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
    );
    return data.countryName;
  } catch (error) {
    console.log("Location getCountry Name", error);
    alert("Unable to fetch current location");
    return null;
  }
};
