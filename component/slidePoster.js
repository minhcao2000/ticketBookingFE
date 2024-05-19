import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { posters } from '../data/constant';
import { ReadMovies } from '../service';

export default function SlidePoster({ index, setIndex, navigation, movies, setMovies, search }) {
    let listmovie = movies?.filter(movie => movie.Name.includes(search))
    const size = listmovie.length

    return (
        <View style={styles.slideList}>
            <TouchableOpacity style={styles.poster} onPress={() => index == 0 ? null : setIndex(index - 1)}>
                <Image source={{ uri: index == 0 ? "" : listmovie[index - 1]?.Image }} style={{ height: 320, width: 220, borderRadius: 20, marginBottom: 10 }} />
                <Text style={{ fontSize: 10, color: '#C7C3E0', letterSpacing: 1.2 }}>{index == 0 ? "" : listmovie[index]?.Name}</Text>
                <Text style={{ fontSize: 16, color: '#C7C3E0', fontWeight: '700', letterSpacing: 1.5 }}>{index == 0 ? "" : listmovie[index]?.Name}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.posterCenter} onPress={() => navigation.navigate('Movie', { movieId: listmovie[index]?._id,image: listmovie[index]?.Image, title: listmovie[index]?.Name, subtitle: listmovie[index]?.Name, discription: listmovie[index]?.Name, dateAndTime: listmovie[index]?.Release_date })}>
                <Image source={{ uri: listmovie[index]?.Image }} style={{ height: 320, width: 220, borderRadius: 20, marginBottom: 10 }} />
                <Text style={{ fontSize: 10, color: '#C7C3E0', letterSpacing: 1.2 }}>{listmovie[index]?.Name}</Text>
                <Text style={{ fontSize: 16, color: '#C7C3E0', fontWeight: '700', letterSpacing: 1.5 }}>{listmovie[index]?.Name}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.poster} onPress={() => index == size - 1 ? null : setIndex(index + 1)}>
                <Image source={{ uri: index == size - 1 ? "" : listmovie[index + 1]?.Image }} style={{ height: 320, width: 220, borderRadius: 20, marginBottom: 10 }} />
                <Text style={{ fontSize: 10, color: '#C7C3E0', letterSpacing: 1.2 }}>{index == size - 1 ? "" : listmovie[index + 1]?.Name}</Text>
                <Text style={{ fontSize: 16, color: '#C7C3E0', fontWeight: '700', letterSpacing: 1.5 }}>{index == size - 1 ? "" : listmovie[index + 1]?.Name}</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    slideList: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 720
    },
    poster: {
        flexDirection: "colume",
        opacity: 0.4,
        alignItems: 'center',
        marginTop: 100,
        width: 220
    },
    posterCenter: {
        flexDirection: "colume",
        alignItems: 'center',
        marginBottom: 100,
        width: 220
    },
})