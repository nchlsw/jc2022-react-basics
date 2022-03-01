import TourCard from "./components/TourCard/TourCard";
import Navbar from "./components/Navbar/Navbar";
import Bandcard from "./components/Bandcard/Bandcard";
import Membercard from "./components/Membercard/Membercard";

//react can only return 1 element, to return more than 1 element use react fragment <> </>
function App() {
  return (
    <>
      <Navbar />
      <div>
        <Bandcard />
        <h1>Welcome to my React </h1>
        <h2> Hello fren</h2>
      </div>
      <div>
        <TourCard />
        <TourCard />
        <TourCard />
      </div>
    </>
  );
}

export default App;
