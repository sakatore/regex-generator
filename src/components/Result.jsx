import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Result.css';

export default class Result extends Component {
  render() {
    return (
      <div className="result">
        <div className="field">Regex: {this.props.regex}</div>
      </div>
    );
  }
}

Result.propTypes = {
  regex: PropTypes.string
};
