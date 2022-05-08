import './App.css';
import { Container } from './Module/Container';
import { Signin } from "./Component/Signin";
import { Signup } from "./Component/Signup";
import { Welcome } from "./Component/Welcome";
import { NotExist } from "./Component/NotExist";

import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

function App() {
  return (
    <Container>
        {/* <div>
            App
        </div> */}

        <Switch>
          <Route path="/signin">
              <Signin/>
          </Route>
          <Route path="/signup">
                <Signup/>
          </Route>
          <Route path="/Welcome">
                  <Welcome/>
           </Route>
          <Route path="/" exact>
                  <Welcome/>
           </Route>
            <Route path="**">
                  <NotExist/>
            </Route>
          </Switch>
    </Container>
  );
}

export default App;
