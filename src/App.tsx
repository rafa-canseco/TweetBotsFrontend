import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './pages/Navbar'
import Reply from './pages/Reply'
const App = () => {

  return (
    <Router>

        <Navbar/>
      <Routes>
            <>
              <Route path="/reply" element={<Reply/>}/>
            
            
            </>
      </Routes>

    </Router>
  );


}

export default App
