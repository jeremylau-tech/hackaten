import * as React from 'react';
import  { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { Calendar,LocaleConfig } from 'react-native-calendars';
import generateText from './generateText'
import { ScrollView } from 'react-native-gesture-handler';

const Main = () => {

  const [generatedText, setGeneratedText] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');


  // NEED TO ADD IN SUBMIT ONLY IT WILL SETUP 
  useEffect(() => {
    // Call the generateText function and update the state with the generated text
    generateText().then((text) => setGeneratedText(text));
    // console.log(generateText);
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  interface ChatProps {
    updateGeneratedText: (text: string) => void;
  }
  
  const ChatScreen = ({ updateGeneratedText }: ChatProps) => (
    <View style={styles.container}>
      <Text>{/* Display generated text here */}</Text>
    </View>
  );

  useEffect(() => {
    // Call the generateText function with the combined input text
    generateText(`${input1} ${input2}`).then((text) => setGeneratedText(text));
  }, [input1, input2]);

  return (
    <View style={styles.container}>
    
            <View style={styles.card}>
         
            <TextInput
              style={styles.textInput}
              placeholder="Relationship between the patient and you"
              value={input1}
              onChangeText={(text) => setInput1(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Language"
              value={input2}
              onChangeText={(text) => setInput2(text)}
            />

             <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <View style={styles.headerText}>
              <Text style={styles.reminderTitle}>{generatedText}</Text>
              {/* ... Your existing code ... */}
            </View>
          </View>
        </View>
       
      </View>
      {/* Banner Image */}
      {/* <Image
        source={require('./banner.png')} // Replace with the actual path to your image
        style={styles.bannerImage}
      /> */}

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

      <View style={styles.card}>
        <View style={styles.cardContent}>
            <View style={styles.cardHeader}>
                <View style={styles.headerText}>
                    <Text style={styles.reminderTitle}>5 Hours </Text>
                    <View style={styles.cardBody}>
                    <Text style={{fontSize: 20, marginBottom: 10, color:"#192038"}}>to your next medication !</Text>
                    <Text>{generatedText}</Text>
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
    textInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
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

