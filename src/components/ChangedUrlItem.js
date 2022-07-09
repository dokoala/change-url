import React, { Component } from 'react';
import './ChangedUrlItem.css';

class ChangedUrlItem extends Component {

  shouldComponentUpdate(nextProps) {
    return this.props.checked !== nextProps.checked;
  }
  
  render() {
    const { text } = this.props;

    return (
      <div className="changedUrl-item">
        
        <div className={`ChangedUrl-text`}>
          <div>{text}</div>
        </div>
      </div>
    );
  }
}

export default ChangedUrlItem;