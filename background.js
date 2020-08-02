// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let NTLink1 = "https://www.youtube.com/watch?v=f_wBPBNZPwE"
let NTLink2 = "https://www.youtube.com/watch?v=c-iNu70PMUQ"
let NTLink3 = "https://www.youtube.com/watch?v=2SCubxFDSeQ"
let NTLink4 = "https://www.youtube.com/watch?v=EcRlranjJRk"

let NYLink1 = "https://www.youtube.com/watch?v=sWWiJqiKyZ4"
let NYLink2 = "https://www.youtube.com/watch?v=-AuCCvilE1g"

let LITLink1 = "https://www.youtube.com/watch?v=dH3sLuKjBGc"
let LITLink2 = "https://www.youtube.com/watch?v=9NDw4-ZS0QQ"
let LITLink3 = "https://www.youtube.com/watch?v=gUamfssPxpo"
let LITLink4 = "https://www.youtube.com/watch?v=wL9Xqobdxl8"
let LITLink5 = "https://www.youtube.com/watch?v=hlP8VxI9MEI"
let LITLink6 = "https://www.youtube.com/watch?v=Pv7JJEOV6ac"
let LITLink7 = "https://www.youtube.com/watch?v=nREVanaAric"
let LITLink8 = "https://www.youtube.com/watch?v=LPpgdolHu4g"
let LITLink9 = "https://www.youtube.com/watch?v=XnBChTWfKtw"
let LITLink10 = "https://www.youtube.com/watch?v=SQL2IxmVIeM"


function hide(div) {
  document.getElementById(div).style.display = "none";
}
function show(div) {
  document.getElementById(div).style.display = "show";
}


/*
chrome.runtime.onStartup.addListener(function () {
  chrome.storage.sync.set({ ep1NT: 0, ep2NT: 0, ep3NT: 0, ep4NT: 0, ep1NY: 0, ep2NY: 0, ep1LIT: 0, ep2LIT: 0, ep3LIT: 0, ep4LIT: 0, ep5LIT: 0, ep6LIT: 0, ep7LIT: 0, ep8LIT: 0, ep9LIT: 0, ep10LIT: 0, rewatchCompletatiNT: 0, rewatchCompletatiNY: 0, rewatchCompletatiLIT: 0, loadedTable: "NT" }, function () {
    console.log("Impostato a 0 tutti gli episodi.");

  });
});

*/

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ ep1NT: 0, ep2NT: 0, ep3NT: 0, ep4NT: 0, ep1NY: 0, ep2NY: 0, ep1LIT: 0, ep2LIT: 0, ep3LIT: 0, ep4LIT: 0, ep5LIT: 0, ep6LIT: 0, ep7LIT: 0, ep8LIT: 0, ep9LIT: 0, ep10LIT: 0, rewatchCompletatiNT: 0, rewatchCompletatiNY: 0, rewatchCompletatiLIT: 0, loadedTable: "NT" }, function () {
    console.log("Impostato a 0 tutti gli episodi.");

  });

});



chrome.history.onVisited.addListener(function (result) {


  //check ogni liunk per vedere quale ho visiato
  //NATALE A TOKYO
  if (result.url.includes(NTLink1)) {

    //retrieves previous watched total and updates it
    chrome.storage.sync.get("ep1NT", function (data) {
      let newEpCounter = data.ep1NT + 1

      //show a badge with the updated number for 5 seconds.
      chrome.browserAction.setBadgeText({ text: newEpCounter.toString() }, function () {
        console.log("badge attivato")
        setTimeout(() => {
          chrome.browserAction.setBadgeText({ text: '' }, function () {
            console.log("badge disattivato")
          });
        }, 5000)
      });
      //updates watched data
      chrome.storage.sync.set({ ep1NT: newEpCounter }, function () {
        //check min number complete rewatch
        chrome.storage.sync.get(["ep1NT", "ep2NT", "ep3NT", "ep4NT"], function (data) {
          let min = data.ep1NT
          data.ep2NT < min ? min = data.ep2NT : null
          data.ep3NT < min ? min = data.ep3NT : null
          data.ep4NT < min ? min = data.ep4NT : null
          chrome.storage.sync.set({ rewatchCompletatiNT: min }, function () {
          });
        });
      });
    });

  } else if (result.url.includes(NTLink2)) {
    chrome.storage.sync.get("ep2NT", function (data) {
      let newEpCounter = data.ep2NT + 1

      //show a badge with the updated number for 5 seconds.
      chrome.browserAction.setBadgeText({ text: newEpCounter.toString() }, function () {
        console.log("badge attivato")
        setTimeout(() => {
          chrome.browserAction.setBadgeText({ text: '' }, function () {
            console.log("badge disattivato")
          });
        }, 5000)
      });

      //updates watched data
      chrome.storage.sync.set({ ep2NT: newEpCounter }, function () {
        //check min number complete rewatch
        chrome.storage.sync.get(["ep1NT", "ep2NT", "ep3NT", "ep4NT"], function (data) {
          let min = data.ep1NT
          data.ep2NT < min ? min = data.ep2NT : null
          data.ep3NT < min ? min = data.ep3NT : null
          data.ep4NT < min ? min = data.ep4NT : null
          chrome.storage.sync.set({ rewatchCompletatiNT: min }, function () {
          });
        });

      });
    });

  } else if (result.url.includes(NTLink3)) {
    chrome.storage.sync.get("ep3NT", function (data) {
      let newEpCounter = data.ep3NT + 1
      //show a badge with the updated number for 5 seconds.
      chrome.browserAction.setBadgeText({ text: newEpCounter.toString() }, function () {
        console.log("badge attivato")
        setTimeout(() => {
          chrome.browserAction.setBadgeText({ text: '' }, function () {
            console.log("badge disattivato")
          });
        }, 5000)
      });
      //updates watched data
      chrome.storage.sync.set({ ep3NT: newEpCounter }, function () {
        //check min number complete rewatch
        chrome.storage.sync.get(["ep1NT", "ep2NT", "ep3NT", "ep4NT"], function (data) {
          let min = data.ep1NT
          data.ep2NT < min ? min = data.ep2NT : null
          data.ep3NT < min ? min = data.ep3NT : null
          data.ep4NT < min ? min = data.ep4NT : null
          chrome.storage.sync.set({ rewatchCompletatiNT: min }, function () {
          });
        });

      });
    });

  } else if (result.url.includes(NTLink4)) {
    chrome.storage.sync.get("ep4NT", function (data) {
      let newEpCounter = data.ep4NT + 1
      //show a badge with the updated number for 5 seconds.
      chrome.browserAction.setBadgeText({ text: newEpCounter.toString() }, function () {
        console.log("badge attivato")
        setTimeout(() => {
          chrome.browserAction.setBadgeText({ text: '' }, function () {
            console.log("badge disattivato")
          });
        }, 5000)
      });
      //updates watched data
      chrome.storage.sync.set({ ep4NT: newEpCounter }, function () {
        //check min number complete rewatch
        chrome.storage.sync.get(["ep1NT", "ep2NT", "ep3NT", "ep4NT"], function (data) {
          let min = data.ep1NT
          data.ep2NT < min ? min = data.ep2NT : null
          data.ep3NT < min ? min = data.ep3NT : null
          data.ep4NT < min ? min = data.ep4NT : null
          chrome.storage.sync.set({ rewatchCompletatiNT: min }, function () {
          });
        });

      });
    });

  }

  //NATALE A NEW YORK
  if (result.url.includes(NYLink1)) {

    //retrieves previous watched total and updates it
    chrome.storage.sync.get("ep1NY", function (data) {
      let newEpCounter = data.ep1NY + 1

      //show a badge with the updated number for 5 seconds.
      chrome.browserAction.setBadgeText({ text: newEpCounter.toString() }, function () {
        console.log("badge attivato")
        setTimeout(() => {
          chrome.browserAction.setBadgeText({ text: '' }, function () {
            console.log("badge disattivato")
          });
        }, 5000)
      });
      //updates watched data
      chrome.storage.sync.set({ ep1NY: newEpCounter }, function () {
        //check min number complete rewatch
        chrome.storage.sync.get(["ep1NY", "ep2NY"], function (data) {
          let min = data.ep1NY
          data.ep2NY < min ? min = data.ep2NY : null
          chrome.storage.sync.set({ rewatchCompletatiNY: min }, function () {
          });
        });
      });
    });
  }
  if (result.url.includes(NYLink2)) {

    //retrieves previous watched total and updates it
    chrome.storage.sync.get("ep2NY", function (data) {
      let newEpCounter = data.ep2NY + 1

      //show a badge with the updated number for 5 seconds.
      chrome.browserAction.setBadgeText({ text: newEpCounter.toString() }, function () {
        console.log("badge attivato")
        setTimeout(() => {
          chrome.browserAction.setBadgeText({ text: '' }, function () {
            console.log("badge disattivato")
          });
        }, 5000)
      });
      //updates watched data
      chrome.storage.sync.set({ ep1NY: newEpCounter }, function () {
        //check min number complete rewatch
        chrome.storage.sync.get(["ep1NY", "ep2NY"], function (data) {
          let min = data.ep1NY
          data.ep2NY < min ? min = data.ep2NY : null
          chrome.storage.sync.set({ rewatchCompletatiNY: min }, function () {
          });
        });
      });
    });
  }

  //LOST IN TOKYO
  if (result.url.includes(LITLink1)) {

    //retrieves previous watched total and updates it
    chrome.storage.sync.get("ep1LIT", function (data) {
      let newEpCounter = data.ep1LIT + 1

      //show a badge with the updated number for 5 seconds.
      chrome.browserAction.setBadgeText({ text: newEpCounter.toString() }, function () {
        console.log("badge attivato")
        setTimeout(() => {
          chrome.browserAction.setBadgeText({ text: '' }, function () {
            console.log("badge disattivato")
          });
        }, 5000)
      });
      //updates watched data
      chrome.storage.sync.set({ ep1LIT: newEpCounter }, function () {
        //check min number complete rewatch
        chrome.storage.sync.get(["ep1LIT", "ep2LIT", "ep3LIT", "ep4LIT", "ep5LIT", "ep6LIT", "ep7LIT", "ep8LIT", "ep9LIT", "ep10LIT"], function (data) {
          let min = data.ep1LIT
          data.ep2LIT < min ? min = data.ep2LIT : null
          data.ep3LIT < min ? min = data.ep3LIT : null
          data.ep4LIT < min ? min = data.ep4LIT : null
          data.ep5LIT < min ? min = data.ep5LIT : null
          data.ep6LIT < min ? min = data.ep6LIT : null
          data.ep7LIT < min ? min = data.ep7LIT : null
          data.ep8LIT < min ? min = data.ep8LIT : null
          data.ep9LIT < min ? min = data.ep9LIT : null
          data.ep10LIT < min ? min = data.ep10LIT : null

          chrome.storage.sync.set({ rewatchCompletatiLIT: min }, function () {
          });
        });
      });
    });
  }
  if (result.url.includes(LITLink2)) {

    //retrieves previous watched total and updates it
    chrome.storage.sync.get("ep2LIT", function (data) {
      let newEpCounter = data.ep2LIT + 1

      //show a badge with the updated number for 5 seconds.
      chrome.browserAction.setBadgeText({ text: newEpCounter.toString() }, function () {
        console.log("badge attivato")
        setTimeout(() => {
          chrome.browserAction.setBadgeText({ text: '' }, function () {
            console.log("badge disattivato")
          });
        }, 5000)
      });
      //updates watched data
      chrome.storage.sync.set({ ep2LIT: newEpCounter }, function () {
        //check min number complete rewatch
        chrome.storage.sync.get(["ep1LIT", "ep2LIT", "ep3LIT", "ep4LIT", "ep5LIT", "ep6LIT", "ep7LIT", "ep8LIT", "ep9LIT", "ep10LIT"], function (data) {
          let min = data.ep1LIT
          data.ep2LIT < min ? min = data.ep2LIT : null
          data.ep3LIT < min ? min = data.ep3LIT : null
          data.ep4LIT < min ? min = data.ep4LIT : null
          data.ep5LIT < min ? min = data.ep5LIT : null
          data.ep6LIT < min ? min = data.ep6LIT : null
          data.ep7LIT < min ? min = data.ep7LIT : null
          data.ep8LIT < min ? min = data.ep8LIT : null
          data.ep9LIT < min ? min = data.ep9LIT : null
          data.ep10LIT < min ? min = data.ep10LIT : null

          chrome.storage.sync.set({ rewatchCompletatiLIT: min }, function () {
          });
        });
      });
    });
  }
  if (result.url.includes(LITLink3)) {

    //retrieves previous watched total and updates it
    chrome.storage.sync.get("ep3LIT", function (data) {
      let newEpCounter = data.ep3LIT + 1

      //show a badge with the updated number for 5 seconds.
      chrome.browserAction.setBadgeText({ text: newEpCounter.toString() }, function () {
        console.log("badge attivato")
        setTimeout(() => {
          chrome.browserAction.setBadgeText({ text: '' }, function () {
            console.log("badge disattivato")
          });
        }, 5000)
      });
      //updates watched data
      chrome.storage.sync.set({ ep3LIT: newEpCounter }, function () {
        //check min number complete rewatch
        chrome.storage.sync.get(["ep1LIT", "ep2LIT", "ep3LIT", "ep4LIT", "ep5LIT", "ep6LIT", "ep7LIT", "ep8LIT", "ep9LIT", "ep10LIT"], function (data) {
          let min = data.ep1LIT
          data.ep2LIT < min ? min = data.ep2LIT : null
          data.ep3LIT < min ? min = data.ep3LIT : null
          data.ep4LIT < min ? min = data.ep4LIT : null
          data.ep5LIT < min ? min = data.ep5LIT : null
          data.ep6LIT < min ? min = data.ep6LIT : null
          data.ep7LIT < min ? min = data.ep7LIT : null
          data.ep8LIT < min ? min = data.ep8LIT : null
          data.ep9LIT < min ? min = data.ep9LIT : null
          data.ep10LIT < min ? min = data.ep10LIT : null

          chrome.storage.sync.set({ rewatchCompletatiLIT: min }, function () {
          });
        });
      });
    });
  }
  if (result.url.includes(LITLink4)) {

    //retrieves previous watched total and updates it
    chrome.storage.sync.get("ep4LIT", function (data) {
      let newEpCounter = data.ep4LIT + 1

      //show a badge with the updated number for 5 seconds.
      chrome.browserAction.setBadgeText({ text: newEpCounter.toString() }, function () {
        console.log("badge attivato")
        setTimeout(() => {
          chrome.browserAction.setBadgeText({ text: '' }, function () {
            console.log("badge disattivato")
          });
        }, 5000)
      });
      //updates watched data
      chrome.storage.sync.set({ ep4LIT: newEpCounter }, function () {
        //check min number complete rewatch
        chrome.storage.sync.get(["ep1LIT", "ep2LIT", "ep3LIT", "ep4LIT", "ep5LIT", "ep6LIT", "ep7LIT", "ep8LIT", "ep9LIT", "ep10LIT"], function (data) {
          let min = data.ep1LIT
          data.ep2LIT < min ? min = data.ep2LIT : null
          data.ep3LIT < min ? min = data.ep3LIT : null
          data.ep4LIT < min ? min = data.ep4LIT : null
          data.ep5LIT < min ? min = data.ep5LIT : null
          data.ep6LIT < min ? min = data.ep6LIT : null
          data.ep7LIT < min ? min = data.ep7LIT : null
          data.ep8LIT < min ? min = data.ep8LIT : null
          data.ep9LIT < min ? min = data.ep9LIT : null
          data.ep10LIT < min ? min = data.ep10LIT : null

          chrome.storage.sync.set({ rewatchCompletatiLIT: min }, function () {
          });
        });
      });
    });
  }
  if (result.url.includes(LITLink5)) {

    //retrieves previous watched total and updates it
    chrome.storage.sync.get("ep5LIT", function (data) {
      let newEpCounter = data.ep5LIT + 1

      //show a badge with the updated number for 5 seconds.
      chrome.browserAction.setBadgeText({ text: newEpCounter.toString() }, function () {
        console.log("badge attivato")
        setTimeout(() => {
          chrome.browserAction.setBadgeText({ text: '' }, function () {
            console.log("badge disattivato")
          });
        }, 5000)
      });
      //updates watched data
      chrome.storage.sync.set({ ep5LIT: newEpCounter }, function () {
        //check min number complete rewatch
        chrome.storage.sync.get(["ep1LIT", "ep2LIT", "ep3LIT", "ep4LIT", "ep5LIT", "ep6LIT", "ep7LIT", "ep8LIT", "ep9LIT", "ep10LIT"], function (data) {
          let min = data.ep1LIT
          data.ep2LIT < min ? min = data.ep2LIT : null
          data.ep3LIT < min ? min = data.ep3LIT : null
          data.ep4LIT < min ? min = data.ep4LIT : null
          data.ep5LIT < min ? min = data.ep5LIT : null
          data.ep6LIT < min ? min = data.ep6LIT : null
          data.ep7LIT < min ? min = data.ep7LIT : null
          data.ep8LIT < min ? min = data.ep8LIT : null
          data.ep9LIT < min ? min = data.ep9LIT : null
          data.ep10LIT < min ? min = data.ep10LIT : null

          chrome.storage.sync.set({ rewatchCompletatiLIT: min }, function () {
          });
        });
      });
    });
  }
  if (result.url.includes(LITLink6)) {

    //retrieves previous watched total and updates it
    chrome.storage.sync.get("ep6LIT", function (data) {
      let newEpCounter = data.ep6LIT + 1

      //show a badge with the updated number for 5 seconds.
      chrome.browserAction.setBadgeText({ text: newEpCounter.toString() }, function () {
        console.log("badge attivato")
        setTimeout(() => {
          chrome.browserAction.setBadgeText({ text: '' }, function () {
            console.log("badge disattivato")
          });
        }, 5000)
      });
      //updates watched data
      chrome.storage.sync.set({ ep6LIT: newEpCounter }, function () {
        //check min number complete rewatch
        chrome.storage.sync.get(["ep1LIT", "ep2LIT", "ep3LIT", "ep4LIT", "ep5LIT", "ep6LIT", "ep7LIT", "ep8LIT", "ep9LIT", "ep10LIT"], function (data) {
          let min = data.ep1LIT
          data.ep2LIT < min ? min = data.ep2LIT : null
          data.ep3LIT < min ? min = data.ep3LIT : null
          data.ep4LIT < min ? min = data.ep4LIT : null
          data.ep5LIT < min ? min = data.ep5LIT : null
          data.ep6LIT < min ? min = data.ep6LIT : null
          data.ep7LIT < min ? min = data.ep7LIT : null
          data.ep8LIT < min ? min = data.ep8LIT : null
          data.ep9LIT < min ? min = data.ep9LIT : null
          data.ep10LIT < min ? min = data.ep10LIT : null

          chrome.storage.sync.set({ rewatchCompletatiLIT: min }, function () {
          });
        });
      });
    });
  }
  if (result.url.includes(LITLink7)) {

    //retrieves previous watched total and updates it
    chrome.storage.sync.get("ep7LIT", function (data) {
      let newEpCounter = data.ep7LIT + 1

      //show a badge with the updated number for 5 seconds.
      chrome.browserAction.setBadgeText({ text: newEpCounter.toString() }, function () {
        console.log("badge attivato")
        setTimeout(() => {
          chrome.browserAction.setBadgeText({ text: '' }, function () {
            console.log("badge disattivato")
          });
        }, 5000)
      });
      //updates watched data
      chrome.storage.sync.set({ ep7LIT: newEpCounter }, function () {
        //check min number complete rewatch
        chrome.storage.sync.get(["ep1LIT", "ep2LIT", "ep3LIT", "ep4LIT", "ep5LIT", "ep6LIT", "ep7LIT", "ep8LIT", "ep9LIT", "ep10LIT"], function (data) {
          let min = data.ep1LIT
          data.ep2LIT < min ? min = data.ep2LIT : null
          data.ep3LIT < min ? min = data.ep3LIT : null
          data.ep4LIT < min ? min = data.ep4LIT : null
          data.ep5LIT < min ? min = data.ep5LIT : null
          data.ep6LIT < min ? min = data.ep6LIT : null
          data.ep7LIT < min ? min = data.ep7LIT : null
          data.ep8LIT < min ? min = data.ep8LIT : null
          data.ep9LIT < min ? min = data.ep9LIT : null
          data.ep10LIT < min ? min = data.ep10LIT : null

          chrome.storage.sync.set({ rewatchCompletatiLIT: min }, function () {
          });
        });
      });
    });
  }
  if (result.url.includes(LITLink8)) {

    //retrieves previous watched total and updates it
    chrome.storage.sync.get("ep8LIT", function (data) {
      let newEpCounter = data.ep8LIT + 1

      //show a badge with the updated number for 5 seconds.
      chrome.browserAction.setBadgeText({ text: newEpCounter.toString() }, function () {
        console.log("badge attivato")
        setTimeout(() => {
          chrome.browserAction.setBadgeText({ text: '' }, function () {
            console.log("badge disattivato")
          });
        }, 5000)
      });
      //updates watched data
      chrome.storage.sync.set({ ep8LIT: newEpCounter }, function () {
        //check min number complete rewatch
        chrome.storage.sync.get(["ep1LIT", "ep2LIT", "ep3LIT", "ep4LIT", "ep5LIT", "ep6LIT", "ep7LIT", "ep8LIT", "ep9LIT", "ep10LIT"], function (data) {
          let min = data.ep1LIT
          data.ep2LIT < min ? min = data.ep2LIT : null
          data.ep3LIT < min ? min = data.ep3LIT : null
          data.ep4LIT < min ? min = data.ep4LIT : null
          data.ep5LIT < min ? min = data.ep5LIT : null
          data.ep6LIT < min ? min = data.ep6LIT : null
          data.ep7LIT < min ? min = data.ep7LIT : null
          data.ep8LIT < min ? min = data.ep8LIT : null
          data.ep9LIT < min ? min = data.ep9LIT : null
          data.ep10LIT < min ? min = data.ep10LIT : null

          chrome.storage.sync.set({ rewatchCompletatiLIT: min }, function () {
          });
        });
      });
    });
  }
  if (result.url.includes(LITLink9)) {

    //retrieves previous watched total and updates it
    chrome.storage.sync.get("ep9LIT", function (data) {
      let newEpCounter = data.ep9LIT + 1

      //show a badge with the updated number for 5 seconds.
      chrome.browserAction.setBadgeText({ text: newEpCounter.toString() }, function () {
        console.log("badge attivato")
        setTimeout(() => {
          chrome.browserAction.setBadgeText({ text: '' }, function () {
            console.log("badge disattivato")
          });
        }, 5000)
      });
      //updates watched data
      chrome.storage.sync.set({ ep9LIT: newEpCounter }, function () {
        //check min number complete rewatch
        chrome.storage.sync.get(["ep1LIT", "ep2LIT", "ep3LIT", "ep4LIT", "ep5LIT", "ep6LIT", "ep7LIT", "ep8LIT", "ep9LIT", "ep10LIT"], function (data) {
          let min = data.ep1LIT
          data.ep2LIT < min ? min = data.ep2LIT : null
          data.ep3LIT < min ? min = data.ep3LIT : null
          data.ep4LIT < min ? min = data.ep4LIT : null
          data.ep5LIT < min ? min = data.ep5LIT : null
          data.ep6LIT < min ? min = data.ep6LIT : null
          data.ep7LIT < min ? min = data.ep7LIT : null
          data.ep8LIT < min ? min = data.ep8LIT : null
          data.ep9LIT < min ? min = data.ep9LIT : null
          data.ep10LIT < min ? min = data.ep10LIT : null

          chrome.storage.sync.set({ rewatchCompletatiLIT: min }, function () {
          });
        });
      });
    });
  }
  if (result.url.includes(LITLink10)) {

    //retrieves previous watched total and updates it
    chrome.storage.sync.get("ep10LIT", function (data) {
      let newEpCounter = data.ep10LIT + 1

      //show a badge with the updated number for 5 seconds.
      chrome.browserAction.setBadgeText({ text: newEpCounter.toString() }, function () {
        console.log("badge attivato")
        setTimeout(() => {
          chrome.browserAction.setBadgeText({ text: '' }, function () {
            console.log("badge disattivato")
          });
        }, 5000)
      });
      //updates watched data
      chrome.storage.sync.set({ ep10LIT: newEpCounter }, function () {
        //check min number complete rewatch
        chrome.storage.sync.get(["ep1LIT", "ep2LIT", "ep3LIT", "ep4LIT", "ep5LIT", "ep6LIT", "ep7LIT", "ep8LIT", "ep9LIT", "ep10LIT"], function (data) {
          let min = data.ep1LIT
          data.ep2LIT < min ? min = data.ep2LIT : null
          data.ep3LIT < min ? min = data.ep3LIT : null
          data.ep4LIT < min ? min = data.ep4LIT : null
          data.ep5LIT < min ? min = data.ep5LIT : null
          data.ep6LIT < min ? min = data.ep6LIT : null
          data.ep7LIT < min ? min = data.ep7LIT : null
          data.ep8LIT < min ? min = data.ep8LIT : null
          data.ep9LIT < min ? min = data.ep9LIT : null
          data.ep10LIT < min ? min = data.ep10LIT : null

          chrome.storage.sync.set({ rewatchCompletatiLIT: min }, function () {
          });
        });
      });
    });
  }
});
