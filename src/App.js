import TourCard from "./components/TourCard/TourCard";
import Navbar from "./components/Navbar/Navbar";
import Bandcard from "./components/Bandcard/Bandcard";
import Membercard from "./components/Membercard/Membercard";
import ClassComponent from "./components/ClassComponent/ClassComponent";
import ContentCard from "./components/ContentCard/ContentCard";

//react can only return 1 element, to return more than 1 element use react fragment <> </>
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <ContentCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
