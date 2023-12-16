import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Calendar,LocaleConfig } from 'react-native-calendars';

const Main = () => {


  return (
    <View style={styles.container}>
      {/* Banner Image */}
      <Image
        source={require('./banner.png')} // Replace with the actual path to your image
        style={styles.bannerImage}
      />

      {/* Calendar */}
      <Calendar
         markedDates={{
            '2023-12-17': {selected: true, marked: true, selectedColor: '#192038'}
          }}
        style={styles.calendar}
        theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#0998E8',
            textSectionTitleColor: '#ffffff',
            selectedDayBackgroundColor: '#192038',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#192038',
            dayTextColor: '#ffffff',
            textDisabledColor: '#D9D9D9',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: '#ffffff',
            monthTextColor: '#ffffff',
            indicatorColor: '#ffffff',
          }}
      />

      <View>
        <Text>This is the Home Screen!</Text>
        {/* Add other components/content as needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
    },
    bannerImage: {
      marginLeft: 25,
      marginTop: 40,
      marginBottom: 50,
      width: 380,
      height: 100, 
      borderRadius: 20,

    },
    calendar: {
        height: 360,
        marginLeft: 30,
        marginRight: 30,
        marginBottom : 100,
        borderRadius: 10,

      },
  });


export default Main;

