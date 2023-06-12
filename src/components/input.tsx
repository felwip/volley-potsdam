import React, {useState} from "react";

export function CellInput() {
  const [value, setValue] = useState("");
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  <td>
    <CellInput />
  </td>;
  return <input value={value} onChange={onChange} />;
}
