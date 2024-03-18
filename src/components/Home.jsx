import arrow from '../assets/arrow1.svg';

const Home = () => (
  <section className="font-rampart-one px-[5%]">
    <h2 className="text-4xl font-black text-center py-[15%] leading-loose">Full-Stack Developer and Photographer</h2>
    <h3 className="text-2xl font-black text-center">Welcome to my Portfolio, call me Hayni</h3>

    <img src={arrow} alt="Arrow" className="h-[250px] w-[200px] aspect-[200/250] mx-auto mt-16"/>
  </section>
);

export default Home;
