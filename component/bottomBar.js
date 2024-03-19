import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Menu1 from "../data/menu/menu1.svg"
import Menu2 from "../data/menu/menu2.svg"
import Menu3 from "../data/menu/menu3.svg"

export default function BottomBar() {
    return (
        <View style={styles.menu}>
            <Menu2 />
            <Menu1 />
            <Menu3 />
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