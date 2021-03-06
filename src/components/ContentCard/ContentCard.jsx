import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
  CardText,
  Button,
} from "reactstrap";
import { FaRegThumbsUp } from "react-icons/fa";
import newyork from "./newyork.jpeg";

// const username = "Seto";
// const location = "BSD";
// let numberOfLikes = 13523;
// const caption =
//   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam totam nisi velit facere explicabo tempora enim voluptate, dolorem iure aspernatur non, expedita iusto vel unde autem porro laudantium, possimus neque dolore natus doloremque ea? Vero minima, praesentium quidem animi, cumque quia magni doloribus illo a tempora maxime? Deleniti at laborum adipisci eaque voluptatibus quaerat alias eligendi fugit. Ex fuga suscipit non doloremque sequi, dolore facilis similique incidunt dolorem, voluptatem aliquam.";

const ContentCard = (props) => {
  const likePost = (amount) => {
    alert(`Liked Post ${amount}!`);
  };

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5" className="fw-bold">
          {props.username}
        </CardTitle>
        <CardSubtitle tag="h6" className="text-muted mb-4">
          {props.location}
        </CardSubtitle>
        <img
          style={{
            width: "100%",
          }}
          className="rounded img-fluid"
          src={newyork}
          alt="user's content"
        />

        <CardText Tag="h6" className="fw-bold mt-3">
          {props.numberOfLikes.toLocaleString()} Likes
        </CardText>
        <CardText>
          <span className="fw-bold">{props.username}</span>{" "}
          {props.caption.length > 140
            ? props.caption.slice(0, 140) + "..."
            : props.caption}
        </CardText>

        <Button
          onClick={() => likePost(15)}
          color="danger"
          className="d-flex justify-content-center align-items-center"
        >
          Like <FaRegThumbsUp className="mx-2" />
        </Button>
      </CardBody>
    </Card>
  );
};

export default ContentCard;
