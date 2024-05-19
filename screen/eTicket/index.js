import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CodeBarre from "../../data/CodeBarre.svg"
import BackgroundHome from "../../data/backgroundHome.svg"
import BoardLogo from "../../data/board.svg"
import BottomBar from '../../component/bottomBar'
import MenuButton2 from "../../data/menuButton2.svg"

export default function ETicket({ route, navigation }) {
    const { nameSeats, timeee, room } = route.params
    // console.log(seats)
    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#746F94', '#49455F', '#322F44', '#1C1A29']}
                style={styles.background}
            />
            <BackgroundHome style={styles.backgroundHome} />
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <BoardLogo height="30%" />
                    <Text style={{ fontSize: 20, color: "white", fontWeight: '500', letterSpacing: 2, textAlign: "center" }}>DBMS</Text>
                </View>
                <Text style={{ fontSize: 17, color: "white", fontWeight: '900', letterSpacing: 1.8, marginRight: 15 }}>E-TICKET</Text>
                <MenuButton2 />
            </View>
            <Text style={{ fontSize: 18, fontWeight: '700', letterSpacing: 1.2, color: "white", marginHorizontal: 60, textAlign: "center", marginTop: -80, textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: -1, height: 1 }, textShadowRadius: 10, lineHeight: 26 }}>
                Once you buy a movie ticket simply scan the barcode to access to your movie.
            </Text>
            <View style={{ marginBottom: 40 }}>
                <Image source={require("../../data/film2.jpg")} style={{ height: 320, width: 220, borderRadius: 20, marginBottom: 10, position: 'absolute', top: 30, transform: [{ rotate: '10deg' }, { translateX: 24 }] }} />
                <Image source={require("../../data/film1.jpg")} style={{ height: 320, width: 220, borderRadius: 20, marginBottom: 10, position: 'absolute', top: 30, transform: [{ rotate: '-10deg' }, { translateX: -24 }] }} />
                <Image source={require("../../data/film3.jpg")} style={{ height: 320, width: 220, borderRadius: 20, marginBottom: 10, position: 'absolute', top: 20 }} />
                <View style={{ height: 140, width: 220, backgroundColor: "#B7ADDF", marginTop: 330, borderBottomEndRadius: 20, borderBottomStartRadius: 20, flexDirection: "colume", justifyContent: "space-around", alignItems: "center", padding: 8 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                        <Text style={{ fontSize: 12, fontWeight: '500', letterSpacing: 1.2, marginRight: 20 }}>Room: {room}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                        <Text style={{ fontSize: 12, fontWeight: '500', letterSpacing: 1.2, marginRight: 20 }}>Time: {timeee}:00</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                        <Text style={{ fontSize: 12, fontWeight: '500', letterSpacing: 1.2, marginRight: 20 }}>Seats: </Text>
                        {nameSeats.map((n, i) => <Text style={{ fontSize: 12, fontWeight: '500', letterSpacing: 1.2, marginRight: 10 }}>{n}</Text>)}
                    </View>
                    <CodeBarre />
                </View>
            </View>
            <BottomBar navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40
    },
    background: {
        position: 'absolute',
        top: 0,
        height: 900,
        width: 420
    },
    backgroundHome: {
        position: 'absolute',
        top: 0,
        width: 420
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        width: 420
    },
    headerLeft: {
        flexDirection: "colume",
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: 30
    }
})