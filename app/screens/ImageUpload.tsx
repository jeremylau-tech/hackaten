import { addDoc, collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button, View, StyleSheet, ScrollView, Image } from "react-native";
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { FIREBASE_DB } from "../../firebaseConfig";
import React from "react";

const imgDir = FileSystem.documentDirectory + 'images/';
const IMAGE_ID = 'pic1';

async function ensureDirExists() {
    const dirInfo = await FileSystem.getInfoAsync(imgDir);
    if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(imgDir, { intermediates: true });
    }
}

const ImageUpload = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        loadImages();
    }, []);

    async function loadImages() {
        const imageCollection = collection(FIREBASE_DB, 'images');
        const imageSnapshot = await getDocs(imageCollection);

        if (!imageSnapshot.empty) {
            // Retrieve the image URI from the database
            const imageUri = imageSnapshot.docs[0].data().uri;
            setImages([imageUri]);
        }
    }

    async function selectImage(useLibrary: boolean) {
        let result;

        const options: ImagePicker.ImagePickerOptions = {
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.75,
        };

        if (useLibrary) {
            result = await ImagePicker.launchImageLibraryAsync(options);
        } else {
            await ImagePicker.requestCameraPermissionsAsync();
            result = await ImagePicker.launchCameraAsync(options);
        }

        if (!result.canceled) {
            console.log(result.assets[0].uri);
            await saveImage(result.assets[0].uri);
        }
    }

    const saveImage = async (uri: string) => {
        await ensureDirExists();
        const filenaname = new Date().getTime() + '.jpg';
        const dest = imgDir + filenaname;
        await FileSystem.copyAsync({ from: uri, to: dest });

        const imageCollection = collection(FIREBASE_DB, 'images');
        
        // Check if there's an existing image document
        const existingImageSnapshot = await getDocs(imageCollection);
        if (!existingImageSnapshot.empty) {
            // Delete the old image document
            const oldImageDocId = existingImageSnapshot.docs[0].id;
            await deleteDoc(doc(imageCollection, oldImageDocId));
        }

        // Save the new image URI to Firebase

        await addDoc(imageCollection, { uri: dest });

        // Update the state with the new image
        setImages([dest]);
    };

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 20 }}>
                <Button title="Photo Library" onPress={() => selectImage(true)} />
                <Button title="Capture Image" onPress={() => selectImage(false)} />
            </View>
            <ScrollView>
                {images.map((img) => (
                    <Image key={img} source={{ uri: img }} style={{ width: 300, height: 300, alignSelf: "center" }} />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20,
        
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
    },
});

export default ImageUpload;