import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
const arr = [1, 2, 3, 4, 5, 6, 7];

export default function AnimatedMulti() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={arr.map((el) => el)}
    />
  );
}
