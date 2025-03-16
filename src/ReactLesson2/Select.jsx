import { useState } from "react";

const Select = () => {
    const [fruits, setFruits] = useState("Olma");

    const handleChange = (event) => {
      setFruits(event.target.value);
    };
  return (
    <>
    <div className="flex gap-4 my-10">
    <select className="bg-slate-500 py-1 px-3 text-white" value={fruits} onChange={handleChange}>
        <option value="Olma">Olma</option>
        <option value="Banan">Banan</option>
        <option value="Uzum">Uzum</option>
        <option value="Nok">Nok</option>
      </select>
      <h1 className="bg-green-500 py-1 px-3 text-white">{fruits}</h1>
    </div>
    </>
  )
}

export default Select