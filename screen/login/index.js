import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, TextInput, Button } from 'react-native';
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
import CalendarPicker from "react-native-calendar-picker";
import moment from 'moment';
import RNPickerSelect from 'react-native-picker-select';
import { LoginAPI, PaymentAPI } from '../../service';


export default function Login({ route, navigation }) {
    const [index, setIndex] = React.useState(1)
    const [usename, setUsename] = React.useState('')
    const [password, setPassword] = React.useState('')
    const { seats, nameSeats, timeee, room } = route.params

    const handlePayment = async () => {
        // console.log(usename, password)
        const response = await LoginAPI({
            Username: usename,
            Password: password
        })
        if (response.status) {
            const resp = await PaymentAPI({
                User_ID: response.user._id,
                Seat_IDs: seats
            })
            if (resp.status) {
                navigation.navigate('ETicket', { nameSeats, timeee, room })
            }
            else {
                console.log(resp.mgs)
            }
        }
        else {
            console.log(response.mgs)
        }
    }





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
            <Text style={{ fontSize: 24, color: "white", fontWeight: '700', letterSpacing: 8, marginTop: -60, marginBottom: 40 }}>PROFILE</Text>

            <View style={styles.body}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.search}>
                        <Text style={{ fontSize: 16, color: "#EBEBF5", fontWeight: '400', letterSpacing: 1.5 }}>User Name</Text>
                    </View>
                    <TextInput
                        style={styles.fild}
                        onChangeText={setUsename}
                        value={usename}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.search}>
                        <Text style={{ fontSize: 16, color: "#EBEBF5", fontWeight: '400', letterSpacing: 1.5 }}>Password</Text>
                    </View>
                    <TextInput
                        style={styles.fild}
                        onChangeText={setPassword}
                        value={password}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.buttton} onPress={() => {
                console.log(usename)
                handlePayment()
            }}>
                <Text style={{ fontSize: 18, letterSpacing: 1.8, fontWeight: '500' }}
                >PAYMENT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate('InfoUser', { seats, nameSeats, timeee, room })
            }}>
                <Text style={{ fontSize: 12, letterSpacing: 1.8, fontWeight: '500', color: "#EBEBF5", marginTop: 20 }}
                >If you do not already have an account SIGNUP</Text>
            </TouchableOpacity>
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
        marginBottom: 40,
        height: 420,
        position: 'relative'
    },
    search: {
        backgroundColor: "rgba(90, 80, 110, 0.62)",
        width: 135,
        height: 50,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 18
    },
    fild: {
        backgroundColor: "rgba(90, 80, 110, 0.62)",
        width: 240,
        height: 50,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 10,
        marginLeft: 12,
        fontSize: 16,
        color: "#EBEBF5",
        fontWeight: '400',
        letterSpacing: 1.5
    },
    buttton: {
        backgroundColor: '#C7C3E0',
        borderRadius: 14,
        paddingHorizontal: 32,
        paddingTop: 12,
        paddingBottom: 14
    },
    calender: {
        position: 'absolute',
        top: 426,
        backgroundColor: "#262336",
        zIndex: 2,
        borderRadius: 24,
        padding: 10
    }
});
