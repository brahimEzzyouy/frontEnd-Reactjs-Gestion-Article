import Nav from "./components/nav";
import Login from "./screens/login";
import Articles from "./screens/Articles"
import Users from "./screens/Users";
import NewArticle from "./screens/NewArticle";
import Article from "./screens/Article";
import Home from "./screens/Home";
import { BrowserRouter, Route, Router } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div style={{width:'100%', height:'700px', backgroundColor:'#F0ECEC'}}>
      <Router>
        <Route path="/nav" element={<Nav/>}/>
        <Route  path="/articles" element={<Home/>}/>
      </Router>
      </div>
      
   
    
    </BrowserRouter>
  );
}

export default App;
