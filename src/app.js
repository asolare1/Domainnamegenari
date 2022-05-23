/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function domaingenerator() {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];

    for (let i = 0; i < pronoun.length; i++) {
      for (let f = 0; f < adj.length; f++) {
        for (let g = 0; g < noun.length; g++) {
          console.log(`${pronoun[i]}${adj[f]}${noun[g]}.com`);
        }
      }
    }
  }
  domaingenerator();
};
