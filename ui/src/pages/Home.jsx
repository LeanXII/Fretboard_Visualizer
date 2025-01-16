import String from "../components/String.jsx";
import Nav from "../components/Nav.jsx";
import RangeSlider from "../components/RangeSlider.jsx";
import SharpFlatConverter from "../components/sharpFlat.jsx";
import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../App.jsx";

export default function Home() {
  const { scale } = useContext(GlobalContext);

  const [strings, setStrings] = useState([
    { num: 1, tune: 76 },
    { num: 2, tune: 71 },
    { num: 3, tune: 67 },
    { num: 4, tune: 62 },
    { num: 5, tune: 57 },
    { num: 6, tune: 52 },
  ]);

  const [tuningModal, setTuningModal] = useState(false);
  const [fretRange, setFretRange] = useState([1, 24]);

  const handleNumOfStrings = (numberOfStrings) => {
    switch (numberOfStrings) {
      case 6:
        setStrings([
          { num: 1, tune: 76 },
          { num: 2, tune: 71 },
          { num: 3, tune: 67 },
          { num: 4, tune: 62 },
          { num: 5, tune: 57 },
          { num: 6, tune: 52 },
        ]);
        break;
      case 7:
        setStrings([
          { num: 1, tune: 77 },
          { num: 2, tune: 72 },
          { num: 3, tune: 67 },
          { num: 4, tune: 63 },
          { num: 5, tune: 58 },
          { num: 6, tune: 53 },
          { num: 7, tune: 46 },
        ]);
        break;
      case 8:
        setStrings([
          { num: 1, tune: 76 },
          { num: 2, tune: 71 },
          { num: 3, tune: 67 },
          { num: 4, tune: 62 },
          { num: 5, tune: 57 },
          { num: 6, tune: 52 },
          { num: 7, tune: 47 },
          { num: 8, tune: 42 },
        ]);
        break;
    }
  };

  const handleTuningChange = (direction, stringNum) => {
    let currString = strings[stringNum - 1];
    if (direction === "up") {
      let newNoteIndex =
        scale.findIndex((note) => note === scale[currString.tune]) + 1;
      console.log(newNoteIndex);

      setStrings((prev) => {
        const newStrings = [...prev];
        newStrings[stringNum - 1].tune = newNoteIndex;
        return newStrings;
      });
    } else {
      let newNoteIndex =
        scale.findIndex((note) => note === scale[currString.tune]) - 1;
      setStrings((prev) => {
        const newStrings = [...prev];
        newStrings[stringNum - 1].tune = newNoteIndex;
        return newStrings;
      });
    }
  };

  return (
    <div className="bg-neutral-800 min-h-screen font-montserrat overflow-x-hidden p-4">
      <Nav />
      {/* ----------------------Modal Start -------------*/}

      <div
        className={`${
          !tuningModal ? "hidden aria-hidden='true'" : ""
        } fixed inset-0 h-[100%] bg-black z-10 overflow-x-hidden  opacity-70`}
      ></div>
      <div
        className={` absolute left-0 top-0 flex min-h-screen transition-opacity ease-in-out duration-100 items-center justify-center w-full
          ${
            !tuningModal
              ? " opacity-0 pointer-events-none "
              : "z-20 opacity-100"
          }`}
        aria-hidden={!tuningModal}
      >
        <div
          className="absolute inset-0"
          onClick={() => setTuningModal(false)}
        ></div>
        <div className="relative  w-[100vw] ml-12 mr-12 min-w-max">
          <div className="bg-neutral-800 z-30 p-4 rounded-lg">
            <div className="text-white text-center text-lg font-bold">
              Guitar Tuning
            </div>
            <div className="flex space-x-4 justify-center mt-4">
              {[...strings].reverse().map((string) => {
                return (
                  <div
                    key={string.num}
                    className="text-center bg-blue-600 flex justify-center items-center w-10 h-10 mt-4 rounded-full "
                  >
                    <div className="flex flex-col space-y-1">
                      <button
                        className="text-white text-lg font-bold"
                        onClick={() => handleTuningChange("up", string.num)}
                      >
                        +
                      </button>
                      <div className="text-lg text-white font-bold ">
                        {scale[string.tune]}
                      </div>
                      <button
                        className="text-white font-bold text-lg"
                        onClick={() => handleTuningChange("down", string.num)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex mt-12 text-white text-lg justify-evenly pl-44 pr-44 min-w-max">
              <button
                className="bg-blue-600 p-2 rounded-lg w-[25%] hover:bg-blue-500 cursor-pointer min-w-max"
                onClick={() => handleNumOfStrings(6)}
              >
                6-String
              </button>
              <button
                className="bg-blue-600 p-2 rounded-lg w-[25%] hover:bg-blue-500 cursor-pointer min-w-max"
                onClick={() => handleNumOfStrings(7)}
              >
                7-String
              </button>
              <button
                className="bg-blue-600 p-2 rounded-lg w-[25%] hover:bg-blue-500 cursor-pointer min-w-max"
                onClick={() => handleNumOfStrings(8)}
              >
                8-String
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*---------------------Modal End---------------------------*/}

      <div>
        <div className="flex">
          <div className="bg-neutral-700 p-2 max-w-min rounded-md">
            <button
              className="bg-neutral-800 text-white text-sm text-nowrap rounded-lg p-2"
              onClick={() => setTuningModal(true)}
            >
              Change Tuning
            </button>
          </div>
          <div className="flex flex-col justify-between w-40 ml-12">
            <label htmlFor="fret-range-max" className="text-white">
              Fret Range
            </label>
            <RangeSlider fretRange={fretRange} setFretRange={setFretRange} />
          </div>
          <div className="flex justify-center ml-10">
            <SharpFlatConverter setStrings={setStrings} />
          </div>
        </div>
        <div className="overflow-x-scroll">
          <div className="p-2 border border-1 border-neutral-700 mt-12 min-w-max text-nowrap flex flex-col">
            {strings.map((string) => {
              return (
                <String
                  key={string.num}
                  scale={scale}
                  strings={strings}
                  string={string}
                  fretRange={fretRange}
                />
              );
            })}
          </div>

          <div className="p-2 text-nowrap flex flex-col">
            <div className="flex justify-evenly ml-2 min-w-[1400px]">
              <div className="relative  flex w-8 h-8">
                <div className=" flex relative justify-center z-4  w-8 h-8">
                  <div className="flex text-neutral-600 text-center p-1 "></div>
                </div>
              </div>
              {[...Array(fretRange[1] + 1).keys()]
                .slice(fretRange[0])
                .map((num) => {
                  return (
                    <div key={num} className="w-full flex justify-center">
                      <div className="text-white text-sm">{num}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
