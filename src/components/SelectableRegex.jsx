import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SelectableRegex.css';
import PlainText from './metas/PlainText.jsx';
import AnyOne from './metas/AnyOne.jsx';
import Anything from './metas/Anything.jsx';
import Repeat from './metas/Repeat.jsx';

export default class SelectableRegex extends Component {
  constructor(props) {
    super(props);
    const items = [{ id: 0, type: 'Text', meta: '' }];
    this.state = { items: items, regex: '' };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleChangeRegex = this.handleChangeRegex.bind(this);
    this.handleClickAddButton = this.handleClickAddButton.bind(this);
    this.getMetaCharacter = this.getMetaCharacter.bind(this);
  }

  combineRegex(index, regex, items) {
    const metas = items.map((item) => (item.id === index ? regex : item.meta));
    const newRegex = metas.join('');
    this.props.onChangedRegex(newRegex);
    return newRegex;
  }

  handleSelectChange(e) {
    const index = e.target.id;
    const type = e.target.value;
    const meta = (type === '^' || type === '$') ? type : '';
    this.setState((prevState) => {
      const newItem = Object.assign({}, prevState.items[index], {
        type: type,
        meta: meta
      });
      prevState.items[index] = newItem;

      const newRegex = this.combineRegex(index, '', prevState.items);
      return { items: prevState.items, regex: newRegex };
    });
  }

  handleChangeRegex(index, regex) {
    this.setState((prevState) => {
      const newItem = Object.assign({}, prevState.items[index], {
        meta: regex
      });
      prevState.items[index] = newItem;

      const newRegex = this.combineRegex(index, regex, prevState.items);
      return { items: prevState.items, regex: newRegex };
    });
  }

  handleClickAddButton() {
    const { items } = this.state;
    const item = items[items.length - 1];
    const id = item.id + 1;
    const newItem = { id: id, type: 'Text', meta: '' };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
    }));
  }

  getMetaCharacter(index) {
    const { type }  = this.state.items[index];
    switch (type) {
    case 'Text':
      return (<PlainText id={index} onChangedRegex={this.handleChangeRegex} />);
    case '[]':
      return (<AnyOne id={index} onChangedRegex={this.handleChangeRegex} />);
    case '.':
      return (<Anything id={index} onChangedRegex={this.handleChangeRegex} />);
    case 'Repeat':
      return (<Repeat id={index} onChangedRegex={this.handleChangeRegex} />);
    default:
      console.log('default');
    }
  }

  getSelectors() {
    const { items } = this.state;
    const first = (index) => {
      return index === 0 ? <option value="^">^</option> : null;
    }
    const last = (index) => {
      return index === items.length - 1 ? <option value="$">$</option> : null;
    }

    const list = items.map((item) => (
      <li className="selectable-meta">
        <div>
          <select id={item.id} onChange={this.handleSelectChange}>
            <option value="Text">Text</option>
            <option value="[]">[]</option>
            <option value=".">.</option>
            <option value="Repeat">Repeat</option>
            {first(item.id)}
            {last(item.id)}
          </select>
        </div>
        {this.getMetaCharacter(item.id)}
      </li>
    ));

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
        <button onClick={this.handleClickAddButton}>Add Regex</button>
      </div>
    );
  }
}

SelectableRegex.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.numbser,
    type: PropTypes.string,
    meta: PropTypes.string
  })),
  regex: PropTypes.string
};
