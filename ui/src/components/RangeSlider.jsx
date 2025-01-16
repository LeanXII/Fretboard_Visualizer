import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider({ fretRange, setFretRange }) {
  const handleChange = (newValue) => {
    setFretRange(newValue);
  };

  return (
    <Slider
      getAriaLabel={() => "Fret range"}
      value={fretRange}
      onChange={handleChange}
      valueLabelDisplay="auto"
      min={1}
      max={24}
      getAriaValueText={valuetext}
      disableSwap
    />
  );
}
