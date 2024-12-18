import Header from "./Header";
import Menu from "./Menu";
import About from "./About";

const Homepage = () => {
  return (
    <>
      <Header />
      <main>
        <Menu />
        <About />
      </main>
    </>
  );
};

export default Homepage;
