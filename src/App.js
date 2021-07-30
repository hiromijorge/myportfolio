import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import HomeScreen from "./screens/HomeScreen";
import Navbar from "./components/navbar/Navbar";
import "./styles/index.css";

import Provider from "./context/projectsContext";
import ProjectDetails from "./screens/ProjectsDetails/ProjectDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Provider>
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route
                exact
                path="/projectdetails/:id"
                component={ProjectDetails}
              />
            </Switch>
          </Provider>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
