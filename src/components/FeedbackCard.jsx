"use client"
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";


export default function FeedbackCard() {
  const [feedbacks, setFeedbacks] = useState([
    {
      name: "Ana Torres",
      photo: "/perfil2.png", comment: "Excelente servicio y atención, muy recomendado.",
      rating: 5,
      adminResponse: "Gracias por tu comentario, trabajaremos en las mejoras.",
    },
    {
      name: "Luis Gómez",
      photo: "/perfil1.png",
      comment: "Buena experiencia, aunque hay aspectos que mejorar.",
      rating: 4,
      adminResponse: "Gracias por tu comentario, trabajaremos en las mejoras.",
    },
    {
      name: "Carla Fernández",
      photo: "/perfil3.png",
      comment: "La calidad del contenido superó mis expectativas.",
      rating: 5,
      adminResponse: "Gracias por tu comentario, trabajaremos en las mejoras.",
    },
  ]);
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
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 py-10">
      <div className="container mx-auto ">
      <div className="absolute top-0 left-[30px] h-[8px] w-[100px] bg-[#FEAB5F]"> </div>

        <h2 className="text-3xl font-bold text-left mb-8 text-black">Reseñas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks?.map((feedback, index) => (
            <div
              key={index}
              className="bg-[#FEAB5F] border border-gray-600 shadow-md rounded-[55px] p-6 hover:shadow-lg transition-shadow"
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
                <button className="relativeleft-0 right-0 mx-auto bg-[#000000]   border border-gray-600  text-[#ffffff] py-2 px-4 rounded nhover:bg-[#FEAB5F] transition-colors">
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

