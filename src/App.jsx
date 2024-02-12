import Footer from "./components/footer"
import Navbar from "./components/navbar"
import Faq from "./components/Faq"
import Carousel from "./layout/imageslider"
import MainSection from "./components/mainsection"


function App() {


  return (
    <>
    <Navbar/>
    <div className="flex justify-center py-1 bg-black ">
      
      <span className="text-white bg-black ">Holding your tickets for 30:00</span>
    </div>
    <div>
      <MainSection/>
    </div>
    
    <Faq/>
    <Footer/>
    <Carousel/>
    </>
  )
}

export default App


