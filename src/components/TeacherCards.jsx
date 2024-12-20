"use client"
import Link from 'next/link'

export default function TeacherCards({ teacher, key }) {
  return (
    <div
      key={key}
      className="bg-[#FEAB5F] mx-5 shadow-md rounded-[50px] border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow p-10"
    >
      <img
        src={teacher.photo}
        alt={teacher.name}
        className="relative left-0 right-0 mx-auto mb-8 w-48 h-48 object-cover rounded-full "
      />
      <h3 className="text-xl font-bold text-black text-center">{teacher.name}</h3>

      <div className="p-4 bg-white  border border-gray-200 rounded-[25px] my-8">
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
      <div className=" flex justify-center">
        <Link href='/Profesores'>
          <button className="relativeleft-0 right-0 mx-auto nbg-[#f7b76f]   border border-gray-600  text-white bg-black py-2 px-4 rounded nhover:bg-[#FEAB5F] transition-colors">
            Ver más
          </button>
        </Link>
      </div>
    </div>
  );
};

