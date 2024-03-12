import weatherDataAll from './assets/weather-data-all.png';
import selfAll from './assets/self-all.png';
import bookStoreLaptop from './assets/bookstore-laptop.png';
import spaceHubAll from './assets/space-hub-all.png';
import gardenAndFlowerAll from './assets/garden-and-flower-all.png';
import myBikeAll from './assets/my-bike-all.png';

const projectDetails = [
  {
    id: 0,
    image: weatherDataAll,
    name: 'Historical Weather Data',
    technologies: ['React', 'React Router', 'Redux', 'Redux Toolkit', 'CSS'],
    description: 'The App has the functionality to fetch location results based on the typed in search word, and after location selection to provide statistical information of the weather from the previous 30 days. The App comes with 14 preselected popular locations to choose from.',
    githubURL: 'https://github.com/hajnaloltyan/weather-data',
    liveDemoURL: 'https://hajnaloltyan.github.io/weather-data/',
  },
  {
    id: 1,
    image: selfAll,
    name: 'Sinister Eye Life Films',
    technologies: ['React', 'React Router', 'CSS'],
    description: 'Video Portfolio site, showcasing artistic - documentary type of YouTube videos, using mobile first approach and a muted colour palette.',
    githubURL: 'https://github.com/SinisterEyeLifeFilms/sinistereyelifefilms.github.io',
    liveDemoURL: 'https://sinistereyelifefilms.github.io/',
  },
  {
    id: 2,
    image: bookStoreLaptop,
    name: 'Bookstore CMS',
    technologies: ['React', 'React Router', 'CSS'],
    description: 'The page has the functionality to fetch books from the server, add new books and even delete books from the server. It consists of 2 pages, Books as the main page, and Categories as a page currently under construction, with working routing in place.',
    githubURL: 'https://github.com/hajnaloltyan/react-bookstore',
    liveDemoURL: 'https://hajnaloltyan.github.io/react-bookstore/',
  },
  {
    id: 3,
    image: spaceHubAll,
    name: 'Space Travelers Hub - Group Project',
    technologies: ['React', 'React Router', 'Redux', 'Redux Toolkit', 'React Bootstrap'],
    description: 'In this task, we will be working with the real live data from the SpaceX API. Our task is to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    githubURL: 'https://github.com/hajnaloltyan/space-travelers-hub',
    liveDemoURL: 'https://hajnaloltyan.github.io/space-travelers-hub/',
  },
  {
    id: 4,
    image: gardenAndFlowerAll,
    name: 'Garden and Flower Show',
    technologies: ['HTML', 'Tailwind CSS', 'Vanilla JS'],
    description: 'This is the Capstone project for the Microverse Portal Module - Garden and Flower Show website, created with HTML, Tailwind CSS, Javascript and mobile first approach. Created to showcase all that I have learnt while completing the Portal.',
    githubURL: 'https://github.com/hajnaloltyan/garden-and-flower-show',
    liveDemoURL: 'https://hajnaloltyan.github.io/garden-and-flower-show/',
  },
  {
    id: 5,
    image: myBikeAll,
    name: 'My Bike - Landing Page',
    technologies: ['HTML', 'Sass', 'Vanilla JS'],
    description: 'A Visually appealing, dark themed My Bike Project - Landing Page, with mobile first approach, using mainly HTML and Sass, with some Javascript for the mobile menu.',
    githubURL: 'https://github.com/hajnaloltyan/my-bike-project',
    liveDemoURL: 'https://hajnaloltyan.github.io/my-bike-project/',
  },
];

export default projectDetails;
