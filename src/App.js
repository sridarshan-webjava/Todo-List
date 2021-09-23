import React, { Component } from "react";
import SearchBox from "./SearchBox";
import SubmitBtn from "./SubmitBtn";
import ItemsList from "./ItemsList";
import "./App.css";
import "../node_modules/pattern.css/dist/pattern.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: "",
    };
  }

  onSearchChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  onSubmission = () => {
    const newArr = [...this.state.todos, this.state.inputValue];
    this.setState({ todos: newArr });
    this.setState({ inputValue: "" });
  };

  toRemoveItem = itemToRemove => {
    // const text = e.target.previousElementSibling.textContent;
    // let copyArr = [...this.state.todos];
    // const indexOfItem = copyArr.indexOf(text);
    // copyArr.splice(indexOfItem, 1);
    // this.setState({ todos: copyArr });
    // console.log(item);
    this.setState({
      todos: [...this.state.todos].filter(item => item !== itemToRemove),
    });
  };

  render() {
    return (
      <div className="todo-container pattern-dots-xl">
        <h1>Todo List</h1>
        <div className="todo-inputs">
          <SearchBox
            searchChange={this.onSearchChange}
            inputValue={this.state.inputValue}
          />
          <SubmitBtn submit={this.onSubmission} />
        </div>
        <ItemsList
          addedItems={this.state.todos}
          removeItem={this.toRemoveItem}
        />
      </div>
    );
  }
}

export default App;
