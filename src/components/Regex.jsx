import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Regex.css';
import Result from './Result.jsx';
import SelectableRegex from './SelectableRegex.jsx';

export default class Regex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regex: '/^[a-z][0-9]$/',
    };
  }

  render() {
    return (
      <div className="regex">
        <Result regex={this.state.regex} />
        <SelectableRegex tabsCount={this.state.tabsCount} />
      </div>
    )
  }
}
