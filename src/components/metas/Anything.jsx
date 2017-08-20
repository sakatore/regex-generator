import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Anything.css';

export default class Anything extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regex: '.',
      many: false
    };
    this.onChangeCheckBox = this.onChangeCheckBox.bind(this);
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
        *:
        <input type="checkbox" onChange={this.onChangeCheckBox} />
      </div>
    )
  }
}

Anything.propTypes = {
  regex: PropTypes.string,
  many: PropTypes.bool
}
