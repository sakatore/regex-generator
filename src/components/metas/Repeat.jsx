import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Repeat.css';

export default class Repeat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regex: '',
      letter: '',
      option: '*'
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  changeRegex(id, letter, option) {
    const regex = letter.length !== 0 ? `${letter}${option}` : '';
    this.setState({
      regex: regex,
      letter: letter,
      option: option
    });
    this.props.onChangedRegex(id, regex);
  }

  handleChangeText(e) {
    const letter = e.target.value;
    const { option } = this.state;
    this.changeRegex(e.target.id, letter, option)
  }

  handleSelectChange(e) {
    const option = e.target.value;
    const { letter } = this.state;
    this.changeRegex(e.target.id, letter, option)
  }

  render() {
    return (
      <div className="repeat">
        <input id={this.props.id}
          onChange={this.handleChangeText} placeholder="one letter"
        />
        <select id={this.props.id} onChange={this.handleSelectChange}>
          <option value="*">*</option>
          <option value="+">+</option>
          <option value="?">?</option>
        </select>
      </div>
    )
  }
}

Repeat.propTypes = {
  regex: PropTypes.string,
  letter: PropTypes.string,
  option: PropTypes.string
}
