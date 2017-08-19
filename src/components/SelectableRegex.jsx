import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SelectableRegex.css';

export default class SelectableRegex extends Component {
  constructor(props) {
    super(props);
    const items = [];
    for (var i = 0; i < this.props.tabsCount; i++) {
      const item = { id: i, type: 'Text', characters: '' };
      items.push(item);
    }
    this.state = { items: items, text: '' };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getCharacters = this.getCharacters.bind(this);
  }

  handleSelectChange(e) {
    const index = e.target.id;
    const value = e.target.value;
    this.setState((prevState) => {
      const newItem = Object.assign({}, prevState.items[index], {
        type: value
      });
      prevState.items[index] = newItem;
      return { items: prevState.items };
    });
  }

  handleInputChange(e) {
    const index = e.target.id;
    const value = e.target.value;
    this.setState({text: value});
    this.setState((prevState) => {
      const newItem = Object.assign({}, prevState.items[index], {
        characters: value
      });
      prevState.items[index] = newItem;
      return { items: prevState.items };
    });
  }

  getCharacters(id) {
    return (<input id={id}
      onChange={this.handleInputChange} value={this.state.items[id].characters} />);
  }

  getSelectors() {
    const { tabsCount } = this.props;
    const list = [];
    for (var i = 0; i < tabsCount; i++) {
      list.push(
        <li>
          <div>
            <select id={i} onChange={this.handleSelectChange}>
              <option value="Text">Text</option>
              <option value="[]">[]</option>
              <option value=".">.</option>
              <option value="^">^</option>
              <option value="$">$</option>
            </select>
          </div>
          {this.getCharacters(i)}
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
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.numbser,
    type: PropTypes.string,
    characters: PropTypes.string
  }))
};
