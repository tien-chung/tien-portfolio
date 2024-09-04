import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Achievements from '../components/Achievements';
import Experience from '../components/Experience';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Experience />
      <Achievements />
    </div>
  )
}

export default Home;