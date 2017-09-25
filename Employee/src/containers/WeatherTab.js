import React from 'react';
import {
    NavigatorIOS,
    StyleSheet
} from 'react-native';
import Weather from './Weather';


const WeatherTab = ({props}) => (
    <NavigatorIOS
        style={styles.container}
        initialRoute={{
            title: 'Weather list',
            component: Weather
        }}/>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default WeatherTab;
