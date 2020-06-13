import React from "react";
import Hero from "../../components/HomeHero/Hero";
import CardList from "../../components/CardList/CardList";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <CardList />
      <Footer />
    </div>
  );
}

export default Home;
