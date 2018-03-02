import React, { Component } from 'react';
import Button from 'material-ui/Button';

import PropTypes from 'prop-types';
import InputIp from 'components/local/presentation/input-ip';

import { connect } from 'react-redux';
import { getFilms } from 'actions/films';

@connect(state => ({
  ip: state.configurish.get('ip')
}))
export default class Configurish extends Component {
  render() {
    //const { ip, dispatch } = this.props;

    return (
      <div>
        <InputIp {...this.props} />
      </div>
    );
  }
}
