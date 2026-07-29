import Testimonial from './components/Testimonial.jsx';

function App() {
  return (
    <div className='mainContainer'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonial
          name='Emma Bostian'
          country='Suecia'
          image='Emma'
          role='Ingeniera de Software'
          company='Spotify'
          testimonial='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
        />
        <Testimonial
          name='Shawn'
          country='Singapur'
          image='Shawn'
          role='Ingeniero de Software en Amazon'
          company='Amazon'
          testimonial='Da miedo cambiar de carrera. Solo gané confianza en que podía programar al trabajar con cientos de horas de lecciones gratuitas en freeCodeCamp. En un año conseguí un trabajo con salario de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
        />
        <Testimonial
          name='Sarah Chima'
          country='Nigeria'
          image='Sarah'
          role='Ingeniera de Software en ChatDesk'
          company='ChatDesk'
          testimonial='freeCodeCamp fue la puerta de entrada a mi carrera como desarrolladora de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de nivel principiante total a un nivel muy seguro. Fue todo lo que necesitaba para conseguir mi primer trabajo como desarrolladora en una empresa increíble.'
        />
    </div>
  );
}

export default App;