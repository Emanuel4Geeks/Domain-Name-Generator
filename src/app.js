/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("p.alert").innerHTML = "Check <b>console</b>.";

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon", "us"];
  let domains = [".com", ".net", ".us", ".io"];

  pronoun.forEach(itPron => {
    adj.forEach(itAdj => {
      noun.forEach(itNoun => {
        domains.forEach(itDom => {
          let end = itDom.substring(1);

          if (!itNoun.endsWith(end)) {
            console.log(itPron + itAdj + itNoun + itDom);
          } else {
            let index = itNoun.lastIndexOf(end);
            let sust = itNoun.substring(0, index);

            console.log(itPron + itAdj + sust + itDom);
          }
        });
      });
    });
  });
};
