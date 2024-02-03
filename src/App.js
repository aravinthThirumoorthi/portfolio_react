import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Works from "./components/Works/works";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
