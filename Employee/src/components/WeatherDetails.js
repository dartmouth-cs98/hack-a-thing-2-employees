import React, {PropTypes} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const WeatherDetails = ({weather}) => (
    <View style={styles.employee}>
        <Image style={styles.cover}
               source={{uri: weather.image}}/>
        <View style={styles.info}>
            <Text style={styles.name}>
                {`${weather.city.toUpperCase()}, ${weather.state.toUpperCase()}`}
            </Text>
            <Text style={styles.subtitle}>
                {weather.weatherForecast.day}
            </Text>
            <Text>
                <Text style={styles.fontBold}>Description: </Text>
                {weather.weatherForecast.description}
            </Text>
            <Text>
                <Text style={styles.fontBold}>Temperature: </Text>
                {weather.weatherForecast.temp}
            </Text>
            <Text>
                <Text style={styles.fontBold}>Humidity: </Text>
                {weather.weatherForecast.humidity}
            </Text>
            <Text>
                <Text style={styles.fontBold}>Wind: </Text>
                {weather.weatherForecast.wind}
            </Text>
        </View>
    </View>
);

WeatherDetails.propTypes = {
    ...View.propTypes,
    weather: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
    employee: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 40,
        padding: 5,
        backgroundColor: '#FFFFFF'
    },
    cover: {
        flex: 1,
        height: 150,
        marginTop: 40,
        resizeMode: 'contain'
    },
    info: {
        flex: 3,
        flexDirection: 'column',
        alignSelf: 'center',
        padding: 20
    },
    name: {
        alignSelf: 'center',
        marginBottom: 12,
        fontSize: 20,
        fontWeight: '700',
        color: '#222222'
    },
    subtitle: {
        alignSelf: 'center',
        marginBottom: 8,
        fontSize: 16,
        fontWeight: '700',
        color: '#222222'
    },
    fontBold: {
        fontWeight: '700'
    }
});

export default WeatherDetails;
