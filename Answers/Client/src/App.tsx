import React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Progress } from "./components/Progress/Progress";

const HomeContainer = React.lazy(() =>
  import("./pages/home/home").then(({ HomeContainer }) => ({
    default: HomeContainer,
  }))
);

const AboutContainer = React.lazy(() =>
  import("./pages/about/about").then(({ AboutContainer }) => ({
    default: AboutContainer,
  }))
);

const ContactContainer = React.lazy(() =>
  import("./pages/contact/contact").then(({ ContactContainer }) => ({
    default: ContactContainer,
  }))
);

export type AppProps = {
  data: any;
};

export const App: React.FunctionComponent<AppProps> = ({
  data,
}): React.ReactElement => {
  return (
    <Router>
      <div>
        <div data-grid="col-12" className="m-link-navigation">
          <nav className="c-link-navigation">
            <ul>
              <li>
                <Link to="/" className="c-hyperlink">
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="c-hyperlink">
                  About Page
                </Link>
              </li>
              <li>
                <Link to="/contact" className="c-hyperlink">
                  Contact Page
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/about">
            <Suspense
              fallback={
                <div data-grid="container">
                  <Progress
                    ariaValueText="Loading..."
                    mode="indeterminate-regional"
                    ariaLabel="indeterminate regional progress bar"
                  />
                </div>
              }
            >
              {data && data["pageName"] && data["pageName"] === "about" ? (
                <AboutContainer pageData={data} />
              ) : (
                <AboutContainer />
              )}
            </Suspense>
          </Route>
          <Route path="/contact">
            <Suspense
              fallback={
                <div data-grid="container">
                  <Progress
                    ariaValueText="Loading..."
                    mode="indeterminate-regional"
                    ariaLabel="indeterminate regional progress bar"
                  />
                </div>
              }
            >
              {data && data["pageName"] && data["pageName"] === "contact" ? (
                <ContactContainer pageData={data} />
              ) : (
                <ContactContainer />
              )}
            </Suspense>
          </Route>
          <Route path="/">
            <Suspense
              fallback={
                <div data-grid="container">
                  <Progress
                    ariaValueText="Loading..."
                    mode="indeterminate-regional"
                    ariaLabel="indeterminate regional progress bar"
                  />
                </div>
              }
            >
              {data && data["pageName"] && data["pageName"] === "home" ? (
                <HomeContainer pageData={data} />
              ) : (
                <HomeContainer />
              )}
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
