import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="certificates"><Experiences /></section>
        <section id="projects"><Project /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
}

export default App;
