import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewFile from "../components/NewFile"



function Home() {
  const mainBannerGreeting = <div className="container text-white" style={{ height: '50px' }}>
    <h1>Hello How are You</h1>
  </div>


  return (
    <>
      <div className="container-fluid bg-dark pt-5 pe-4 ps-4" style={{ height: '900px', width: '100%', margin: '0px' }}>
          <Navbar />
          {mainBannerGreeting}
      </div>
      <NewFile />
      
      <Footer/>
    </>
  )
}

export default Home
