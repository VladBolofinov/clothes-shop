import Header from "../header/Header";
import Slider from "../slider/Slider";
import Collection from "../collection/Collection";
import Carousel from "../carousel/Carousel";
import About from "../about/About";
import Footer from "../footer/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Slider/>
        <Collection/>
        <Carousel/>
        <About/>
        <Footer/>
    </div>
  );
}

export default App;
