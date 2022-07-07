import React, { Component } from 'react';
import ChagnedUrlComponent from './ChagnedUrlComponent';

class ChangedUrl extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    return (
      <div>
        <ChagnedUrlComponent></ChagnedUrlComponent>
      </div>
    );
  }
}

export default ChangedUrl;