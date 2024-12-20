"use client"
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";


export default function FeedbackCard({ feedback, key }) {

  const [responses, setResponses] = useState({});





  const handleResponseChange = (index, value) => {
    setResponses({ ...responses, [index]: value });
  };

  const handleSubmitResponse = (index) => {
    const updatedFeedbacks = feedbacks.map((feedback, i) =>
      i === index
        ? { ...feedback, adminResponse: responses[index] || feedback.adminResponse }
        : feedback
    );
    setFeedbacks(updatedFeedbacks);
    setResponses({ ...responses, [index]: "" }); // Clear the input after submission
  };

  return (

    <div
      key={key}
      className="bg-[#FEAB5F]  mx-5  border border-gray-200 shadow-md rounded-[55px] p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center mb-4">
        {/* <img
                  src={feedback.photo}
                  alt={feedback.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                /> */}
        <div>
          {/* <h3 className="text-lg font-semibold text-gray-800">{feedback.name}</h3> */}
          {/* <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-5 h-5 ${
                          i < feedback.rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div> */}
        </div>
      </div>

      <p className="text-gray-600 mb-4 bg-[white]  p-3  rounded-[10px] ">{feedback.comment}</p>
      {feedback.adminResponse && (
        <div className="flex ">
          <img
            src={feedback.photo}
            alt={feedback.name}
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div className="bg-[#baffca] p-3 rounded-[10px] mb-4">
            {/* <p className="text-gray-800 font-semibold">Respuesta del administrador:</p> */}
            <p className="text-gray-600">{feedback.adminResponse}</p>
          </div>
        </div>

      )}
      {/* <textarea
                className="w-full border border-gray-300 rounded p-2 mb-4"
                placeholder="Escribe una respuesta..."
                value={responses[index] || ""}
                onChange={(e) => handleResponseChange(index, e.target.value)}
              /> */}
      <div className=" flex justify-center">
        <button className="relativeleft-0 right-0 mx-auto bg-[#000000]   border border-gray-200  text-[#ffffff] py-2 px-4 rounded nhover:bg-[#FEAB5F] transition-colors">
          Ver más
        </button>
      </div>
    </div>

  );
};

