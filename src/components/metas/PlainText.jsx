import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlainText.css';

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
    this.setState({
      regex: text,
      text: text
    });
    this.props.onChangeedRegex(e.target.id, text);
  }

  render() {
    return (
      <div className="plain-text">
        <input id={this.props.id}
          onChange={this.handleChangeText} placeholder="plain text" />
      </div>
    )
  }
}

PlainText.propTypes = {
  regex: PropTypes.string,
  text: PropTypes.string
}
