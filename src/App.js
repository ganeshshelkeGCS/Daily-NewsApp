import "./App.css";

import React, { Component } from "react";

import NavBar from "./components/NavBar";
import News from "./components/News";

// Routing imports
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Top Loading bar
import LoadingBar from 'react-top-loading-bar';

class App extends Component {
  pageSize = 10;
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar color='#f11946'
            progress={this.state.progress}
            height={3}
          />
          <Routes>
             <Route exact path="/"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="1" pageSize={this.pageSize} country="in" category="general" />}/>
            <Route exact path="/business"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="2" pageSize={this.pageSize} country="in" category="business"/> }/>
            <Route exact path="/entertainment"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="3" pageSize={this.pageSize} country="in" category="entertainment" />}/>
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="4" pageSize={this.pageSize} country="in" category="health" />}/>
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="5" pageSize={this.pageSize} country="in" category="science"/>}/>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="6" pageSize={this.pageSize} country="in" category="sports" />}/>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="7" pageSize={this.pageSize} country="in" category="technology" />}/> 
            </Routes>
        </Router>
        </div>
    );
  }
}

export default App;
