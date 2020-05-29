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
function App() {
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
              <AboutContainer
                imgSrc="https://compass-ssl.xbox.com/assets/e9/4e/e94eb94f-cbc8-4ade-b1be-78f3ec579782.jpg?n=DOOM-Eternal_Page-Hero-1084_1920x720_02.jpg"
                heading="DOOM Eternal"
                subHeading="Raze Hell"
              />
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
              <ContactContainer
                imgSrc="https://compass-ssl.xbox.com/assets/c8/87/c887b371-3697-427f-99dd-39e0aaeecd00.jpg?n=Minecraft-Dungeons_Page-Hero-1084_1920x720_02.jpg"
                heading="Minecraft Dungeons"
                subHeading="Unite. Fight. Survive."
              />
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
              <HomeContainer
                imgSrc="https://compass-ssl.xbox.com/assets/81/f6/81f61167-929d-4bbf-9912-b03868379904.jpg?n=RDR2-Launch_Superhero-1084_1920x720.jpg"
                heading="Red Dead Redemption 2"
                subHeading="Play it on console with Xbox Game Pass"
              />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
