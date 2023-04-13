import bg1 from "../src/assets/hero_bg_1.jpg"
import bg2 from "../src/assets/hero_bg_2.jpg"
import bg3 from "../src/assets/hero_bg_3.jpg"
import Hero from "./views/Hero";



function App() {
  const images = [
    bg1, bg2, bg3
  ];

  return (
    <div className="">
      <Hero images={images}  className="w-screen h-screen" />
      {/* <div className='h-screen'></div> */}
    </div>
  );
}

export default App;
