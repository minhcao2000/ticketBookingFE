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
import { SignInAPI, PaymentAPI } from '../../service';


export default function InfoUser({ route, navigation }) {
    const [index, setIndex] = React.useState(1)
    const [usename, setUsename] = React.useState('')
    const [fullname, setFullname] = React.useState('')
    const [birthday, setBirthday] = React.useState()
    const [gender, setGender] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const { seats, nameSeats, timeee, room } = route.params

    const [date, setDate] = React.useState()
    const [open, setOpen] = React.useState(false)

    const handleSignUp = async () => {
        const response = await SignInAPI({
            Name: fullname,
            Username: usename,
            Password: password,
            Birtday: birthday,
            Gender: gender,
            Address: address,
            Phone: phone,
            Email: email
        })
        console.log(response.status)
        if (response.status) {
            const resp = await PaymentAPI({
                User_ID: response.user._id,
                Seat_IDs: seats
            })
            console.log(resp.status)
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

            {open ? <View style={styles.calender}>
                <CalendarPicker onDateChange={(date) => {
                    setDate(date)
                    setOpen(!open)
                }}
                    dayShape="square"
                    todayBackgroundColor="rgba(90, 80, 110, 0.62)"
                    selectedDayTextColor="#EBEBF5"
                    textStyle={{
                        color: "#EBEBF5",
                        fontSize: 14,
                        fontWeight: '400',
                        letterSpacing: 1.5
                    }}
                />
            </View> : null}

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
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.search}>
                        <Text style={{ fontSize: 16, color: "#EBEBF5", fontWeight: '400', letterSpacing: 1.5 }}>Full Name</Text>
                    </View>
                    <TextInput
                        style={styles.fild}
                        onChangeText={setFullname}
                        value={fullname}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.search}>
                        <Text style={{ fontSize: 16, color: "#EBEBF5", fontWeight: '400', letterSpacing: 1.5 }}>Birthday</Text>
                    </View>
                    <TouchableOpacity onPress={() => setOpen(!open)} style={styles.fild}>
                        <Text style={{ fontSize: 16, color: "#EBEBF5", fontWeight: '400', letterSpacing: 1.5 }}>{date ? moment(date).format('DD/MM/YYYY') : ''}</Text>
                    </TouchableOpacity>
                </View>


                <View style={{ flexDirection: "row" }}>
                    <View style={styles.search}>
                        <Text style={{ fontSize: 16, color: "#EBEBF5", fontWeight: '400', letterSpacing: 1.5 }}>Gender</Text>
                    </View>
                    <View style={{
                        backgroundColor: "rgba(90, 80, 110, 0.62)",
                        width: 240,
                        height: 50,
                        borderRadius: 10,
                        flexDirection: "row",
                        alignItems: 'center',
                        marginBottom: 10,
                        marginLeft: 12,
                        paddingHorizontal: 20,
                    }}>
                        <RNPickerSelect
                            useNativeAndroidPickerStyle={false}
                            placeholder={{ label: 'Orther', value: 'Orther' }}
                            style={{
                                inputAndroid: {
                                    width: 240,
                                    fontSize: 16,
                                    color: "#EBEBF5",
                                    fontWeight: '400',
                                    letterSpacing: 1.5

                                },
                            }}
                            onValueChange={(value) => setGender(value)}
                            items={[
                                { label: 'Female', value: 'Female' },
                                { label: 'Male', value: 'Male' },
                            ]}

                        />

                    </View>

                </View>

                <View style={{ flexDirection: "row" }}>
                    <View style={styles.search}>
                        <Text style={{ fontSize: 16, color: "#EBEBF5", fontWeight: '400', letterSpacing: 1.5 }}>Address</Text>
                    </View>
                    <TextInput
                        style={styles.fild}
                        onChangeText={setAddress}
                        value={address}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.search}>
                        <Text style={{ fontSize: 16, color: "#EBEBF5", fontWeight: '400', letterSpacing: 1.5 }}>Phone</Text>
                    </View>
                    <TextInput
                        style={styles.fild}
                        onChangeText={setPhone}
                        value={phone}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.search}>
                        <Text style={{ fontSize: 16, color: "#EBEBF5", fontWeight: '400', letterSpacing: 1.5 }}>Email</Text>
                    </View>
                    <TextInput
                        style={styles.fild}
                        onChangeText={setEmail}
                        value={email}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.buttton} onPress={() => {
                console.log(usename)
                console.log(fullname)
                console.log(moment(date).format('DD/MM/YYYY'))
                console.log(gender)
                console.log(address)
                console.log(phone)
                console.log(email)
                handleSignUp()
            }}>
                <Text style={{ fontSize: 18, letterSpacing: 1.8, fontWeight: '500' }}
                >SIGN UP</Text>
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
        marginBottom: 10,
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
