import React, { Component } from "react";
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Button
} from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./home";
import Movie from "./movie";
import Board from "./board";
import Seat from "./seat";
import ETicket from "./eTicket";

const Stack = createNativeStackNavigator();

export default function RootComponent() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Onboarding'>
                <Stack.Screen name="Onboarding" component={Board} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Movie" component={Movie} options={{ headerShown: false }} />
                <Stack.Screen name="Seat" component={Seat} options={{ headerShown: false }} />
                <Stack.Screen name="ETicket" component={ETicket} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
} 