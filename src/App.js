import { useState } from "react"; //use state is called react hooks
import TourCard from "./components/TourCard/TourCard";
import Navbar from "./components/Navbar/Navbar";
import Bandcard from "./components/Bandcard/Bandcard";
import Membercard from "./components/Membercard/Membercard";
import ClassComponent from "./components/ClassComponent/ClassComponent";
import ContentCard from "./components/ContentCard/ContentCard";
import TodoItem from "./components/TodoItem/TodoItem";
import { Button, Input } from "reactstrap";
import moment from "moment";

//react can only return 1 element, to return more than 1 element use react fragment <> </>

function App() {
  const [todoList, setTodoList] = useState([
    {
      date: new Date(),
      item: "Fundamental",
      isDone: true,
    },
    {
      date: new Date(),
      item: "CSS",
      isDone: false,
    },
    {
      date: new Date(),
      item: "HTML",
      isDone: true,
    },
    {
      date: new Date(),
      item: "JS",
      isDone: false,
    },
    {
      date: new Date(),
      item: "Programming",
      isDone: true,
    },
  ]);

  const renderTodoList = () => {
    return todoList.map((val, idx) => {
      return (
        <TodoItem
          date={val.date}
          item={val.item}
          isDone={val.isDone}
          deleteItem={() => {
            deleteTodoList(idx);
          }}
          toggleStatus={() => {
            toggleTodoStatus(idx);
          }}
        />
      );
    });
  };

  const [todoInputValue, setTodoInputValue] = useState("");
  const [dateInputValue, setDateInputValue] = useState(null);

  const inputHandler = (event) => {
    const { value } = event.target;
    setTodoInputValue(value);
  };

  const dateInput = (event) => {
    const { value } = event.target;
    setDateInputValue(value);
  };

  const addTodoItem = () => {
    const newTodoList = [...todoList];

    newTodoList.push({
      date: dateInputValue,
      item: todoInputValue,
      isDone: false,
    });

    setTodoList(newTodoList);
  };

  const deleteTodoList = (index) => {
    const deleteTodoListArray = [...todoList];
    deleteTodoListArray.splice(index, 1);

    setTodoList(deleteTodoListArray);
  };

  const toggleTodoStatus = (index) => {
    const duplicateTodoArray = [...todoList];

    duplicateTodoArray[index].isDone = !duplicateTodoArray[index].isDone;
    setTodoList(duplicateTodoArray);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className="row my-3">
          <div className="offset-3 col-5">
            <Input onChange={inputHandler} />
          </div>
          <div className="col-2">
            <Button onClick={addTodoItem} color="success">
              Add Todo
            </Button>
          </div>
          <div className="offset-3 col-5">
            <Input type="date" onChange={dateInput} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
            {/* {renderContentlist()} */}
            {renderTodoList()}
          </div>
        </div>

        {/* <h1>{myUsername} </h1>
        <button onClick={changeUsername}>Change username</button> */}
      </div>
    </>
  );
}

export default App;
