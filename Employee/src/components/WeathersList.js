import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    ListView,
    TouchableHighlight,
    NavigatorIOS
} from 'react-native';
import {bind} from '../utils/utils';
import Weather from '../components/Weather';
import WeatherDetails from '../components/WeatherDetails';

class WeathersList extends Component {

    constructor(props, context) {
        super(props, context);
        bind(this)('_renderRow', '_rowOnPress')
    }

    static propTypes = {
        dataSource: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
    };

    _renderRow(rowData, sectionId, rowId, highlightRow) {
        const _rowHighlightOnPress = () => {
            this._rowOnPress(rowData);
            highlightRow(sectionId, rowId)
        };

        return (
            <TouchableHighlight onPress={_rowHighlightOnPress}>
                <View style={styles.flex1}>
                    <Weather employee={rowData}/>
                </View>
            </TouchableHighlight>
        )
    }

    _rowOnPress(employee) {
        this.props.navigator.push({
            title: `${employee.name.first.toUpperCase()} ${employee.name.last.toUpperCase()}`,
            component: EmployeeDetails,
            passProps: {employee}
        })
    }

    render() {
        return (
            <ListView
                dataSource={this.props.dataSource}
                renderRow={this._renderRow}/>
        )
    }
}

const styles = StyleSheet.create({
    flex1: {
        flex: 1
    }
});

export default WeathersList;
