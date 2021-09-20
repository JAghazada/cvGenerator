
import { Navbarbox } from './components_homepage/navbarbox';
import { Main } from './components_homepage/main';
import Avantage from './components_homepage/avantage_main'
import Gradinet from './components_homepage/gradinet';
import Footer from './components_homepage/footer';
function Home() {
    return (
        <div className="Home">
            <Navbarbox/>
            <Main/>
            <Gradinet/>
            <Avantage/>
            <Footer/>
        </div>
    );
}

export default Home;