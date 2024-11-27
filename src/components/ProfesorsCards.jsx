"use client"


export default function ProfesorsCards() {


    const teachers = [
        {
            name: "Juan Pérez",
            subject: "Prof. Ruso",
            photo: "/perfil1.png",
            items: [
                "Especialista en Ruso",
                "Experto en gramatica",
                "10 años de experiencia"
            ]
        },
        {
            name: "María López",
            subject: "Prof. Ruso",
            photo: "/perfil2.png",
            items: [
                "Especialista en Ruso",
                "Experto en gramatica",
                "10 años de experiencia"
            ]
        },
        {
            name: "Carlos Sánchez",
            subject: "Prof. Español",
            photo: "perfil3.png",
            items: [
                "Especialista en Ruso",
                "Experto en gramatica",
                "10 años de experiencia"
            ]
        },
    ];

    return (
        <section id="profesores" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 py-10">
            <div className="absolute top-0 left-[30px] h-[8px] w-[100px] bg-[#FEAB5F]"> </div>

            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-left my-4 text-black">Nuestros Profesores</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teachers.map((teacher, index) => (
                        <div
                            key={index}
                            className="bg-[#ffffff] shadow-md rounded-[55px] border border-gray-600 overflow-hidden hover:shadow-lg transition-shadow p-10"
                        >
                            <img
                                src={teacher.photo}
                                alt={teacher.name}
                                className="relative left-0 right-0 mx-auto mb-8 w-48 h-48 object-cover rounded-full "
                            />
                            <h3 className="text-xl font-bold text-black text-center">{teacher.name}</h3>

                            <div className="p-4 bg-[#FEAB5F]  border border-gray-600 rounded-[25px] my-8">
                                <p className="text-black  mb-2">{teacher.subject}</p>
                                <ul className="list-none space-y-2">
                                    {teacher.items.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center space-x-2 text-gray-700"
                                        >
                                            <span className="text-black">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="text-black pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, voluptates a cupiditate possimus atque veritatis porro assumenda tempore aliquam accusamus maxime fuga alias cum! Soluta, ratione! Cumque maiores ut iure.</p>
                            </div>
                            <div className=" flex justify-center">
                                <button className="relativeleft-0 right-0 mx-auto bg-[#000000]   border border-gray-600  text-white py-2 px-4 rounded nhover:bg-[#FEAB5F] transition-colors">
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

