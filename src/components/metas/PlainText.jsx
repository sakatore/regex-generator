import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlainText.css';
import META_CHARACTERS from './MetaCharacters.js';

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
    var text = e.target.value;
    META_CHARACTERS.forEach(meta => {
      const metaReg = new RegExp(meta, 'g');
      text = text.replace(metaReg, meta);
    });
    this.setState({
      regex: text,
      text: text
    });
    this.props.onChangedRegex(this.props.id, text);
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
