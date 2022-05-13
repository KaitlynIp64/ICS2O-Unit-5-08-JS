// Copyright (c) 2022 Kaitlyn Ip All rights reserved
//
// Created by: Kaitlyn Ip
// Created on: May 2022
// This file contains xxx
"use strict"
/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-5-08-JS/sw.js", {
    scope: "/ICS20-Unit-5-08-JS/",
  });
}

/**
 * Input
 */
  const counter1 = parseInt(document.getElementById('counter1').value)
	const counter2 = parseInt(document.getElementById('counter2').value)
  var addedNumber = 0
  var answer = 0

  if (counter1 > 0 && counter2 > 0) {
    while (answer > counter2) {
      addedNumber = addedNumber + 1;
      answer = answer + counter1;
    }
  }  
  document.getElementById('answer').innerHTML = counter1 + " x " + addedNumber + " = " + answer;
}
