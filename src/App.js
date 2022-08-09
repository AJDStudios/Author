import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header />

      <Home name="Reader" />

      <Footer />
    </div>
  );
}

export default App;
