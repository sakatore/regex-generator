import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SelectableRegex.css';

export default class SelectableRegex extends Component {
  selectors() {
    const { tabsCount } = this.props;
    const list = [];
    for (var i = 0; i < tabsCount; i++) {
      list.push(<li>{i}</li>);
    }
    return (
      <ul>
        {list}
      </ul>
    );
  }

  render() {
    const selectors = this.selectors();
    return (
      <div className="selectable-regex">
        {selectors}
      </div>
    );
  }
}

SelectableRegex.propTypes = {
  tabsCount: PropTypes.number
};
