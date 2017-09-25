import React from 'react';
import {
    NavigatorIOS,
    StyleSheet
} from 'react-native';
import Weathers from './Weathers';


const WeatherTab = ({props}) => (
    <NavigatorIOS
        style={styles.container}
        initialRoute={{
            title: 'Weather list',
            component: Weathers
        }}/>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default WeatherTab;
