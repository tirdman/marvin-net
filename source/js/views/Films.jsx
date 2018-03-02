import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFilms } from 'actions/films';

@connect(state => ({
  error: state.films.get('error'),
  loading: state.films.get('loading'),
  films: state.films.get('films'),
  ip: state.configurish.get('ip'),
}))

export default class Planets extends Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool,
    films: PropTypes.object,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  componentWillMount() {
    //console.log("Props: ",this.props);
    const {
      dispatch,
      films,
    } = this.props;

    if (!films) {
      dispatch(getFilms());
    }
  }

  renderFilms() {
    const {
      films,
    } = this.props;

    return films.results.map(film => {
      return (
        <div key={ film.url } className='People-person'>
          <h3>{ film.title }</h3>
          <div>Director: { film.director }</div>
          <div>Producer: { film.producer }</div>
        </div>
      );
    });
  }

  render() {
    const {
      loading,
      error,
      films,
      ip
    } = this.props;


    return (
      <div className='People'>
        <h1>Films {ip}</h1>
        { loading && <div>Loading films...</div> }
        { error && error.toString() }
        <div className='People-list'>
          { films && this.renderFilms() }
        </div>
      </div>
    );
  }
}
