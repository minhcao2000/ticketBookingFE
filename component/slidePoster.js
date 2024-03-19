import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { posters } from '../data/constant';

export default function SlidePoster({ index, setIndex, navigation }) {
    const listposter = posters
    const size = posters.length
    const [movieItem, setMovieItem] = React.useState(listposter[index])
    return (
        <View style={styles.slideList}>
            <TouchableOpacity style={styles.poster} onPress={() => index == 0 ? null : setIndex(index - 1)}>
                <Image source={index == 0 ? "" : listposter[index - 1].image} style={{ height: 320, width: 220, borderRadius: 20, marginBottom: 10 }} />
                <Text style={{ fontSize: 10, color: '#C7C3E0', letterSpacing: 1.2 }}>{index == 0 ? "" : listposter[index - 1].subtitle}</Text>
                <Text style={{ fontSize: 20, color: '#C7C3E0', fontWeight: '700', letterSpacing: 1.5 }}>{index == 0 ? "" : listposter[index - 1].title}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.posterCenter} onPress={() => navigation.navigate('Movie', { image: listposter[index].image, title: listposter[index].title, subtitle: listposter[index].subtitle, discription: listposter[index].discription, dateAndTime: listposter[index].dateAndTime})}>
                <Image source={listposter[index].image} style={{ height: 320, width: 220, borderRadius: 20, marginBottom: 10 }} />
                <Text style={{ fontSize: 10, color: '#C7C3E0', letterSpacing: 1.2 }}>{listposter[index].subtitle}</Text>
                <Text style={{ fontSize: 20, color: '#C7C3E0', fontWeight: '700', letterSpacing: 1.5 }}>{listposter[index].title}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.poster} onPress={() => index == size - 1 ? null : setIndex(index + 1)}>
                <Image source={index == size - 1 ? "" : listposter[index + 1].image} style={{ height: 320, width: 220, borderRadius: 20, marginBottom: 10 }} />
                <Text style={{ fontSize: 10, color: '#C7C3E0', letterSpacing: 1.2 }}>{index == size - 1 ? "" : listposter[index + 1].subtitle}</Text>
                <Text style={{ fontSize: 20, color: '#C7C3E0', fontWeight: '700', letterSpacing: 1.5 }}>{index == size - 1 ? "" : listposter[index + 1].title}</Text>
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
        marginTop: 100
    },
    posterCenter: {
        flexDirection: "colume",
        alignItems: 'center',
        marginBottom: 100
    },
})