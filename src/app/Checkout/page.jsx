"use client"
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";

const ServicesSection = ({ services }) => {
    return (
      <section className="bg-gray-100 py-12 px-6 pt-[150px]" id="services">


        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl font-bold mb-4 text-black">ФОРМАТЫ ОБУЧЕНИЯ (Formas de Estudio)</h2>
          <p className="text-gray-600">
            Descubre cómo nuestras lecciones están diseñadas para adaptarse a tus necesidades.
          </p>
        </div>
  
        {/* Tarjetas de Servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-black">{service.title}</h3>
              <ul className="text-gray-600 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <button
                  onClick={() => window.location.href = service.link}
                  className="text-blue-500 hover:underline"
                >
                  подробнее (Ver más)
                </button>
              </div>
            </div>
          ))}
        </div>
  
        {/* Botón General */}
        <div className="text-center mt-12">
          <a
            href="/services"
            className="bg-[#ff8f44] text-black font-bold px-6 py-3 rounded-lg shadow-md nhover:bg-blue-600 transition"
          >
            оставить заявку (Enviar solicitud)
          </a>
        </div>
      </section>
    );
  };

  const App = () => {



    const servicesData = [
        {
          title: "Пробный урок (Lección de prueba)",
          features: [
            "30 minutos - gratis",
            "Conoce al maestro y determina el propósito del estudio.",
            "Demostración de un fragmento de lección y familiarización con la plataforma.",
            "Haz varios ejercicios.",
            "Evaluación del nivel de conversación en español, excepto para principiantes.",
            "Selección de un programa que se adapte a los objetivos del estudiante.",
          ],
          link: "/services/trial",
        },
        {
          title: "Индивидуальные занятия (Lecciones individuales)",
          features: [
            "Realizarse a través de Skype o Google Meet.",
            "En la pizarra interactiva Miro + plataforma Progressme.",
            "Se utilizan materiales auténticos (libros de texto, artículos, videos, audio, canciones).",
            "Todos los aspectos del idioma se están desarrollando.",
            "El programa se adapta a los objetivos y necesidades de cada estudiante.",
          ],
          link: "/services/individual",
        },
        {
          title: "Занятия в паре (Clases en pareja)",
          features: [
            "Realizarse a través de Skype o Google Meet.",
            "Materiales auténticos y lista de palabras personalizadas.",
            "Clases 2 veces por semana según horario acordado (60-70 min).",
            "Adecuado para parejas o amigos con intereses y niveles similares.",
          ],
          link: "/services/pair",
        },
        {
          title: "Занятия в группе (Clases grupales)",
          features: [
            "Realizarse a través de Skype o Google Meet.",
            "Duración de 90 minutos en grupos de 3-4 personas.",
            "Materiales auténticos y actividades interactivas.",
            "Ideal para eliminar la barrera del idioma y aprender en comunidad.",
          ],
          link: "/services/group",
        },
      ];
      


    return (
      <div>
        <Navbar></Navbar>

        {/* Otros componentes */}
        <ServicesSection services={servicesData} />
      </div>
    );
  };
  
  export default App;





