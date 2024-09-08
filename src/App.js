import logo from "./logo.svg";
import "./App.css";
import ganesh from "./Assets/ganesh.png";
import border from "./Assets/border.png";
import BorderComp from "./Components/BorderComp";
import Sections from "./Components/Sections";
import { personalInfo, familyDetails } from "./data/datafile";

function App() {
  return (
    <div className="container min-h-screen min-w-full mainbg flex flex-col p-1">
      {/* Uncomment and adjust if using BorderComp */}
      <BorderComp>
        <div className="w-full">
          <Sections data={personalInfo} />
          <Sections data={familyDetails} />
        </div>
      </BorderComp>
    </div>
  );
}

export default App;
