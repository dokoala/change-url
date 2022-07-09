import React, { Component } from 'react';
import ChangedItemListTemplate from './components/ChangedItemListTemplate';
import Form from './components/Form';
import ChangedUrlItemList from './components/ChangedUrlItemList';

class App extends Component {

  id = 0 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    changedUrl: [
    ],
    color: '#343a40'
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, changedUrl} = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      changedUrl: changedUrl.concat({
        id: this.id++,
        text: "바뀔 주소 값이 들어갑니다 여기",
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { changedUrl } = this.state;
    
    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = changedUrl.findIndex(todo => todo.id === id);
    const selected = changedUrl[index]; // 선택한 객체

    const nextChangedUrls = [...changedUrl]; // 배열을 복사
    
    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextChangedUrls[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      changedUrl: nextChangedUrls
    });
  }
  
  render() {
    const { input, changedUrl } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;

    return (
      <ChangedItemListTemplate form={(
        <Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <ChangedUrlItemList changedUrl={changedUrl}/>
      </ChangedItemListTemplate>
    );
  }
}

export default App;