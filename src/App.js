import "./App.css";

import React, { Component } from "react";

import NavBar from "./components/NavBar";
import News from "./components/News";

// Routing imports
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

class App extends Component {
  pageSize = 10;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
             <Route exact path="/"  element={<News  key="1" pageSize={this.pageSize} country="in" category="general" />}/>
            <Route exact path="/business"  element={<News key="2" pageSize={this.pageSize} country="in" category="business"/> }/>
            <Route exact path="/entertainment"  element={<News key="3" pageSize={this.pageSize} country="in" category="entertainment" />}/>
            <Route exact path="/health" element={<News  key="4" pageSize={this.pageSize} country="in" category="health" />}/>
            <Route exact path="/science" element={<News key="5" pageSize={this.pageSize} country="in" category="science"/>}/>
            <Route exact path="/sports" element={<News key="6" pageSize={this.pageSize} country="in" category="sports" />}/>
            <Route exact path="/technology" element={<News key="7" pageSize={this.pageSize} country="in" category="technology" />}/> 
            </Routes>
        </Router>
        </div>
    );
  }
}

export default App;
