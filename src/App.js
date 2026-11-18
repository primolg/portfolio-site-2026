//components
import Main from "./components/Main";
import Header from "./components/header/Header";
import { useState } from "react";

function App() {
  const [cat, setCat] = useState('about')
  const [dropDown, setDropDown] = useState(false);
  const [dropDownCat, setDropDownCat] = useState('browse');


  return(
    <div id="app">
      <Header setCat={setCat} dropDown={dropDown} setDropDown={setDropDown} dropDownCat={dropDownCat} setDropDownCat={setDropDownCat}/>
      <Main cat={cat} dropDown={dropDown} setDropDown={setDropDown} dropDownCat={dropDownCat} setDropDownCat={setDropDownCat}/>
    </div>
  );
}

export default App;
