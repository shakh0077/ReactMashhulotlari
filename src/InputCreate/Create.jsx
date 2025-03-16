import React, { useEffect, useState } from "react";

const Create = () => {
  // LocalStorage'dan studentlarni olish
  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem("students")) || []
  );

  // Student uchun state (id dinamik bo'ladi)
  const [student, setStudent] = useState({ id: "", name: "", ball: "" });

  // Inputni o'zgartirish funksiyasi
  function onInput(e) {
    setStudent({ ...student, [e.target.name]: e.target.value });
  }

  // LocalStorage'ni yangilash
  function updateLocalStorage(newData) {
    localStorage.setItem("students", JSON.stringify(newData));
  }

  // Student qo'shish funksiyasi
  function handleInput() {
    if (!student.name || !student.ball) {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    // Yangi ID olish (agar students bo'sh bo'lsa, 1 dan boshlash)
    const newId = students.length > 0 ? students[students.length - 1].id + 1 : 1;

    // Yangi student object yaratish
    const newStudent = { ...student, id: newId, ball: Number(student.ball) };

    // Studentni listga qo'shish
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    updateLocalStorage(updatedStudents);

    // Inputni tozalash
    setStudent({ id: "", name: "", ball: "" });
  }

  // Studentni o'chirish funksiyasi
  function handleDelete(id) {
    const updatedStudents = students.filter((item) => item.id !== id);
    setStudents(updatedStudents);
    updateLocalStorage(updatedStudents);
  }

//   Sortlash
  function sortData(sortBy) {
    localStorage.setItem("sortBy",sortBy);
    switch(sortBy){
        case "id":
            let res =students.sort((a,b)=> a.id - b.id);
            setStudents([...res]);
            localStorage.setItem("students",JSON.stringify([...res]));
            break;
            case "name":
                setStudents([...students.sort((a,b)=> a.name.localeCompare(b.name))]);
                localStorage.setItem("students",JSON.stringify([...students.sort((a,b)=> a.name.localeCompare(b.name))]));

                break;
            case "ball":
                setStudents([...students.sort((a,b)=> b.ball - a.ball)])
                localStorage.setItem("students",JSON.stringify([...students.sort((a,b)=> b.ball - a.ball)]));
            break;
    }
  }



  return (
    <>
      <div className="bg-gray-300 py-10 px-5 w-full max-w-7xl mx-auto flex flex-col gap-3">
        <h1 className="text-3xl font-semibold text-center">DTM Test:</h1>
        <input
          onChange={onInput}
          value={student.name}
          name="name"
          placeholder="Name"
          className="border w-[350px] mx-auto"
          type="text"
        />
        <input
          onChange={onInput}
          value={student.ball}
          name="ball"
          placeholder="Nechta"
          className="border w-[350px] mx-auto"
          type="number"
        />
        <button
          onClick={handleInput}
          className="bg-black text-white w-[150px] rounded-xl py-1.5 mx-auto"
        >
          Add
        </button>
      </div>

      {/* Students table */}
      <div className="bg-gray-300 py-10 px-3 w-full max-w-7xl  mx-auto flex flex-col gap-3">
        {/* Select */}
        <div className="mb-10">
            <h1>Tartiblash:</h1>
            <select name="" onChange={(e)=>sortData(e.target.value)} defaultValue={localStorage.getItem("sortBy")||"id"} id="">
                <option value="name">Name</option>
                <option value="ball">Ball</option>
                <option value="id">Id</option>

            </select>
        </div>
        <table className="text-center">
          <thead>
            <tr>
              <th className="border px-6 py-3">Id</th>
              <th className="border px-6 py-3">Name</th>
              <th className="border px-6 py-3">Ball</th>
              <th className="border px-6 py-3">Umumiy Ball</th>
              <th className="border px-6 py-3">Natija</th>
              <th className="border px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((item) => (
              <tr key={item.id}>
                <td className="border px-6 py-4">{item.id}</td>
                <td className="border px-6 py-4">{item.name}</td>
                <td className="border px-6 py-4">{item.ball}</td>
                <td className="border px-6 py-4">{(item.ball * 3.1).toFixed(2)}</td>
                <td
                  className={`border px-6 py-4 ${
                    item.ball * 3.1 > 70
                      ? "bg-green-500 text-white"
                      : item.ball * 3.1 > 50
                      ? "bg-orange-500 text-white"
                      : "bg-red-600 text-white"
                  }`}
                >
                  {item.ball * 3.1 > 70
                    ? "Grant"
                    : item.ball * 3.1 > 50
                    ? "Kontrakt"
                    : "O'tolmagan"}
                </td>
                <td className="border px-6 flex gap-2.5 justify-center items-center">
                <button
                    
                    className="border px-3 py-2 bg-orange-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="border px-3 py-2 bg-orange-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Create;
