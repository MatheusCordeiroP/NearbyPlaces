const getDistanceFromLatLonInMeters = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in kilometers
  return d * 1000; // Convert distance to meters
};

const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
};

const checkIfWithinRadius = (userLatitude, userLongitude, places) => {
  const withinRadiusPlaces = [];

  places.forEach((place) => {
    const distance = getDistanceFromLatLonInMeters(
      place.latitude,
      place.longitude,
      userLatitude,
      userLongitude
    );

    if (distance <= place.radius) {
      withinRadiusPlaces.push({ ...place, distance });
    }
  });

  return withinRadiusPlaces;
};

export const updateLocationText = (userLatitude, userLongitude, places) => {
  const withinRadiusPlaces = checkIfWithinRadius(
    userLatitude,
    userLongitude,
    places
  );

  if (withinRadiusPlaces.length == 0) {
    return '';
  } else if (withinRadiusPlaces.length == 1) {
    return withinRadiusPlaces[0].title;
  } else {
    let closestPlace = withinRadiusPlaces[0];
    for (let i = 1; i < withinRadiusPlaces.length; i++) {
      const currentPlace = withinRadiusPlaces[i];
      if (currentPlace.distance < closestPlace.distance) {
        closestPlace = currentPlace;
      }
    }
    return closestPlace.title;
  }
};
