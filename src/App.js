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
import axios from "axios";

//react can only return 1 element, to return more than 1 element use react fragment <> </>

function App() {
  const [todoList, setTodoList] = useState([]);

  const renderTodoList = () => {
    return todoList.map((val) => {
      return (
        <TodoItem
          date={val.date}
          item={val.item}
          isDone={val.isDone}
          deleteItem={() => deleteTodoList(val.id)}
          toggleStatus={() => toggleTodoStatus(val.id)}
        />
      );
    });
  };

  const [todoInputValue, setTodoInputValue] = useState({
    todoInput: "",
    dateInput: "",
  });

  const inputHandler = (event) => {
    const { value, name } = event.target;
    setTodoInputValue({
      ...todoInputValue,
      [name]: value,
    });
  };

  const addTodoItem = () => {
    const newData = {
      date: todoInputValue.dateInput,
      item: todoInputValue.todoInput,
      isDone: false,
    };
    axios.post("http://localhost:2000/todos", newData).then(() => {
      fetchTodoList();
    });
  };

  const deleteTodoList = (id) => {
    axios.delete(`http://localhost:2000/todos/${id}`).then(() => {
      fetchTodoList();
    });
  };

  const toggleTodoStatus = (id) => {
    const dataToFind = todoList.find((val) => {
      return val.id === id;
    });

    axios
      .patch(`http://localhost:2000/todos/${id}`, {
        isDone: !dataToFind.isDone,
      })
      .then(() => {
        fetchTodoList();
      });
  };

  const fetchTodoList = () => {
    axios.get("http://localhost:2000/todos").then((res) => {
      setTodoList(res.data);
    });

    console.log("Request");
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className="row my-3">
          <div className="offset-3 col-5">
            <Input name="todoInput" onChange={inputHandler} />
            <Input name="dateInput" onChange={inputHandler} type="date" />
          </div>
          <div className="col-2">
            <Button onClick={addTodoItem} color="success">
              Add Todo
            </Button>
            <Button onClick={fetchTodoList} color="info">
              Fetch Todo
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
            {/* {renderContentlist()} */}
            {renderTodoList()}
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
