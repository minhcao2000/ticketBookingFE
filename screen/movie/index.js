import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import BoardLogo from "../../data/boardLight.svg"
import MenuButton from "../../data/menuButton.svg"
import { ShowOfMovie } from '../../service';

export default function Movie({ route, navigation }) {
    const { movieId, image, subtitle, title, discription, dateAndTime } = route.params
    // console.log(dateAndTime)
    const [shows, setShows] = React.useState([])

    const handleGetShowMoviesAPI = async () => {
        // console.log(movieId)
        const response = await ShowOfMovie(movieId)
        // console.log(response)
        setShows(response.shows)
        // const handleShow = handleGetShowMoviesAPI(response.shows)
        // setMovies(response.movies)
    }




    React.useEffect(() => {
        handleGetShowMoviesAPI()
    }, [])
    console.log(shows)
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={{ uri: image }} style={styles.background} />
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <BoardLogo height="26%" />
                    <Text style={{ fontSize: 20, color: "white", fontWeight: '500', letterSpacing: 2 }}>DBMS</Text>
                </View>
                <View style={styles.headerRight}>
                    <View style={{ marginLeft: 6 }}>
                        <MenuButton />
                    </View>
                </View>
            </View>
            <View style={styles.bodyMovie}>
                <Text style={{ fontSize: 14, color: '#C7C3E0', fontWeight: '700', letterSpacing: 1.2, marginBottom: 10 }}>{subtitle}</Text>
                <Text style={{ fontSize: 32, color: '#C7C3E0', fontWeight: '900', letterSpacing: 1.5 }}>{title}</Text>
                <Text style={{ fontSize: 10, color: 'white', fontWeight: '400', letterSpacing: 1.2, textAlign: "center", margin: 20, lineHeight: 18 }}>{discription}</Text>
                <View>
                    <Text style={{ fontSize: 16, color: '#C7C3E0', fontWeight: '700', letterSpacing: 1.5 }}>SELECT DATE AND TIME</Text>
                </View>
                <View style={{ marginBottom: 120, marginTop: 20 }}>
                    {
                        shows?.map((show, ind) => {
                            // console.log(dateTime)
                            return <View key={ind} style={styles.time}>
                                <Text style={{ fontSize: 15, color: 'white', fontWeight: '400', letterSpacing: 1.5, marginVertical: 10, width: 160 }}>{show[0]?.Date.split("T")[0]}</Text>
                                {/* <Text style={{ fontSize: 15, color: 'white', fontWeight: '400', letterSpacing: 1.5, textAlign: "center", marginVertical: 10, marginRight: 30, marginLeft: 4 }}>{show.time}</Text> */}
                                {show?.map((s, i) => {
                                    return <TouchableOpacity key={i} onPress={() => navigation.navigate('Seat', { showId: s._id, timeee: s.Date.split("T")[0] + "      " + s.Time })}>
                                        <Text style={{ fontSize: 15, color: 'white', fontWeight: '400', letterSpacing: 1.5, textAlign: "center", margin: 10 }}>{s.Time + ":00"}</Text>
                                    </TouchableOpacity>
                                })}
                            </View>
                        })
                    }
                </View>
            </View>

        </TouchableOpacity>
    )
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1A1717',
        paddingBottom: 20
    },
    background: {
        position: 'absolute',
        top: 0,
        height: 460,
        width: 420
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 80
    },
    headerLeft: {
        flexDirection: "colume",
        justifyContent: "center",
        alignItems: 'center',
        marginRight: 210
    },
    headerRight: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    bodyMovie: {
        flexDirection: "colume",
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 40,
        height: 440
    },
    buttton: {
        backgroundColor: '#C7C3E0',
        borderRadius: 20,
        paddingHorizontal: 28,
        paddingTop: 10,
        paddingBottom: 12
    },
    time: {
        flexDirection: "row",
        alignItems: 'center'
    },
}