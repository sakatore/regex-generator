import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SelectableRegex.css';
import PlainText from './metas/PlainText.jsx';

export default class SelectableRegex extends Component {
  constructor(props) {
    super(props);
    const items = [];
    for (var i = 0; i < this.props.tabsCount; i++) {
      const item = { id: i, type: 'Text', characters: '', meta: '' };
      items.push(item);
    }
    this.state = { items: items, text: '', regex: '' };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChangeRegex = this.handleChangeRegex.bind(this);
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
    this.setState({ text: value });
    this.setState((prevState) => {
      const newItem = Object.assign({}, prevState.items[index], {
        characters: value
      });
      prevState.items[index] = newItem;
      return { items: prevState.items };
    });
  }

  handleChangeRegex(id, regex) {
    this.setState((prevState) => {
      const newItem = Object.assign({}, prevState.items[id], {
        meta: regex
      });
      prevState.items[id] = newItem;
      return { items: prevState.items };
    });
    this.setState({ regex: regex });
  }

  getCharacters(id) {
    if (this.state.items[id].type === 'Text') {
      return (<PlainText id={id} onChangeedRegex={this.handleChangeRegex} />);
    }
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
    characters: PropTypes.string,
    meta: PropTypes.string
  }))
};
