import * as actions from '../actions/cityActions';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class CityPicker extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
    }

    onClick = (city) => {
        this.props.actions.fetchCityFeeds(city);
    }

    render() {
        const { actions } = this.props;
        const cities = ['london','new-york','paris','amsterdam'];
        return <ul>
            {cities.map((city) => {
                return <li key={city} onClick={(e) => this.onClick(city)}>{city}</li>;
            })}
        </ul>;
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(CityPicker);