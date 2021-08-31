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
      newItem: "",
      list: [],
    }
  };

  addNewItem() {
    if(this.state.newItem === ""){
      return;
    }
    const items = this.state.list;
    const newItem = this.state.newItem
    items.push(newItem);
    this.setState({
      newItem: "",
      list: items
    });
    console.log(items);
  }

  updateItem(prop){
    this.setState({
      newItem: prop
    });
  }

  render(){
    return (
      <div>
        <h1>new list</h1>
        <input type="text" placeholder="type your task here"
         value={this.state.newItem}
         onChange={(e)=>this.updateItem(e.target.value)}
        />
        <button 
          onClick={()=>this.addNewItem()}
        >
        Add
        </button>
        <ul>
          {this.state.list.map((item)=>{
            return (<li>{item}</li>);
          })}
        </ul>
      </div>
    );
  }
};
export default App;
