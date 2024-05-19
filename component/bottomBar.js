import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Menu1 from "../data/menu/menu1.svg"
import Menu2 from "../data/menu/menu2.svg"
import Menu3 from "../data/menu/menu3.svg"

export default function BottomBar({ navigation }) {
    const form = true
    return (
        <View style={styles.menu}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Menu2 />
            </TouchableOpacity>
            <TouchableOpacity>
                <Menu1 />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('History', { form })}>
                <Menu3 />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        backgroundColor: "#38354B",
        paddingVertical: 12,
        width: 240,
        borderRadius: 20
    }
})