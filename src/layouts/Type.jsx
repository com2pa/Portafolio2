import Typewriter from 'typewriter-effect';


function Type() {
  return (
    <Typewriter
    options={{
      strings: [
          'Bienvenido a mi Portafolio!',          
          'Me gusta trabajar con tecnologías modernas.',
          'Encuentro inspiración en el desarrollo de aplicaciones web.',
          'Aprendizaje constante y creatividad.',
          'Desarrollador Full Stack MERN.', 
          
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    }}    
    
    />
  );
}

export default Type
