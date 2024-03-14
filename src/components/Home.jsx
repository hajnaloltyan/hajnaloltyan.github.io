import arrow from '../assets/arrow1.svg';

const Home = () => (
  <section className="font-rampart-one">
    <h2 className="text-4xl font-black text-center pt-[18%] px-[5%] leading-loose">Frontend Developer and Photographer</h2>
    <h3 className="text-3xl font-black text-black text-center pt-4">please call me Hayni</h3>

    <img src={arrow} alt="Arrow" className="h-[250px] w-[200px] aspect-[200/250] mx-auto mt-16"/>
  </section>
);

export default Home;
