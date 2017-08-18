import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Regex.css';
import Result from './Result.jsx';

export default class Regex extends Component {
  render() {
    const regex = '/^[a-z][0-9]$/'
    return (
      <div className="regex">
        <Result regex={regex} />
      </div>
    )
  }
}
