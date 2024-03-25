import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
      <div>
        <Router>
          
          <Routes>
            <Route path="/"/>
            <Route path="/cart"/>

          </Routes>
        </Router>
        </div>
    </>
  )
}

export default App
