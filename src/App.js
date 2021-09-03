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

  addNewItem(e) {
    e.preventDefault();
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

  ondelete(index) {
    console.log("this element is deleted" + index);
    console.log(index);
    const list = this.state.list;
    const del = list[index];
    const newList = list.filter((item)=>item!==del);
    this.setState({list: newList});
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
          onClick={(e)=>this.addNewItem(e)}
        >
        Add
        </button>
        <ul>
          {this.state.list.map((item,index)=>{
            console.log("this"+index);
            return (<li key={index}>
            {item}
            <button onClick={()=>this.ondelete(index)}>X</button>
            </li>
            );
          })}
        </ul>
      </div>
    );
  }
};
export default App;
