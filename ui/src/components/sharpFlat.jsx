import { useContext } from "react";
import { createRange } from "../utils/utils.js";
import { GlobalContext } from "../App.jsx";

const SharpFlatConverter = ({ setStrings }) => {
  const { setScale } = useContext(GlobalContext);

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

  let sharpRange = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];

  const handleCheckbox = (event) => {
    event.target.checked
      ? setScale(createRange(sharpRange))
      : setScale(createRange(flatRange));
  };

  return (
    <label
      htmlFor="Toggle3"
      className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-100"
    >
      <input
        id="Toggle3"
        type="checkbox"
        className="hidden peer"
        onChange={handleCheckbox}
      />
      <span className="px-4 py-2 rounded-l-md dark:bg-blue-600 peer-checked:dark:bg-gray-700">
        b
      </span>
      <span className="px-4 py-2 rounded-r-md dark:bg-gray-700 peer-checked:dark:bg-blue-600">
        #
      </span>
    </label>
  );
};

export default SharpFlatConverter;
