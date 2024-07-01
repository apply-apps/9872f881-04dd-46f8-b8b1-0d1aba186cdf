// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, View } from 'react-native';

const workouts = [
    { id: '1', name: 'Push-Ups', sets: 3, reps: 15 },
    { id: '2', name: 'Pull-Ups', sets: 3, reps: 10 },
    { id: '3', name: 'Squats', sets: 4, reps: 20 },
    { id: '4', name: 'Plank', sets: 3, duration: '60s' },
    { id: '5', name: 'Lunges', sets: 3, reps: 12 },
];

const WorkoutList = () => {
    const renderItem = ({ item }) => (
        <View style={styles.workoutItem}>
            <Text style={styles.workoutName}>{item.name}</Text>
            <Text style={styles.workoutDetail}>
                {item.sets} Sets {item.reps ? `x ${item.reps} Reps` : `for ${item.duration}`}
            </Text>
        </View>
    );

    return (
        <FlatList
            data={workouts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
        />
    );
};

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Workout Tracker</Text>
            <WorkoutList />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
    },
    list: {
        flexGrow: 1,
    },
    workoutItem: {
        backgroundColor: '#f9f9f9',
        padding: 20,
        marginVertical: 8,
        borderRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    workoutName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    workoutDetail: {
        fontSize: 16,
        color: '#555',
        marginTop: 5,
    },
});