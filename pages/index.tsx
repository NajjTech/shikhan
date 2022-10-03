import type { NextPage } from "next";
import Banner from "../components/Banner/Banner";
import LandingPage from "../components/LandingPage/LandingPage";

const Home: NextPage = () => {
  return (
    <div>
   
      <main>
        <Banner />
        <LandingPage />
      </main>
    </div>
  );
};

export default Home;
