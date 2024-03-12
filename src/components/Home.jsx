import arrow from '../assets/arrow1.svg';

const Home = () => (
  <section className="font-rampart-one">
    <h2 className="text-4xl font-black text-center pt-[15%] px-[5%] leading-relaxed">Front End Developer and Photographer</h2>
    <h3 className="text-2xl font-black text-center py-4">please call me Hayni</h3>

    <img src={arrow} alt="Arrow" className="h-[250px] w-[200px] aspect-[200/250] mx-auto" />
  </section>
);

export default Home;
