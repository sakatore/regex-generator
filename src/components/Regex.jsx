import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Regex.css';
import Result from './Result.jsx';
import SelectableRegex from './SelectableRegex.jsx';

export default class Regex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regex: '',
    };
    this.handleChangeRegex = this.handleChangeRegex.bind(this);
  }

  handleChangeRegex(regex) {
    this.setState({ regex: regex });
  }

  render() {
    return (
      <div className="regex">
        <Result regex={this.state.regex} />
        <SelectableRegex onChangeedRegex={this.handleChangeRegex} />
      </div>
    )
  }
}
