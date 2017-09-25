import React, {PropTypes} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const EmployeeDetails = ({weather}) => (
    <View style={styles.weather}>
        <Image style={styles.cover}
               source={{uri: weather.image}}/>
        <View style={styles.info}>
            <Text style={styles.name}>
                {`${weather.city.toUpperCase()}, ${weather.state.toUpperCase()}`}
            </Text>
            <Text>
                <Text style={styles.fontBold}>Temperature: </Text>
                {weather.temp}
            </Text>
            <Text>
                <Text style={styles.fontBold}>Humidity: </Text>
                {weather.humidity}
            </Text>
            <Text>
                <Text style={styles.fontBold}>Location: </Text>
                {weather.location.city},
                {weather.location.street}
            </Text>
            <Text>
                <Text style={styles.fontBold}>DOB: </Text>
                {weather.dob}
            </Text>
        </View>
    </View>
);

EmployeeDetails.propTypes = {
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
        fontSize: 16,
        fontWeight: '700',
        color: '#222222'
    },
    fontBold: {
        fontWeight: '700'
    }
});

export default EmployeeDetails;