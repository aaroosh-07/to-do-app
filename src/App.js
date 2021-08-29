import react from "react";


function App() {
  return (
    <div>
      <List />
    </div>
  );
}

class List extends react.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      list: [],
    }
  };
  addNewItem(text) {
    const items = this.state.list.split();
    let count;
    count = this.state.count + 1;
    const newItem = {
      id: this.state.count,
      task: text
    };
    items.append(newItem);
    this.setState({
      count: count,
      list: items
    });
  }
  render(){
    return (
      <div>
        <h1>new list</h1>
        <input type="text" placeholder="type your task here"/>
      </div>
    );
  }
};
export default App;
