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
            <div className="absolute top-0 left-[30px] h-[8px] w-[100px] bg-[#ffb06f] "> </div>

            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-left my-4 text-black">Nuestros Profesores</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teachers.map((teacher, index) => (
                        <div
                            key={index}
                            className="bg-[#ffffff] shadow-md rounded-[55px] border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow p-10"
                        >
                            <img
                                src={teacher.photo}
                                alt={teacher.name}
                                className="relative left-0 right-0 mx-auto mb-8 w-48 h-48 object-cover rounded-full "
                            />
                            <h3 className="text-xl font-bold text-black text-center"> Александра</h3>

                            <div className="p-4 bg-[#ffb06f]   border border-gray-600 rounded-[25px] my-8">
                                <p className="text-black  mb-2 font-bold text-center">Основатель школы </p>
                                <ul className="list-none space-y-2 text-black text-center">
                                    6 лет опыта
                                    <br /> Уровень испанского С1
                                    <br />   Онлайн-занятия с нуля до B2

                                </ul>
                            </div>
                            <div>
                                <p className="text-black pb-5">
                                    ¡Hola a mis futuros alumnos!
                                    <br />

                                    <br /><br /> ●	Связь с испанским и Испанией у меня с самого детства. Ведь я родилась в один день с великим художником и скульптором Пабло Пикассо.

                                    <br /><br /> ●	Первое образование получила в Национальном исследовательском университете «Высшая школа экономики»(НИУ ВШЭ) по специальности «Перевод и переводоведение» и окончила с отличием. В 2023 году осуществила свою мечту и получила степень магистра в испанском университете Pablo de Olavide на программе Comunicación Internacional, Traducción e Interpretación.

                                    <br /><br /> ●	Постоянно практикую испанский как с испаноязычными друзьями, так и с преподавателем-носителем, поэтому на уроках только актуальная лексика. Убеждена, что нет предела совершенству. Ведь, как говорится в моей любимой фразе, «Сколько языков ты знаешь — столько раз ты человек» (с).

                                    <br /><br /> ●	Люблю живые уроки, а не только изучение грамматики. Считаю, что главное для чего учится испанский — умение применить на практике свои знания. На занятиях обожаю делиться интересными фактами из жизни испанцев и латиноамериканцев. Для меня важно, чтобы с каждым уроком ученик преодолевал языковой барьер и начинал думать на испанском.

                                    <br /><br /> ●	Мои хобби: учеба, много учебы :), путешествия, особенно по югу Испании, фотография и, конечно же, составление уроков для моих учеников.

                                    <br /><br /> ●	Любимый фильм: Ocho apellidos vascos («Восемь баскских фамилий»). Считаю, что это отличная картина, чтобы лучше понять менталитет испанцев, образ жизни и культуру, а заодно попрактиковать понимание речи на слух не только классического castellano, но и услышать нотки южного и северного диалектов.
                                    <br />  <br />
                                    Готова поделиться своей любовью к испанскому, который открывает так много возможностей для каждого ученика.
                                    <br /> <br />   ¡Nos vemos!😉
                                </p>
                            </div>
                            {/* <div className=" flex justify-center">
                                <button className="relativeleft-0 right-0 mx-auto bg-[#000000]   border border-gray-600  text-white py-2 px-4 rounded nhover:bg-[#ffb06f]  transition-colors">
                                    Ver más
                                </button>
                            </div> */}

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

