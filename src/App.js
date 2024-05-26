import "./App.css";
import "../node_modules/shepherd.js/dist/css/shepherd.css";
import ShepherdTheme from "./components/ShepherdTheme";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Example from "./components/example/Example";
import Theme from "./components/themes/Theme";

function App() {
  return (
    <>
    <div className="main">
      <Header/>
      <Hero/>
      {/* <Example/> */}
      <Theme/>
    </div>

    </>
  );
}

export default App;
