import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BoardLogo from "../../data/board.svg"
import Svg, {
    Use,
    Image,
} from 'react-native-svg';

export default function Board({ navigation }) {
    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#746F94', '#49455F', '#322F44', '#1C1A29', '#1C1A29', '#1C1A29']}
                style={styles.background}
            />
            <BoardLogo />
            <Text style={{ fontSize: 26, color: "white", fontWeight: '500', letterSpacing: 4 }}>DBMS</Text>
            <Text style={{ fontSize: 12, color: "white", marginTop: 10, letterSpacing: 4 }}>By your ticket now</Text>
            <TouchableOpacity style={styles.buttton} onPress={() => navigation.navigate('Home')}>
                <Text style={{ fontSize: 18, letterSpacing: 1.8, fontWeight: '500' }}>Reservation</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        top: 0,
        height: 900,
        width: 420
    },
    buttton: {
        backgroundColor: '#C7C3E0',
        borderRadius: 18,
        paddingHorizontal: 32,
        paddingTop: 12,
        paddingBottom: 14,
        marginBottom: -100,
        marginTop: 150
    }
});
