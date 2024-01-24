
import * as React from 'react';
import { View, Text,Image,StyleSheet } from 'react-native';

const Pill_Info = () => {
  return (
    <View style={styles.container}>
        <Image
        source={require('./tom.jpg')} 
        style={styles.image}
      />
      <Text style={styles.title_label}>Medication Name</Text>
      <Text style={styles.description}>wvbhjbvhjevhervhberjhfbejrb</Text>

      <Text style={styles.title_label}>Description</Text>
      <Text style={styles.description}>wvbhjbvhjevhegerkgejgnejgnekknegrvhberjhfbejrb</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    description:{
        fontSize: 14,
    },
    title_label:{
        fontSize: 25,
        fontWeight: "bold",
        margin: 20,
        color:"#3AB1F5"

    },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: "center"
  },
  image: {
    width: 200,  
    height: 200, 
    resizeMode: 'cover',
    marginBottom: 20,
    marginTop: 30,
    borderRadius: 100,
  },
});

// Export your component
export default Pill_Info;
