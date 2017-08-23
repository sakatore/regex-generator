import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Result.css';

export default class Result extends Component {
  render() {
    return (
      <div className="result">
        <p1 className="title">Result</p1>
        <div className="field">
          <span className="regex">{this.props.regex}</span>
        </div>
      </div>
    );
  }
}

Result.propTypes = {
  regex: PropTypes.string
};
