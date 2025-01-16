import {useEffect, useState, createContext } from "react";
import {createRange} from './utils/utils.js'
import Home from "./pages/Home.jsx";

const GlobalContext = createContext();

export default function App() {
  const [scale, setScale] = useState([]);

  useEffect(()=>{
    setScale(createRange(flatRange))
  },[])


  let flatRange = [
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
  ];






  return (
    scale.length && (

      <GlobalContext.Provider value={{scale, setScale}}>
      <Home scale = {scale} />
    </GlobalContext.Provider>
    )
  );
}

export { GlobalContext };
export {createRange}
