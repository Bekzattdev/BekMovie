import dynamic from "next/dynamic";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
const Select = dynamic(() => import("react-select"), { ssr: false });

const arr = [1, 2, 3, 4, 5, 6, 7].map((el) => ({
  value: el,
  label: `Option ${el}`,
}));

export default function AnimatedMulti() {
  return (
    <Select
      instanceId="animated-multi-select"
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={arr}
    />
  );
}
