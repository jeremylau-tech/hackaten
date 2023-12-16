import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { View, Text, Button , StyleSheet, Image, ImageSourcePropType} from "react-native";
import { FIREBASE_DB } from "../../firebaseConfig";

interface MedicationCardProps {
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
}

const MedicationCard: React.FC<MedicationCardProps> = ({ medicationName, reminderTitle, date, timeToEat, mealStatus, pillsLeft, pillImage }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <View style={styles.cardHeader}>
                    <Image source={pillImage} style={styles.pillImage} />
                    <View style={styles.headerText}>
                        <Text style={styles.medicationName}>{medicationName}</Text>
                        <Text style={styles.reminderTitle}>{reminderTitle}</Text>
                        <View style={styles.cardBody}>
                            <Text>Date: {date}</Text>
                            <Text>Time to Eat: {timeToEat}</Text>
                            <Text>Meal Status: {mealStatus}</Text>
                            <Text style={styles.pillsLeftLabel}>{pillsLeft} TABLETS LEFT</Text>
                        </View>
                    </View>
                </View>

            </View>
        </View>
    );
};

const Details = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Your Medication
            </Text>
            <Text style={styles.subtitle}>
                Schedule  
            </Text>
            <Text style={styles.description}>
            Never miss a dose again! Stay on top of your meds and keep your health on track
            </Text>

            <MedicationCard
                medicationName="Medication 1"
                reminderTitle="Reminder 1"
                date="2023-01-01"
                timeToEat="08:00 AM"
                mealStatus="Before Meal"
                pillsLeft={3}
                pillImage={require('')}
            />

            <MedicationCard
                medicationName="Medication 2"
                reminderTitle="Reminder 2"
                date="2023-01-02"
                timeToEat="12:00 PM"
                mealStatus="After Meal"
                pillsLeft={5}
                pillImage={require('./tom.jpg')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 20,
        color: "#192038",
    },
    subtitle: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 5,
        color: "#0998E8",
    },
    description: {
        fontSize: 15,
        fontWeight: 'light',
        textAlign: 'left',
        marginTop: 20,
        marginBottom: 40,
        color: "#192038",

    },
    card: {
        backgroundColor: '#FFC700',
        borderRadius: 20,
        padding: 15,
        marginBottom: 30,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    pillImage: {
        width: 150,
        height: 150,
        marginRight: 10,
        borderRadius: 10,
    },
    headerText: {
        flex: 1,
    },
    medicationName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#192038",
    },
    reminderTitle: {
        fontSize: 16,
        marginTop: 5,
        color: "#0998E8",
    },
    pillsLeftLabel: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 5,
        color: "#192038",
        textAlign: "right"
    },
    cardBody: {
        marginTop: 10,
    },
});

export default Details