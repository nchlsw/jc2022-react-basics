import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const TodoItem = (props) => {
  return (
    <Card className="my-2">
      <CardBody>
        <div className="d-flex justify-content-between">
          <div>
            <CardTitle tag="h5" className="fw-bold">
              {props.date}
            </CardTitle>
            <CardText>{props.item}</CardText>
          </div>
          {props.status == "done" ? (
            <Button color="success">Done</Button>
          ) : (
            <Button color="danger">On Going</Button>
          )}
        </div>
      </CardBody>
    </Card>
  );
};
export default TodoItem;
