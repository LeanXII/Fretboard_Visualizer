import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../App.jsx";

const String = ({ string, strings, fretRange, scale }) => {
  const [newScale, setNewScale] = useState([]);

  useEffect(() => {
    let openIndex = scale.findIndex(
      (element) => element === scale[string.tune]
    );

    setNewScale(scale.slice(openIndex, openIndex + fretRange[1] + 1));
  }, [string, strings, scale]);

  return (
    <div className="flex w-full min-w-[1405px] h-full">
      <div className=" border-neutral-600 flex ">
        <div className=" flex  justify-center bg-neutral-800 w-8 h-8">
          <div className="flex text-neutral-600 text-center p-1 ">
            <div className="w-10">{newScale[0]}</div>
          </div>
        </div>
      </div>

      <div className="flex w-[100%] relative justify-evenly ml-2 h-full">
        <div className="h-[50%] absolute inset-0 border-b-2 border-neutral-600"></div>
        {newScale.slice(fretRange[0]).map((note, index) => {
          return (
            <div
              key={index}
              className=" flex justify-center border-l-2 bg-neutral-800  w-full"
            >
              <div className="flex relative z-4 bg-neutral-800 text-neutral-600 text-center flex-shrink-0 p-1 ">
                <div className="">{note}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default String;
