import React, { useState } from "react";
import { URL } from "../../../js/constans";
import Jawaban from "./jawaban";

const Chatbot = () => {
  const [pertanyaan, setPertanyaan] = useState("");
  const [jawaban, setJawaban] = useState(undefined);

  let payLoad = {
    contents: [
      {
        parts: [
          {
            text: pertanyaan,
          },
        ],
      },
    ],
  };

  const Tanya = async () => {
    let response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(payLoad),
    });

    response = await response.json();
    let dataString = response.candidates[0].content.parts[0].text;
    dataString = dataString.map((item) => item.trim());

    console.log(dataString);
    setJawaban(dataString);
  };

  return (
    <div className="grid grid-cols-5 h-screen text-center">
      <div className="col-span-1  bg-zinc-800">Hallo</div>
      <div className="col-span-4 bg-black/90 p-10 text-white">
        <div className="container h-130 ">
          <div className="text-white ">
            <ul>
              {/* {jawaban} */}
              {jawaban &&
                jawaban.map((item, index) => (
                  <li>
                    {" "}
                    <Jawaban ans={item} key={index} />
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-800/80 w-1/2 text-white pr-5    m-auto rounded-4xl border-zinc-600 border flex h-16">
          <input
            className="w-full h-full p-3 outline-none"
            type="text"
            value={pertanyaan}
            onChange={(e) => setPertanyaan(e.target.value)}
            placeholder="Tanyakan Seputar Akademi"
          />
          <button onClick={Tanya}>Tanya</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
