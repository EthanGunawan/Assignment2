
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [number, setNumber] = useState('...');

  const generateNumber = () => {
    const num = Math.floor(Math.random() * 9) + 1; // 1-9
    setNumber(num.toString());
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Random Number Generator</Text>
      </View>
      
      {/* Number Display */}
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{number}</Text>
      </View>
      
      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.7} 
          onPress={generateNumber}
        >
          <Text style={styles.buttonText}>Generate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.buttonText}>View Statistics</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

// Styles unchanged from Commit 2
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b08968',
  },
  header: {
    backgroundColor: '#7f5539',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  numberContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontSize: 144,
    color: '#ffffff',
    fontWeight: '200',
  },
  buttonRow: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  button: {
    backgroundColor: '#7f5539',
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginHorizontal: 8,
    borderRadius: 12,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
