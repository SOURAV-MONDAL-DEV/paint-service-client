import Banner from '../Banner/Banner';
import FamousPaints from '../FamousPaints/FamousPaints';
import Intro from '../Intro/Intro';
import Services from '../services/Services';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Intro></Intro>
            <Services></Services>
            <FamousPaints></FamousPaints>
        </div>
    );
};

export default Home;