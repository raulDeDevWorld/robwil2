import Image from "next/image";
import Navbar from "@/components/Navbar";
import LanguageCard from '@/components/LanguageCard';
import ProfesorsCards from '@/components/ProfesorsCards';
import Feedback from '@/components/FeedbackCard';

import { MessageSquare, Users, Award, Globe2, Video, BookOpen, Headphones, Brain } from 'lucide-react';


export default function Home() {

  const languages = [
    {
      language: "Español intermedio",
      level: "Beginner to Advanced",
      image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&q=80",
      duration: "12 weeks",
      students: 2534,
      rating: 4.9,
      price: "$299",
      flag: "🇬🇧"
    },
    {
      language: "Español Avanzado",
      level: "All Levels",
      image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&q=80",
      duration: "10 weeks",
      students: 1856,
      rating: 4.8,
      price: "$279",
      flag: "🇪🇸"
    },
    {
      language: "Ruso avanzado",
      level: "Beginner to Intermediate",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80",
      duration: "16 weeks",
      students: 1243,
      rating: 4.9,
      price: "$349",
      flag: "🇯🇵"
    }
  ];

  return (
    <div className="min-h-screen ">
      <Navbar />
      <img src="/bg2.jpg" className='fixed top-0 h-screen w-screen -z-20' alt="" />

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="absolute top-0 left-[30px] h-[8px] w-[100px] bg-[#FEAB5F]"> </div>

        <div className="text-center p-10 md:py-5 md:px-5 rounded-[20px] absolute left-0 right-0 mx-auto bottom-[0px] md:bottom-[0px] md:left-auto md:right-auto  bg-[#FEAB5F] w-[85%] rounded-b-none md:w-[400px] h-auto">
          <h1 className="text-[20px] sm:text-[30px] font-bold text-gray-900 mb-6">
            NativoES
          </h1>
          <p className="text-[16px] text-gray-600 mb-8 max-w-3xl mx-auto">
            Aprenda de hablantes nativos y alcance la fluidez más rápido con nuestra metodología comprobada. Únase a miles de estudiantes de idiomas exitosos en todo el mundo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <button className="bg-black text-[#ffffff] text-[16px] px-8 py-3 rounded-md text-lg font-semibold border-2 border-[#000000]  hover:text-[#FEAB5F]  transition-colors">
              Realizar Test
            </button>
          </div>
        </div>


        {/* <div className="max-w-7xl mx-auto">
          <div className="text-center pt-16 pb-12 bg-[#FEAB5F]">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              NativoES
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Aprenda de hablantes nativos y alcance la fluidez más rápido con nuestra metodología comprobada. Únase a miles de estudiantes de idiomas exitosos en todo el mundo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#FEAB5F] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Free Trial
              </button>
              <button className="bg-white text-[#FEAB5F] px-8 py-3 rounded-md text-lg font-semibold border-2 border-[#FEAB5F] hover:bg-blue-50 transition-colors">
                View Courses
              </button>
            </div>
          </div>




          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-[#000000] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe2 className="h-6 w-6 text-[#FEAB5F]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">12+</h3>
              <p className="text-gray-600">Languages</p>
            </div>
            <div className="text-center">
              <div className="bg-[#000000] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-[#FEAB5F]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">50K+</h3>
              <p className="text-gray-600">Students</p>
            </div>
            <div className="text-center">
              <div className="bg-[#000000] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="h-6 w-6 text-[#FEAB5F]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">100+</h3>
              <p className="text-gray-600">Native Teachers</p>
            </div>
            <div className="text-center">
              <div className="bg-[#000000] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-[#FEAB5F]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div> */}
      </section>



      <ProfesorsCards/>

   

      {/* CTA Section */}
      <section className="bg-[#FEAB5F] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Comienza hoy...
          </h2>
          <p className="text-xl text-[#363636] mb-8">
            Prueba nuestro test gratuito y descubre tu nivel.
          </p>
          <button className="bg-white text-[#000000] px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition-colors">
            Realizar test
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contactos" className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="  mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Globe2 className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">NativoES</span>
            </div>
            <p className="text-sm">
              Potencia la comunicación global a través de la educación de idiomas por parte de expertos.            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Languages</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Ruso</a></li>
              <li><a href="#" className="hover:text-white">Español</a></li>
              {/* <li><a href="#" className="hover:text-white">Japanese</a></li>
              <li><a href="#" className="hover:text-white">View All</a></li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Get language learning tips and special offers</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md flex-1"
              />
              <button className="bg-[#FEAB5F] text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 text-center text-sm flex justify-around w-full">
          <img src="/WhatsApp.png" className="h-[50px] md:h-[80px]" />
          <img src="/Telegram.png" className="h-[50px] md:h-[80px]" />
          <img src="/Youtube.png" className="h-[50px] md:h-[80px]" />
          <img src="/Instagram.png" className="h-[50px] md:h-[80px]" />
          <img src="/Tiktok.png" className="h-[50px] md:h-[80px]" />

        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-600 text-center text-sm">
          <p>&copy; 2024 NativoES. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
