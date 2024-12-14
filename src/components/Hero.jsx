import React from 'react';
import perfil from '../assets/perfil.jpg'

const Hero = () => {
  return (
    <section className="text-white py-20 px-6 flex items-center min-h-screen">
    <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center md:justify-between md:w-3/4 lg:w-2/3 text-left">
      <div className="flex-1 text-center md:text-left">
      
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Hola, soy <span className="text-blue-500">Axel Ganum</span>
        </h1>
      
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Desarrollador web <span className="text-blue-500 font-medium">Full Stack</span>, 
            enfocado en construir aplicaciones modernas y funcionales. 
            Apasionado por <span className="text-blue-500 font-medium">aprender</span> y aplicar 
            tecnologías innovadoras para resolver problemas y generar impacto a través del código.
        </p>

      </div>
  
      <div className=" flex justify-center md:block ml-0 md:ml-10">
        <img src={perfil} alt="Mi Foto" className="w-24 h-24 md:w-48 md:h-48 rounded-full object-cover" />
      </div>
    </div>
  </section>
  
  
  );
};

export default Hero;


