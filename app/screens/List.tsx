
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button, View, ScrollView,SafeAreaView, Text, TextInput, StyleSheet, FlatList, TouchableOpacity,  ImageSourcePropType} from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import schedule from './addSchedule';

import { FIREBASE_DB } from "../../firebaseConfig";
import  Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import React from "react";


export interface Medication {

    medicationName: string;
    reminderTitle: string;
    startDate: string;
    endDate: string;
    timeToEat: string;
    mealStatus: string;
    dosage: number;
    frequency:number;
    note: string;
    pillsLeft: number;
    pillImage: ImageSourcePropType;


    id: string;
}
const List = ({ navigation }: any) => {
    const [todos, setTodos] = useState<any[]>([]);
    const [todo, setTodo] = useState('');

    useEffect(() => {
        const todoRef = collection(FIREBASE_DB, 'todos');

        const subscriber = onSnapshot(todoRef, {
            next: (snapshot) => {
                console.log('UPDATED');

                const todos: any[] = [];
                snapshot.docs.forEach((doc) => {
                    todos.push({
                        id: doc.id,
                        ...doc.data()
                    } as Medication);
                });
                setTodos(todos)
            },
        });

        return () => subscriber();
 
    }, []);

    const addScheduleScreen =async () => {
        try{
            navigation.navigate('addSchedule');
        }catch (error){
            console.log("Error occurred");
        }
    };
        

    const renderTodo = ({ item }: any) => {
        const ref = doc(FIREBASE_DB, `todos/${item.id}`)

        const toggleDone = async() => {
            updateDoc(ref, { done: !item.done});
        };

        const deleteItem = async() => {
            deleteDoc(ref);
        };

        return (
            //CARD LAYOUT

            <View style={styles.card}>
            <View style={styles.cardContent}>
                <View style={styles.cardHeader}>
                    {/* <Image source={require('./tom.jpg')} style={styles.pillImage} /> */}
                    <View style={styles.headerText}>
                        <Text style={styles.reminderTitle}>{item.reminderTitle}</Text>
                        <Text style={styles.medicationName}>{item.medicationName}</Text>
                        <View style={styles.cardBody}>
                            <Text>Start Date : {item.start_date}</Text>
                            <Text>Time to Eat : {item.timeToEat}</Text>
                            <Text>Meal Status : {item.mealStatus}</Text>
                            <Text>Dosage : {item.dosage}</Text>
                            <Text>{item.note}</Text>
                            <Text style={styles.pillsLeftLabel}>{item.pillsLeft} TABLETS LEFT</Text>
                        </View>
                    </View>
                </View>

            </View>
        </View>
        );
    }

    return (
        <View style={styles.container}>

            {/* SCREEN HEADER */}
            <Text style={styles.title}>
                Your Medication
            </Text>
            <Text style={styles.subtitle}>
                Schedule  
            </Text>
            <Text style={styles.description}>
            Never miss a dose again! Stay on top of your meds and keep your health on track
            </Text>

            <View style={styles.form}>
                <Text style={styles.add_schedule}>Add New Schedule</Text>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={addScheduleScreen} style={styles.addButton}>
                        <Ionicons name="add" size={24} color='white' />
                    </TouchableOpacity>
                </View>
            </View>

            {/* CARD DETAILS */}
            { todos.length > 0 && (
                <View>
                    <FlatList
                    data = {todos}
                    renderItem={renderTodo}
                    keyExtractor={(todo: Medication) => todo.id}
                    />
                </View>
            )}

        </View>
    );
};

export default List;

const styles = StyleSheet.create({

    // CONTAINER
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    // TITLES

    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 30,
        marginLeft: 30,
        color: "#192038",
    },
    subtitle: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 5,
        marginLeft: 30,
        color: "#0998E8",
    },
    description: {
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'left',
        marginTop: 20,
        marginBottom:20,
        marginLeft: 30,
        marginRight: 30,
        color: "#192038",

    },

    // ADD SCHEDULE SECTION

    form: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
    },

    add_schedule:{
        fontSize: 15,
        fontWeight : "600",
        color:"#333333",
        marginLeft: 10

    },

    addButton:{
        marginRight:10, 
        borderWidth: 1,
        borderColor: 'white', 
        borderRadius: 5, 
        backgroundColor:'#0998E8', 
        padding:5,
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
        fontSize: 22,
        fontWeight: 'bold',
        color: "#192038",
        marginLeft: 10,
        marginTop: 10,
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

    // PILL IMAGE
    pillImage: {
        width: 150,
        height: 150,
        marginRight: 10,
        borderRadius: 10,
    },
});