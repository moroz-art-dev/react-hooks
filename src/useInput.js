import { getValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

export function useInput(initianValue) {
  const [value, setValue] = useState(initianValue);
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initianValue),
  ];
}
