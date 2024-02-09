import React, { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import HomeScreen from './home.screen';
import * as Location from 'expo-location';
import places from '../../utils/places';

import { updateLocationText } from '../../utils/locationFunctions';

const HomeController = ({ route, navigation }) => {
  const [placeTitle, setPlaceTitle] = useState('');
  const [timeToUpdate, setTimeToUpdate] = useState(2000);

  const [location, setLocation] = useState(null); // location is storing the full information about location
  const [locationError, setLocationError] = useState('');
  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setLocationError(
          'Permission to access location was denied. Click on Open Settings to share your location with app.'
        );
        return;
      }

      await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: timeToUpdate,
          distanceInterval: 1,
        },

        (location) => {
          setLocation(location);
          setLatitude(location.coords.latitude);
          setLongitude(location.coords.longitude);

          const newLocationtext = updateLocationText(
            location.coords.latitude,
            location.coords.longitude,
            places
          );
          setPlaceTitle(newLocationtext);
        }
      );
      setLocationError('');
    } catch (error) {
      console.error('Error requesting location permission:', error);
    }
  };

  const openSettings = () => {
    Linking.openSettings();
  };

  useEffect(() => {
    getLocation();
  }, []);

  const handlers = {
    locationError,
    openSettings,
    latitude,
    longitude,
    placeTitle,
  };
  return <HomeScreen handlers={handlers} />;
};

export default HomeController;
