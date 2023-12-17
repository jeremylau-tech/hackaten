import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Calendar,} from 'react-native-calendars';

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
            '2023-12-17': {selected: true, marked: true, selectedColor: '#192038'},
            '2023-12-14': {selected: true, marked: true, selectedColor: '#CC5D5D'},
            '2023-12-04': {selected: true, marked: true, selectedColor: '#CC5D5D'}
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

      <View style={styles.card}>
        <View style={styles.cardContent}>
            <View style={styles.cardHeader}>
                <View style={styles.headerText}>
                    <Text style={styles.reminderTitle}>5 Hours </Text>
                    <View style={styles.cardBody}>
                    <Text style={{fontSize: 20, marginBottom: 10, color:"#192038"}}>to your next medication !</Text>
                    </View>
                </View>
            </View>

        </View>
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
        marginBottom : 30,
        borderRadius: 10,

      },
      // CARD LAYOUT

    card: {
      backgroundColor: '#FFC700',
      borderRadius: 20,
      padding: 15,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 30,
      marginRight: 30,
  },

  cardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
  },

  cardBody: {
      marginLeft: 10,
      marginTop: 10,
  },

  // Lable style
  reminderTitle: {
      fontSize: 50,
      fontWeight: 'bold',
      color: "#192038",
      marginLeft: 10,
      marginTop: 10,
      colour:"#192038",
  },
  medicationName: {
      fontSize: 16,
      marginTop: 10,
      color: "#0998E8",
      marginLeft: 10,
  },
  pillsLeftLabel: {
      fontSize: 14,
      fontWeight: "bold",
      marginTop: 5,
      color: "#192038",
      textAlign: "right"
  },
  headerText: {
      flex: 1,
  },
  cardContent: {
      flexDirection: 'row',
      alignItems: 'center',
  },

  });


export default Main;

