import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EitherWord.css';

export default class EitherWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regex: '',
      words: [{id: 0, text: ''}, {id: 1, text: ''}],
      group: true
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleClickAddButton = this.handleClickAddButton.bind(this);
    this.onChangeCheckBox = this.onChangeCheckBox.bind(this);
  }

  combineRegex(index, words) {
    const newRegex = words.length > 1
      ? words.map(word => word.text).filter(text => text !== '').join('|')
      : '';
    const regex = this.state.group ? `(${newRegex})` : newRegex;
    this.props.onChangedRegex(this.props.id, regex);
    return newRegex;
  }

  handleChangeText(e) {
    const index = e.target.id;
    const text = e.target.value;

    this.setState((prevState) => {
      const newWord = Object.assign({}, prevState.words[index], {
        text: text
      });
      prevState.words[index] = newWord;

      const newRegex = this.combineRegex(index, prevState.words);
      return { words: prevState.words, regex: newRegex };
    });
  }

  getWordFields() {
    const fields = this.state.words.map((word) => {
      return (
        <li className="word-field" key={`word_field_${word.id}`}>
          <input id={word.id} onChange={this.handleChangeText} value={word.text} />
        </li>
      );
    });
    return fields;
  }

  handleClickAddButton() {
    const { words } = this.state;
    const word = words[words.length - 1];
    const id = word.id + 1;
    this.setState((prevState) => ({
      words: prevState.words.concat({id: id, text: ''}),
    }));
  }

  onChangeCheckBox(e) {
    const { group, regex } = this.state;
    const newGroup = group === true ? false : true;
    const newRegex = newGroup ? `(${regex})` : regex;
    console.log(newRegex);
    this.setState((prevState) => ({
      group: newGroup
    }));
    this.props.onChangedRegex(this.props.id, newRegex);
  }

  render() {
    const wordFields = this.getWordFields();
    return (
      <div className="either-word">
        <ul>
          {wordFields}
        </ul>
        Group:
        <input type="checkbox" onChange={this.onChangeCheckBox}
          checked={this.state.group ? "checked" : ""} />
        <button onClick={this.handleClickAddButton}>Add word</button>
      </div>
    )
  }
}

EitherWord.propTypes = {
  regex: PropTypes.string,
  words: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.numbser,
    text: PropTypes.string,
  })),
  group: PropTypes.bool
}
