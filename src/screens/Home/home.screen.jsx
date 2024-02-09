import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './home.styles';

const HomeScreen = ({ handlers }) => {
  const { locationError, openSettings, latitude, longitude, placeTitle } =
    handlers;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {placeTitle && <Text style={styles.placeTitle}>{placeTitle}</Text>}

        {!locationError && (
          <>
            <Text style={styles.simpleText}>Latitude</Text>
            <Text style={styles.coordValue}>{latitude}</Text>

            <Text style={styles.simpleText}>Longitude</Text>
            <Text style={styles.coordValue}>{longitude}</Text>
          </>
        )}

        {locationError && (
          <>
            <Text style={styles.errorMessage}>{locationError}</Text>
            <TouchableOpacity
              style={styles.openSettingsButton}
              onPress={() => {
                openSettings();
              }}
            >
              <Text style={styles.openSettingsButtonText}>Open Settings</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
