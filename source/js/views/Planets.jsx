import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPlanets } from 'actions/planets';

@connect(state => ({
  error: state.planets.get('error'),
  loading: state.planets.get('loading'),
  planets: state.planets.get('planets'),
}))
export default class Planets extends Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool,
    planets: PropTypes.object,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  componentWillMount() {
    //console.log("Props: ",this.props);
    const {
      dispatch,
      planets,
    } = this.props;

    if (!planets) {
      dispatch(getPlanets());
    }
  }

  renderPlanets() {
    const {
      planets,
    } = this.props;

    return planets.results.map(planet => {
      return (
        <div key={ planet.url } className='People-person'>
          <h3>{ planet.name }</h3>
          <div>Diameter: { planet.diameter }</div>
          <div>Climate: { planet.climate }</div>
        </div>
      );
    });
  }

  render() {
    const {
      loading,
      error,
      planets,
    } = this.props;


    return (
      <div className='People'>
        <h1>Planets</h1>
        { loading && <div>Loading planets...</div> }
        { error && error.toString() }
        <div className='People-list'>
          { planets && this.renderPlanets() }
        </div>
      </div>
    );
  }
}
