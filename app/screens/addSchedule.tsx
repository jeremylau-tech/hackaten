import * as React from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageSourcePropType, ScrollView} from 'react-native';
import { FIREBASE_DB } from '../../firebaseConfig';


interface AddScheduleProps {
    route: any; 
    navigation: any; 
}

const addSchedule = ({ route, navigation }: AddScheduleProps) => {
    const [medicationName, setMedicationName] = useState('');
    const [reminderTitle, setReminderTitle] = useState('');
    const [start_date, setStartDate] = useState('');
    const [end_date, setEndDate] = useState('');
    const [timeToEat, setTimeToEat] = useState('');
    const [mealStatus, setMealStatus] = useState('');
    const [dosage, setDosage] = useState<number | undefined>(undefined);
    const [frequency, setFrequency] = useState<number | undefined>(undefined);
    const [note, setNote] = useState('');
    const [pillsLeft, setPillsLeft] = useState<number | undefined>(undefined);
    const [pillImage, setPillImage] = useState<ImageSourcePropType | undefined>(undefined);

    const handleAdd = async () => {
        try{
            const doc = await addDoc(collection(FIREBASE_DB, 'todos'), { 
                medicationName: medicationName,
                reminderTitle: reminderTitle, 
                start_date: start_date,
                end_date: end_date,
                timeToEat: timeToEat,
                mealStatus: mealStatus,
                dosage: dosage,
                frequency: frequency,
                note: note,
                pillsLeft : pillsLeft
            });
            setMedicationName("");
            setReminderTitle("");
            setStartDate("");
            setEndDate("");
            setTimeToEat("");
            setMealStatus("");
            setDosage(0);
            setFrequency(0);
            setNote("");
            setPillsLeft(0);
            console.log('Medication added with ID:', doc.id);
            navigation.navigate('List');
        }catch (error){
            console.error('Error adding medication:', (error as any).message);
        }
        
    };


    return (
        <ScrollView>
            <View style={styles.container}>
            <Text style={styles.label}>Medication Name :</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Medication Name"
                onChangeText={(text) => setMedicationName(text)}
                value={medicationName}
            />

            <Text style={styles.label}>Reminder Title :</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Reminder Title"
                onChangeText={(text) => setReminderTitle(text)}
                value={reminderTitle}
            />

            <Text style={styles.label}>Dosage :</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Number of Tablets"
                onChangeText={(text) => setDosage(Number(text))}
                value={dosage?.toString()}
            />

            <Text style={styles.label}>Frequency (per day) :</Text>
            <TextInput
                style={styles.input}
                placeholder="How Often ?"
                onChangeText={(text) => setFrequency(Number(text))}
                keyboardType="numeric"
                value={frequency?.toString()}
            />

            <Text style={styles.label}>Total Pills Available :</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Number of Tablets"
                onChangeText={(text) => setPillsLeft(Number(text))}
                keyboardType="numeric"
                value={pillsLeft?.toString()}
            />

            <Text style={styles.label}>Time to Eat:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Time to Eat"
                onChangeText={(text) => setTimeToEat(text)}
                value={timeToEat}
            />

            <Text style={styles.label}> Start Date:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Start Date"
                onChangeText={(text) => setStartDate(text)}
                value={start_date}
            />

            <Text style={styles.label}> End Date:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter End Date (if applicable)"
                onChangeText={(text) => setEndDate(text)}
                value={end_date}
            />


            <Text style={styles.label}>Meal Status:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Meal Status"
                onChangeText={(text) => setMealStatus(text)}
                value={mealStatus}
            />

            <Text style={styles.label}>Special Instruction :</Text>
            <TextInput
                style={styles.input}
                placeholder="Add Instructions or notes..."
                onChangeText={(text) => setNote(text)}
                value={note}
            />

            <Text style={styles.label}>Pill Image:</Text>
            <Image
                style={styles.image}
                source={pillImage || require('./tom.jpg')} // Replace with your default image
            />

            <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
                <Text style={styles.buttonText}>Add Medication</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'white',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 15,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        marginBottom: 15,
    },
    addButton: {
        backgroundColor: '#0998E8',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default addSchedule;