
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
    document.getElementById(div).style.display = "";
}

//on open popup show NT stats
//wait for page to load and then execs all js code
window.onload = function () {
    show("NT")
    hide("NY")
    hide("LIT")
    // retrieves info for all the series at once
    //TODO could maybe update to retrieve only for series thats being shown

    //NATALE A TOKYO
    chrome.storage.sync.get("ep1NT", function (data) {
        let ep = document.getElementById("ep1NT");
        ep.innerHTML = data.ep1NT;

    });

    chrome.storage.sync.get("ep2NT", function (data) {
        let ep = document.getElementById("ep2NT");
        ep.innerHTML = data.ep2NT;

    });
    chrome.storage.sync.get("ep3NT", function (data) {
        let ep = document.getElementById("ep3NT");
        ep.innerHTML = data.ep3NT;

    });
    chrome.storage.sync.get("ep4NT", function (data) {
        let ep = document.getElementById("ep4NT");
        ep.innerHTML = data.ep4NT;

    });
    chrome.storage.sync.get("rewatchCompletatiNT", function (data) {
        let doc_rewatchCompletatiNatale = document.getElementById("nataleNTVolte");
        doc_rewatchCompletatiNatale.innerHTML = data.rewatchCompletatiNT

    });

    //NATALE A NEW YORK
    chrome.storage.sync.get("ep1NY", function (data) {
        let ep = document.getElementById("ep1NY");
        ep.innerHTML = data.ep1NY;

    });

    chrome.storage.sync.get("ep2NY", function (data) {
        let ep = document.getElementById("ep2NY");
        ep.innerHTML = data.ep2NY;

    });
    chrome.storage.sync.get("rewatchCompletatiNY", function (data) {
        let doc_rewatchCompletatiNatale = document.getElementById("nataleNYVolte");
        doc_rewatchCompletatiNatale.innerHTML = data.rewatchCompletatiNY

    });

    //TODO LOST IN TOKYO

    chrome.storage.sync.get("ep1LIT", function (data) {
        let ep = document.getElementById("ep1LIT");
        ep.innerHTML = data.ep1LIT;

    });

    chrome.storage.sync.get("ep2LIT", function (data) {
        let ep = document.getElementById("ep2LIT");
        ep.innerHTML = data.ep2LIT;

    });

    chrome.storage.sync.get("ep3LIT", function (data) {
        let ep = document.getElementById("ep3LIT");
        ep.innerHTML = data.ep3LIT;

    });

    chrome.storage.sync.get("ep4LIT", function (data) {
        let ep = document.getElementById("ep4LIT");
        ep.innerHTML = data.ep4LIT;

    });

    chrome.storage.sync.get("ep5LIT", function (data) {
        let ep = document.getElementById("ep5LIT");
        ep.innerHTML = data.ep5LIT;

    });

    chrome.storage.sync.get("ep6LIT", function (data) {
        let ep = document.getElementById("ep6LIT");
        ep.innerHTML = data.ep6LIT;

    });

    chrome.storage.sync.get("ep7LIT", function (data) {
        let ep = document.getElementById("ep7LIT");
        ep.innerHTML = data.ep7LIT;

    });

    chrome.storage.sync.get("ep8LIT", function (data) {
        let ep = document.getElementById("ep8LIT");
        ep.innerHTML = data.ep8LIT;

    });

    chrome.storage.sync.get("ep9LIT", function (data) {
        let ep = document.getElementById("ep9LIT");
        ep.innerHTML = data.ep9LIT;

    });

    chrome.storage.sync.get("ep10LIT", function (data) {
        let ep = document.getElementById("ep10LIT");
        ep.innerHTML = data.ep10LIT;

    });

    chrome.storage.sync.get("rewatchCompletatiLIT", function (data) {
        let doc_rewatchCompletatiNatale = document.getElementById("lostInTokyoVolte");
        doc_rewatchCompletatiNatale.innerHTML = data.rewatchCompletatiLIT

    });
}


//Button data
document.querySelector('#nextSeries').addEventListener('click', (value) => chrome.storage.sync.get("loadedTable", function (data) {
    let currentTable = data.loadedTable.toString();
    console.log("next")

    if (currentTable == "NY") {
        console.log("NY")
        hide("NY")
        show("LIT")

        chrome.storage.sync.set({ loadedTable: "LIT" }, function () {

        });
    } else if (currentTable == "LIT") {
        console.log("LIT")
        hide("LIT")
        show("NT")
        chrome.storage.sync.set({ loadedTable: "NT" }, function () {

        });
    } else if (currentTable == "NT") {
        console.log("NT")
        hide("NT")
        show("NY")
        chrome.storage.sync.set({ loadedTable: "NY" }, function () {

        });
    }

})
)

document.querySelector('#previousSeries').addEventListener('click', (value) => chrome.storage.sync.get("loadedTable", function (data) {
    let currentTable = data.loadedTable.toString();
    console.log("previous")

    if (currentTable == "NY") {
        console.log("NY")
        hide("NY")
        show("NT")

        chrome.storage.sync.set({ loadedTable: "NT" }, function () {

        });
    } else if (currentTable == "LIT") {
        console.log("LIT")
        hide("LIT")
        show("NY")
        chrome.storage.sync.set({ loadedTable: "NY" }, function () {

        });
    } else if (currentTable == "NT") {
        console.log("NT")
        hide("NT")
        show("LIT")
        chrome.storage.sync.set({ loadedTable: "LIT" }, function () {

        });
    }

})
)

document.querySelector('#settingsPage').addEventListener('click', () => chrome.runtime.openOptionsPage())



//delete data button
let deleteProgress = document.getElementById('deleteProgress');
deleteProgress.onclick = function (element) {
    console.log("elimino dati")
    //controllo in che pagina sono
    chrome.storage.sync.get("loadedTable", function (data) {
        if (data.loadedTable == "NT") {
            chrome.storage.sync.set({ ep1NT: 0, ep2NT: 0, ep3NT: 0, ep4NT: 0, rewatchCompletatiNT: 0 }, function () {
                console.log("Impostato a 0 tutti gli episodi.");
                //after removing data updates popup values
                chrome.storage.sync.get("ep1NT", function (data) {
                    let ep = document.getElementById("ep1NT");
                    ep.innerHTML = data.ep1NT;

                });

                chrome.storage.sync.get("ep2NT", function (data) {
                    let ep = document.getElementById("ep2NT");
                    ep.innerHTML = data.ep2NT;

                });
                chrome.storage.sync.get("ep3NT", function (data) {
                    let ep = document.getElementById("ep3NT");
                    ep.innerHTML = data.ep3NT;

                });
                chrome.storage.sync.get("ep4NT", function (data) {
                    let ep = document.getElementById("ep4NT");
                    ep.innerHTML = data.ep4NT;

                });
                chrome.storage.sync.get("rewatchCompletatiNT", function (data) {
                    let doc_rewatchCompletatiNatale = document.getElementById("nataleNTVolte");
                    doc_rewatchCompletatiNatale.innerHTML = data.rewatchCompletatiNT

                });
            });
        } else if (data.loadedTable == "NY") {
            //elimino NY
            chrome.storage.sync.set({ ep1NY: 0, ep2NY: 0, rewatchCompletatiNY: 0 }, function () {
                //after removing data updates popup values
                chrome.storage.sync.get("ep1NY", function (data) {
                    let ep = document.getElementById("ep1NY");
                    ep.innerHTML = data.ep1NY;

                });

                chrome.storage.sync.get("ep2NY", function (data) {
                    let ep = document.getElementById("ep2NY");
                    ep.innerHTML = data.ep2NY;

                });
                chrome.storage.sync.get("rewatchCompletatiNY", function (data) {
                    let doc_rewatchCompletatiNatale = document.getElementById("nataleNYVolte");
                    doc_rewatchCompletatiNatale.innerHTML = data.rewatchCompletatiNY

                });
            })

        } else if (data.loadedTable == "LIT") {
            //elimino LIT

            chrome.storage.sync.set({ ep1LIT: 0, ep2LIT: 0, ep3LIT: 0, ep4LIT: 0, ep5LIT: 0, ep6LIT: 0, ep7LIT: 0, ep8LIT: 0, ep9LIT: 0, ep10LIT: 0, rewatchCompletatiLIT: 0 }, function () {
                //after removing data updates popup values
                chrome.storage.sync.get("ep1LIT", function (data) {
                    let ep = document.getElementById("ep1LIT");
                    ep.innerHTML = data.ep1LIT;

                });

                chrome.storage.sync.get("ep2LIT", function (data) {
                    let ep = document.getElementById("ep2LIT");
                    ep.innerHTML = data.ep2LIT;

                });

                chrome.storage.sync.get("ep3LIT", function (data) {
                    let ep = document.getElementById("ep3LIT");
                    ep.innerHTML = data.ep3LIT;

                });

                chrome.storage.sync.get("ep4LIT", function (data) {
                    let ep = document.getElementById("ep4LIT");
                    ep.innerHTML = data.ep4LIT;

                });

                chrome.storage.sync.get("ep5LIT", function (data) {
                    let ep = document.getElementById("ep5LIT");
                    ep.innerHTML = data.ep5LIT;

                });

                chrome.storage.sync.get("ep6LIT", function (data) {
                    let ep = document.getElementById("ep6LIT");
                    ep.innerHTML = data.ep6LIT;

                });

                chrome.storage.sync.get("ep7LIT", function (data) {
                    let ep = document.getElementById("ep7LIT");
                    ep.innerHTML = data.ep7LIT;

                });

                chrome.storage.sync.get("ep8LIT", function (data) {
                    let ep = document.getElementById("ep8LIT");
                    ep.innerHTML = data.ep8LIT;

                });

                chrome.storage.sync.get("ep9LIT", function (data) {
                    let ep = document.getElementById("ep9LIT");
                    ep.innerHTML = data.ep9LIT;

                });

                chrome.storage.sync.get("ep10LIT", function (data) {
                    let ep = document.getElementById("ep10LIT");
                    ep.innerHTML = data.ep10LIT;

                });

                chrome.storage.sync.get("rewatchCompletatiLIT", function (data) {
                    let doc_rewatchCompletatiNatale = document.getElementById("lostInTokyoVolte");
                    doc_rewatchCompletatiNatale.innerHTML = data.rewatchCompletatiLIT

                });
            })

        }

    });




};

//retrieves data from history
let findData = document.getElementById('findData');
findData.onclick = async function (element) {
    chrome.storage.sync.get("loadedTable", function (data) {
        if (data.loadedTable == "NT") {
            chrome.storage.sync.get("ep1NT", function (data) {
                if (data.ep1NT == 0) {
                    chrome.history.getVisits({ url: NTLink1 }, function (result) {
                        chrome.storage.sync.set({ ep1NT: result.length }, function () {
                            let ep = document.getElementById("ep1NT");
                            ep.innerHTML = result.length;
                        });
                    });
                }

            });
            chrome.storage.sync.get("ep2NT", function (data) {
                if (data.ep2NT == 0) {
                    chrome.history.getVisits({ url: NTLink2 }, function (result) {
                        chrome.storage.sync.set({ ep2NT: result.length }, function () {
                            let ep = document.getElementById("ep2NT");
                            ep.innerHTML = result.length;
                        });
                    });
                }

            });
            chrome.storage.sync.get("ep3NT", function (data) {
                if (data.ep3NT == 0) {
                    chrome.history.getVisits({ url: NTLink3 }, function (result) {
                        chrome.storage.sync.set({ ep3NT: result.length }, function () {
                            let ep = document.getElementById("ep3NT");
                            ep.innerHTML = result.length;
                        });
                    });
                }

            });
            chrome.storage.sync.get("ep4NT", function (data) {
                if (data.ep4NT == 0) {
                    chrome.history.getVisits({ url: NTLink4 }, function (result) {
                        chrome.storage.sync.set({ ep4NT: result.length }, function () {
                            let ep = document.getElementById("ep4NT");
                            ep.innerHTML = result.length;
                        });
                    });
                }

            });
            setTimeout(() => {
                chrome.storage.sync.get(["ep1NT", "ep2NT", "ep3NT", "ep4NT"], function (data) {
                    let min = data.ep1NT
                    data.ep2NT < min ? min = data.ep2NT : null
                    data.ep3NT < min ? min = data.ep3NT : null
                    data.ep4NT < min ? min = data.ep4NT : null
                    console.log(min)
                    chrome.storage.sync.set({ rewatchCompletatiNT: min }, function () {
                        let doc_rewatchCompletatiNatale = document.getElementById("nataleNTVolte");
                        doc_rewatchCompletatiNatale.innerHTML = min
                    });
                })
            }, 100)

        } else if (data.loadedTable == "NY") {
            chrome.storage.sync.get("ep1NY", function (data) {
                if (data.ep1NY == 0) {
                    chrome.history.getVisits({ url: NYLink1 }, function (result) {
                        chrome.storage.sync.set({ ep1NY: result.length }, function () {
                            let ep = document.getElementById("ep1NY");
                            ep.innerHTML = result.length;
                        });
                    });
                }

            });
            chrome.storage.sync.get("ep2NY", function (data) {
                if (data.ep2NY == 0) {
                    chrome.history.getVisits({ url: NYLink2 }, function (result) {
                        chrome.storage.sync.set({ ep2NY: result.length }, function () {
                            let ep = document.getElementById("ep2NY");
                            ep.innerHTML = result.length;
                        });
                    });
                }

            });
            setTimeout(() => {
                chrome.storage.sync.get(["ep1NY", "ep2NY"], function (data) {
                    let min = data.ep1NY
                    data.ep2NY < min ? min = data.ep2NY : null

                    console.log(min)
                    chrome.storage.sync.set({ rewatchCompletatiNY: min }, function () {
                        let doc_rewatchCompletatiNatale = document.getElementById("nataleNYVolte");
                        doc_rewatchCompletatiNatale.innerHTML = min
                    });
                })
            }, 100)

        } else if (data.loadedTable == "LIT") {
            //elimino LIT
            chrome.storage.sync.get("ep1LIT", function (data) {
                if (data.ep1LIT == 0) {
                    chrome.history.getVisits({ url: LITLink1 }, function (result) {
                        chrome.storage.sync.set({ ep1LIT: result.length }, function () {
                            let ep = document.getElementById("ep1LIT");
                            ep.innerHTML = result.length;
                        });
                    });
                }

            });
            chrome.storage.sync.get("ep2LIT", function (data) {
                if (data.ep2LIT == 0) {
                    chrome.history.getVisits({ url: LITLink2 }, function (result) {
                        chrome.storage.sync.set({ ep2LIT: result.length }, function () {
                            let ep = document.getElementById("ep2LIT");
                            ep.innerHTML = result.length;
                        });
                    });
                }

            });
            chrome.storage.sync.get("ep3LIT", function (data) {
                if (data.ep3LIT == 0) {
                    chrome.history.getVisits({ url: LITLink3 }, function (result) {
                        chrome.storage.sync.set({ ep3LIT: result.length }, function () {
                            let ep = document.getElementById("ep3LIT");
                            ep.innerHTML = result.length;
                        });
                    });
                }

            });
            chrome.storage.sync.get("ep4LIT", function (data) {
                if (data.ep4LIT == 0) {
                    chrome.history.getVisits({ url: LITLink4 }, function (result) {
                        chrome.storage.sync.set({ ep4LIT: result.length }, function () {
                            let ep = document.getElementById("ep4LIT");
                            ep.innerHTML = result.length;
                        });
                    });
                }

            });
            chrome.storage.sync.get("ep5LIT", function (data) {
                if (data.ep5LIT == 0) {
                    chrome.history.getVisits({ url: LITLink5 }, function (result) {
                        chrome.storage.sync.set({ ep5LIT: result.length }, function () {
                            let ep = document.getElementById("ep5LIT");
                            ep.innerHTML = result.length;
                        });
                    });
                }

            });
            chrome.storage.sync.get("ep6LIT", function (data) {
                if (data.ep6LIT == 0) {
                    chrome.history.getVisits({ url: LITLink6 }, function (result) {
                        chrome.storage.sync.set({ ep6LIT: result.length }, function () {
                            let ep = document.getElementById("ep6LIT");
                            ep.innerHTML = result.length;
                        });
                    });
                }

            });
            chrome.storage.sync.get("ep7LIT", function (data) {
                if (data.ep7LIT == 0) {
                    chrome.history.getVisits({ url: LITLink7 }, function (result) {
                        chrome.storage.sync.set({ ep7LIT: result.length }, function () {
                            let ep = document.getElementById("ep7LIT");
                            ep.innerHTML = result.length;
                        });
                    });
                }

            });
            chrome.storage.sync.get("ep8LIT", function (data) {
                if (data.ep8LIT == 0) {
                    chrome.history.getVisits({ url: LITLink8 }, function (result) {
                        chrome.storage.sync.set({ ep8LIT: result.length }, function () {
                            let ep = document.getElementById("ep8LIT");
                            ep.innerHTML = result.length;
                        });
                    });
                }

            });
            chrome.storage.sync.get("ep9LIT", function (data) {
                if (data.ep9LIT == 0) {
                    chrome.history.getVisits({ url: LITLink9 }, function (result) {
                        chrome.storage.sync.set({ ep9LIT: result.length }, function () {
                            let ep = document.getElementById("ep9LIT");
                            ep.innerHTML = result.length;
                        });
                    });
                }

            });
            chrome.storage.sync.get("ep10LIT", function (data) {
                if (data.ep10LIT == 0) {
                    chrome.history.getVisits({ url: LITLink10 }, function (result) {
                        chrome.storage.sync.set({ ep10LIT: result.length }, function () {
                            let ep = document.getElementById("ep10LIT");
                            ep.innerHTML = result.length;
                        });
                    });
                }

            });
            setTimeout(() => {
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
                        let doc_rewatchCompletatiNatale = document.getElementById("lostInTokyoVolte");
                        doc_rewatchCompletatiNatale.innerHTML = min
                    });
                })
            }, 100)
        }
    })



};