import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundHome from "../../data/backgroundHome.svg"
import BoardLogo from "../../data/board.svg"
import GGMap from "../../data/ggmap.svg"
import Search from "../../data/search.svg"
import Microphone from "../../data/microphone.svg"
import SlidePoster from '../../component/slidePoster'
import BottomBar from '../../component/bottomBar'
import Svg, {
    Use,
} from 'react-native-svg';

export default function Home({ navigation }) {
    const [index, setIndex] = React.useState(1)
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
                    <BoardLogo height="26%" />
                    <Text style={{ fontSize: 20, color: "white", fontWeight: '500', letterSpacing: 2, textAlign: "center" }}>DBMS</Text>
                </View>
                <View style={styles.headerRight}>
                    <GGMap />
                    <View style={{ marginLeft: 6 }}>
                        <Text>Cinestar</Text>
                        <Text style={{ fontSize: 14, fontWeight: '500', letterSpacing: 1.5 }}>Sinh Viên</Text>
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.search}>
                    <Search />
                    <Text style={{ fontSize: 16, color: "#EBEBF5", fontWeight: '400', letterSpacing: 1.5, marginRight: 180 }}>Search</Text>
                    <Microphone />
                </View>
                <SlidePoster index={index} setIndex={setIndex} navigation={navigation}/>
            </View>
            <BottomBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
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
        justifyContent: "space-between",
        alignItems: 'center',
        marginRight: 20
    },
    headerLeft: {
        flexDirection: "colume",
        justifyContent: "center",
        alignItems: 'center',
        marginRight: 170
    },
    headerRight: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    body: {
        flexDirection: "colume",
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: 40
    },
    search: {
        backgroundColor: "rgba(118, 118, 128, 0.24)",
        width: 340,
        height: 50,
        borderRadius: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: -50,
        marginBottom: 30
    },
    poster: {
        flexDirection: "colume",
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 40
    }
});
