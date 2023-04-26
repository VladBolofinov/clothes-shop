import Header from "../header/Header";
import Slider from "../slider/Slider";
import Collection from "../collection/Collection";
import Carousel from "../carousel/Carousel";
import About from "../about/About";


function App() {
  return (
    <div className="App">
        <Header/>
        <Slider/>
        <Collection/>
        <Carousel/>
        <About/>
    </div>
  );
}

export default App;
