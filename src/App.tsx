import Banner from "./components/Banner";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <Banner />
      <header className="xl-small:h-[66px] sticky top-0 right-0 left-0 z-[100] h-[60px] bg-transparent transition-colors duration-300">
        <Navigation />
      </header>
      <main className="mt-[-60px] lg:mt-[-66px]">
        <Home />
      </main>
    </>
  );
};

export default App;
