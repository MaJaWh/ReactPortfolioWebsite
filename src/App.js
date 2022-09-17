import "./App.css";
import Navbar from "./components/Navbar";
import List from "./components/List";
import Card from "./components/Card";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Card></Card>
      <List></List>
    </div>
  );
}

export default App;
