import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SelectableRegex.css';

export default class SelectableRegex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ['[]'],
      characters: ['']
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getCharacters = this.getCharacters.bind(this);
  }

  handleSelectChange(e) {
    this.setState({type: e.target.value});
  }

  handleInputChange(e) {
    this.setState({characters: e.target.value})
  }

  getCharacters() {
    return (<input onChange={this.handleInputChange} value={this.state.text} />);
  }

  getSelectors() {
    const { tabsCount } = this.props;
    const list = [];
    for (var i = 0; i < tabsCount; i++) {
      list.push(
        <li>
          <div>
            <select onChange={this.handleSelectChange}>
              <option value="Text">Text</option>
              <option value="[]">[]</option>
              <option value=".">.</option>
              <option value="^">^</option>
              <option value="$">$</option>
            </select>
          </div>
          {this.getCharacters()}
        </li>
      );
    }
    return (
      <ul>
        {list}
      </ul>
    );
  }

  render() {
    const selectors = this.getSelectors();
    return (
      <div className="selectable-regex">
        {selectors}
      </div>
    );
  }
}

SelectableRegex.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string),
  characters: PropTypes.arrayOf(PropTypes.string)
};
