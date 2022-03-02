import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { useState } from "react";
import moment from "moment";

const TodoItem = (props) => {
  const [isDone, setIsDone] = useState(props.isDone);
  const changeStatus = () => {
    setIsDone(!isDone);
  };
  return (
    <Card className="my-2">
      <CardBody>
        <div className="d-flex justify-content-between">
          <div>
            <CardTitle tag="h5" className="fw-bold">
              {moment(props.date).format("DD MM YYYY")}
            </CardTitle>
            <CardText>{props.item}</CardText>
          </div>
          <div>
            {isDone ? (
              <Button className="mx-2" onClick={changeStatus} color="success">
                Done
              </Button>
            ) : (
              <Button className="mx-2" onClick={changeStatus} color="warning">
                On Going
              </Button>
            )}
            <Button
              onClick={props.deleteItem}
              className="mx-2"
              color="secondary"
            >
              Delete
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
export default TodoItem;
