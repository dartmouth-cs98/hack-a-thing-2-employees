import React from 'react';
import {
    NavigatorIOS,
    StyleSheet
} from 'react-native';
import CurrentWeather from './CurrentWeather';


const CurrentWeatherTab = ({props}) => (
    <NavigatorIOS
        style={styles.flex1}
        initialRoute={{
            title: 'Current Location Weather',
            component: CurrentWeather
        }}/>
);

const styles = StyleSheet.create({
    flex1: {
        flex: 1
    }
});

export default CurrentWeatherTab;
