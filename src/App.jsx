import Footer from "./components/footer"
import Navbar from "./components/navbar"
import Payment from "./components/payment"
import Faq from "./components/Faq"


function App() {


  return (
    <>
    <Navbar/>
    <div className="flex justify-center py-1 bg-black ">
      
      <span className="text-white bg-black ">Holding your tickets for 30:00</span>
    </div>
    <Payment/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default App


