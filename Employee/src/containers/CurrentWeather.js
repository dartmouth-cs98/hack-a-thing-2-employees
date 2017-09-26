import React, {Component} from 'react';
import {
    StyleSheet,
    ListView,
    TextInput,
    View,
    NavigatorIOS
} from 'react-native';
import {bind} from '../utils/utils';
import WeatherApi from '../api/mockWeatherApi';
import WeathersList from '../components/WeathersList';

class CurrentWeather extends Component {

    constructor(props, context) {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        super(props, context);
        this.state = {
            dataSource: ds.cloneWithRows([])
        };

        bind(this)('_getAllWeatherNodesAndUpdate')
    }

    componentDidMount() {
        this._getAllWeatherNodesAndUpdate();
    }

    _getAllWeatherNodesAndUpdate() {
        WeatherApi.getCurrentWeatherNode()
            .then(function (data) {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(data),
                    isLoading: false
                })
            }.bind(this));
    }

    render() {
        return (
            <View style={styles.container}>
                <WeathersList
                    dataSource={this.state.dataSource}
                    navigator={this.props.navigator}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    },
    searchInput: {
        height: 44,
        margin: 10,
        marginTop: 30,
        padding: 10,
        borderWidth: 1,
        borderColor: '#CCCCCC'
    }
});


export default CurrentWeather;
