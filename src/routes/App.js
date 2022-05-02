import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "../components/layout";
import { Home } from "../pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
