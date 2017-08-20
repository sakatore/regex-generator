import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EitherWord.css';

export default class EitherWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regex: '',
      words: [{id: 0, text: ''}]
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleClickAddButton = this.handleClickAddButton.bind(this);
  }

  combineRegex(index, words) {
    const newRegex = words.map((word) => (word.text)).join('|');
    this.props.onChangedRegex(this.props.id, newRegex);
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
        <li className="word-field">
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

  render() {
    const wordFields = this.getWordFields();
    return (
      <div className="either-word">
        <ul>
          {wordFields}
        </ul>
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
}
