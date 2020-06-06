import React from "react";
import Hero from "../../components/HomeHero/Hero";
import Filter from "../../components/Filter-teachers/Filter";
import CardList from "../../components/CardList/CardList";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Filter />
      <CardList />
      <Footer />
    </div>
  );
}

export default Home;
