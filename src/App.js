import React,{lazy} from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
const Home  = lazy(() => import("./components/Home"));
const Dining = lazy(() => import("./components/Dining"));
const Fashion = lazy(() => import("./components/Fashion"));
const Cafe = lazy(() => import("./components/Cafe"));
const About = lazy(() => import("./components/About"));
const Family = lazy(() =>  import("./components/Family"));
const Hours = lazy(() =>  import("./components/Hours"));
const Contact = lazy(() =>  import("./components/Contact"));
const Stores = lazy(() =>  import("./components/Stores"));
const BrandPage = lazy(() => import("./components/Brandpage"));
const AdminPanel = lazy(() => import("./components/admin/Admin"));
const Lease = lazy(() => import("./components/Lease"));
const Venture  = lazy(() => import("./components/Ventures"));
const Reward  = lazy(() => import("./components/Rewards"));
const Verify = lazy(() => import("./components/admin/Verification"));
const Certificates = lazy(() => import("./components/Certificates"));

function App() {

  function ProtectedRoute({ component: Component, ...restOfProps }) {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    return (
      <Route
        {...restOfProps}
        render={(props) =>
          isAuthenticated ? <Component {...props} /> : <Redirect to="/verify" />
        }
      />
    );
  }

  return (
    <Router>
      <Switch>
        
        <Route exact path="/dining" component={Dining} />
        <Route exact path="/fashion" component={Fashion} />
        <Route exact path="/cafe" component={Cafe} />
        <Route exact path="/about" component={About} />
        <Route exact path="/family" component={Family} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/hours" component={Hours} />
        <Route exact path="/stores" component={Stores} />
        <Route exact path="/stores/:brandname" component={BrandPage} />
        <ProtectedRoute exact path  ="/admin" component={AdminPanel} />
        {/*<Route exact path="/admin" component={AdminPanel} />*/}
        <Route exact path="/verify" component={Verify} />
        <Route exact path="/lease" component={Lease} />
        <Route exact path="/venture" component={Venture} />
        <Route exact path="/reward" component={Reward} />
        <Route exact path="/certifications" component={Certificates} />
        <Route path="*" component={() =>
          (<h1 className="d-flex justify-content-center fw-bold">PAGE UNDER CONSTRUCTION. <br />PLEASE TRY LATER</h1>)

        } />

      </Switch>
    </Router>
  );
}

export default App;
