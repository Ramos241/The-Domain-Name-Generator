/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];
  const finish = [".com", ".net"];

  function randomSelector() {
    return Math.floor(Math.random() * 2 - 1 + 1);
  }

  function domainGenerator(pronoun, adj, noun, finish) {
    const resultString = ``;
    resultString = resultString.concat(pronoun[randomSelector()]);
    resultString = resultString.concat(adj[randomSelector()]);
    resultString = resultString.concat(noun[randomSelector()]);
    resultString = resultString.concat(finish[randomSelector()]);
    return resultString;
  }

  console.log(domainGenerator(pronoun, adj, noun, finish));
};
