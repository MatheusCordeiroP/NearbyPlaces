import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  content: {
    alignItems: 'center',
    marginBottom: 20,
  },
  placeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  simpleText: {
    fontSize: 18,
    marginBottom: 8,
  },
  coordValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  errorMessage: {
    fontSize: 16,
    color: '#e74c3c',
    marginBottom: 20,
    textAlign: 'center',
  },
  openSettingsButton: {
    backgroundColor: '#e74c3c',
    padding: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  openSettingsButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
