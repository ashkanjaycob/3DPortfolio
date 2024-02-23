/* eslint-disable no-unused-vars */
import { BrowserRouter } from "react-router-dom";
import { About , Contact , Experience , Feedbacks , Hero , Navbar , StarsCanvas, Tech , Works} from "./components"

function App() {


  return (
    <>
    <BrowserRouter>
      <div className="relative z-0 bg-primary">

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech/>
          <Works/>
          <Feedbacks />
          <div className="relative z-0">
              <Contact />
              {/* <StarsCanvas /> */}
          </div>
        </div>

      </div>
    </BrowserRouter>
    </>
  )
}

export default App
