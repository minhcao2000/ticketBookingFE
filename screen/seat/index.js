import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundHome from "../../data/backgroundHome.svg"
import BoardLogo from "../../data/board.svg"
import BottomBar from '../../component/bottomBar'
import MenuButton2 from "../../data/menuButton2.svg"
import Screen from "../../data/Screen.svg"
import Seat1 from "../../data/seat/Seat1.svg"
import Seat2 from "../../data/seat/Seat2.svg"
import Seat3 from "../../data/seat/Seat3.svg"
import Calendar from "../../data/Calendar.svg"
import Buy from "../../data/Buy.svg"
import Ticket from "../../data/Ticket.svg"
import { SeatOfShow } from '../../service';
import Svg, {
    Use,
} from 'react-native-svg';

export default function Seat({ route, navigation }) {
    const { showId, timeee } = route.params
    const [seatss, setSeatss] = React.useState([])
    const [seats, setSeats] = React.useState([])
    const [nameSeats, setNameSeats] = React.useState([])

    const handleGetSeatsAPI = async () => {
        // console.log(showId)
        const response = await SeatOfShow(showId)
        // console.log(response)
        setSeatss(response.seats)
        // const handleShow = handleGetShowMoviesAPI(response.shows)
        // setMovies(response.movies)
    }

    const handleSeats = ({ id, name }) => {
        if (seats.includes(id)) {
            const tmp = seats.filter(item => item !== id)
            const tmpp = nameSeats.filter(item => item !== name)
            setSeats(tmp)
            setNameSeats(tmpp)

        } else {
            setSeats([...seats, id])
            setNameSeats([...nameSeats, name])
        }
    }


    React.useEffect(() => {
        handleGetSeatsAPI()
    }, [])
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
                <Text style={{ fontSize: 17, color: "white", fontWeight: '900', letterSpacing: 1.8, marginRight: 15 }}>CHOOSE SEATS</Text>
                <MenuButton2 />
            </View>
            <View style={styles.body}>
                <Screen style={{ marginBottom: 60 }} />
                <View style={styles.seat}>
                    {
                        seatss.map((seat, ind) => {
                            if (seat.State == "True") {
                                return <View key={ind} style={{ margin: 5 }}>
                                    <Seat1 />
                                </View>
                            } else if (seat.State == "False") {
                                if (seats.includes(seat._id)) {
                                    return <TouchableOpacity key={ind} style={{ margin: 5 }} onPress={() => handleSeats({ id: seat._id, name: seat.Col_index + seat.Row_index })}>
                                        <Seat2 />
                                    </TouchableOpacity>
                                }
                                else {
                                    return <TouchableOpacity key={ind} style={{ margin: 5 }} onPress={() => handleSeats({ id: seat._id, name: seat.Col_index + seat.Row_index })}>
                                        <Seat3 />
                                    </TouchableOpacity>
                                }

                            }
                        })
                    }
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: 'center',
                    width: 420,
                    marginTop: 40
                }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{
                            width: 20,
                            height: 20,
                            borderRadius: 5,
                            backgroundColor: '#1C1C1C',
                            marginRight: 4
                        }}
                        >
                        </View>
                        <Text style={{ fontSize: 12, color: "#D4D4D4", fontWeight: '400', letterSpacing: 1.2, marginRight: 15 }}>Available</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{
                            width: 20,
                            height: 20,
                            borderRadius: 5,
                            backgroundColor: '#E5E5E5',
                            marginRight: 4
                        }}
                        >
                        </View>
                        <Text style={{ fontSize: 12, color: "#D4D4D4", fontWeight: '400', letterSpacing: 1.2, marginRight: 15 }}>Reserved</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{
                            width: 20,
                            height: 20,
                            borderRadius: 5,
                            backgroundColor: '#2D6D30',
                            marginRight: 4
                        }}
                        >
                        </View>
                        <Text style={{ fontSize: 12, color: "#D4D4D4", fontWeight: '400', letterSpacing: 1.2, marginRight: 15 }}>Selected</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginVertical: 30, justifyContent: "center" }}>
                    <View style={{ width: 240 }}>
                        <View style={{ flexDirection: "row", marginVertical: 6 }}>
                            <Calendar style={{ marginRight: 20 }} />
                            <Text style={{ fontSize: 14, color: "white", fontWeight: '400', letterSpacing: 1.2, marginRight: 15 }}>{timeee}:00</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginVertical: 6 }}>
                            <Ticket style={{ marginRight: 20 }} />
                            <Text style={{ fontSize: 14, color: "white", fontWeight: '400', letterSpacing: 1.2, marginRight: 15 }}>Room: {seatss[0]?.Room_number}</Text>
                            <View style={{ flexDirection: "row" }}>
                                {nameSeats.map((n, i) => {
                                    return <Text style={{ fontSize: 14, color: "white", fontWeight: '400', letterSpacing: 1.2, marginRight: 15 }}>{n}</Text>
                                })}
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginVertical: 6 }}>
                            <Buy style={{ marginRight: 20 }} />
                            <Text style={{ fontSize: 14, color: "white", fontWeight: '400', letterSpacing: 1.2, marginRight: 15 }}>Total: {seats.length * 45000}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        backgroundColor: "#38354B",
                        flexDirection: "colume",
                        justifyContent: "center",
                        alignItems: 'center',
                        shadowColor: "white",
                        elevation: 4,
                        marginLeft: 30
                    }}
                        onPress={() => navigation.navigate('Login', { seats, nameSeats, timeee, room: seatss[0]?.Room_number })}>
                        <Text style={{ fontSize: 20, color: "white", fontWeight: '700', letterSpacing: 1.5, marginBottom: 5 }}>Buy</Text>
                    </TouchableOpacity>
                </View>
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
    },
    body: {
        flexDirection: "colume",
        justifyContent: "center",
        alignItems: 'center',
        marginTop: -80,
        marginBottom: 10,
        height: 540
    },
    seat: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        flexWrap: "wrap",
        width: 300,
        height: 220
    }
});
