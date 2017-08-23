import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Anything.css';

export default class Anything extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regex: '.',
      count: 1,
      many: false
    };
    this.onChangeCheckBox = this.onChangeCheckBox.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
  }

  onChangeNumber(e) {
    const count = e.target.value;
    console.log(count);
    const regex = '.'.repeat(count);
    this.setState({
      regex: regex,
      count: count
    });
    this.props.onChangedRegex(this.props.id, regex);
  }

  onChangeCheckBox(e) {
    const many = this.state.many === true ? false : true;
    const regex = many ? '.*' : '.';
    this.setState({
      regex: regex,
      many: many
    });
    this.props.onChangedRegex(this.props.id, regex);
  }

  render() {
    return (
      <div className="anything-character">
        何文字？:
        <input type="number" onChange={this.onChangeNumber}
          value={this.state.count} min="1" disabled={this.state.many ? "disabled" : ""} />
        <div className="regex-meta-option">
          何文字でも！:
          <input type="checkbox" onChange={this.onChangeCheckBox} />
        </div>
      </div>
    )
  }
}

Anything.propTypes = {
  regex: PropTypes.string,
  count: PropTypes.number,
  many: PropTypes.bool
}
