import TourCard from "./components/TourCard/TourCard";
import Navbar from "./components/Navbar/Navbar";
import Bandcard from "./components/Bandcard/Bandcard";
import Membercard from "./components/Membercard/Membercard";
import ClassComponent from "./components/ClassComponent/ClassComponent";
import ContentCard from "./components/ContentCard/ContentCard";

//react can only return 1 element, to return more than 1 element use react fragment <> </>

const data = [
  {
    username: "Mark",
    location: "BSD",
    numberOfLikes: 120,
    caption: "Halo",
  },
  {
    username: "Seto",
    location: "Jakarta",
    numberOfLikes: 3,
    caption: "Hello World",
  },
  {
    username: "Bill",
    location: "Puncak",
    numberOfLikes: 314,
    caption: "Halo Dunia",
  },
];
function App() {
  const renderContentlist = () => {
    return data.map((val) => {
      return (
        <ContentCard
          username={val.username}
          location={val.location}
          numberOfLikes={val.numberOfLikes}
          caption={val.caption}
        />
      );
    });
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">
            {renderContentlist()}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
