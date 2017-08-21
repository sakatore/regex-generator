import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlainText.css';
import replaceMetaChar from './MetaCharacters.js';

export default class PlainText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regex: '',
      text: ''
    };
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText(e) {
    const text = e.target.value;
    const regex = replaceMetaChar(text);
    this.setState({
      regex: regex,
      text: text
    });
    this.props.onChangedRegex(this.props.id, regex);
  }

  render() {
    return (
      <div className="plain-text">
        <input onChange={this.handleChangeText} placeholder="plain text" />
      </div>
    )
  }
}

PlainText.propTypes = {
  regex: PropTypes.string,
  text: PropTypes.string
}
