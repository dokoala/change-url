import React, { Component } from 'react';
import ChangedUrlItem from './ChangedUrlItem';

class ChangedUrlItemList extends Component {

  shouldComponentUpdate(nextProps) {
    return this.props.changedUrl !== nextProps.changedUrl;
  }
  
  render() {
    const { changedUrl } = this.props;
    
    const changedUrlList = changedUrl.map(
      ({text}) => (
        <ChangedUrlItem
          text={text}
        />
      )
    );

    return (
      <div>
        {changedUrlList}    
      </div>
    );
  }
}

export default ChangedUrlItemList;