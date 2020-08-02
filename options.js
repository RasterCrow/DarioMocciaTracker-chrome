let NTEp1 = document.getElementById('setEpisode1NT');
let NTEp2 = document.getElementById('setEpisode2NT');
let NTEp3 = document.getElementById('setEpisode3NT');
let NTEp4 = document.getElementById('setEpisode4NT');

let NYEp1 = document.getElementById('setEpisode1NY');
let NYEp2 = document.getElementById('setEpisode2NY');

let LITEp1 = document.getElementById('setEpisode1LIT');
let LITEp2 = document.getElementById('setEpisode2LIT');
let LITEp3 = document.getElementById('setEpisode3LIT');
let LITEp4 = document.getElementById('setEpisode4LIT');
let LITEp5 = document.getElementById('setEpisode5LIT');
let LITEp6 = document.getElementById('setEpisode6LIT');
let LITEp7 = document.getElementById('setEpisode7LIT');
let LITEp8 = document.getElementById('setEpisode8LIT');
let LITEp9 = document.getElementById('setEpisode9LIT');
let LITEp10 = document.getElementById('setEpisode10LIT');


let text1 = document.getElementById('textEp1NT');
let text2 = document.getElementById('textEp2NT');
let text3 = document.getElementById('textEp3NT');
let text4 = document.getElementById('textEp4NT');

let text5 = document.getElementById('textEp1NY');
let text6 = document.getElementById('textEp2NY');

let text7 = document.getElementById('textEp1LIT');
let text8 = document.getElementById('textEp2LIT');
let text9 = document.getElementById('textEp3LIT');
let text10 = document.getElementById('textEp4LIT');
let text11 = document.getElementById('textEp5LIT');
let text12 = document.getElementById('textEp6LIT');
let text13 = document.getElementById('textEp7LIT');
let text14 = document.getElementById('textEp8LIT');
let text15 = document.getElementById('textEp9LIT');
let text16 = document.getElementById('textEp10LIT');

//on first load of the apge, laods currently number watched
chrome.storage.sync.get(["ep1NT", "ep2NT", "ep3NT", "ep4NT", "ep1NY", "ep2NY", "ep1LIT", "ep2LIT", "ep3LIT", "ep4LIT", "ep5LIT", "ep6LIT", "ep7LIT", "ep8LIT", "ep9LIT", "ep10LIT",], function (data) {
    //NT
    text1.value = data.ep1NT
    text2.value = data.ep2NT
    text3.value = data.ep3NT
    text4.value = data.ep4NT
    //NY
    text5.value = data.ep1NY
    text6.value = data.ep2NY
    //LIT
    text7.value = data.ep1LIT
    text8.value = data.ep2LIT
    text9.value = data.ep3LIT
    text10.value = data.ep4LIT
    text11.value = data.ep5LIT
    text12.value = data.ep6LIT
    text13.value = data.ep7LIT
    text14.value = data.ep8LIT
    text15.value = data.ep9LIT
    text16.value = data.ep10LIT
});

//checks button clicks
NTEp1.addEventListener('click', function (result) {
    let text = document.getElementById('textEp1NT');
    if (text.value < 0 || text.value > 1000) {
        alert("Solo valori tra 0 e 1000")
    } else {
        //aggiorno la quantita
        chrome.storage.sync.set({ ep1NT: parseInt(text.value) }, function () {
            //devo anche aggiornare i rewatch fatti
            //nel popup poi faro il calcolo dei rewatch ogni volte che apro la pagina popup
            chrome.storage.sync.get(["ep1NT", "ep2NT", "ep3NT", "ep4NT"], function (data) {
                let min = data.ep1NT
                data.ep2NT < min ? min = data.ep2NT : null
                data.ep3NT < min ? min = data.ep3NT : null
                data.ep4NT < min ? min = data.ep4NT : null
                console.log(min)
                chrome.storage.sync.set({ rewatchCompletatiNT: min }, function () {

                });
            })
        });
    }
})

NTEp2.addEventListener('click', function (result) {
    let text = document.getElementById('textEp2NT');
    if (text.value < 0 || text.value > 1000) {
        alert("Solo valori tra 0 e 1000")
    } else {
        //aggiorno la quantita
        chrome.storage.sync.set({ ep2NT: parseInt(text.value) }, function () {
            chrome.storage.sync.get(["ep1NT", "ep2NT", "ep3NT", "ep4NT"], function (data) {
                let min = data.ep1NT
                data.ep2NT < min ? min = data.ep2NT : null
                data.ep3NT < min ? min = data.ep3NT : null
                data.ep4NT < min ? min = data.ep4NT : null
                console.log(min)
                chrome.storage.sync.set({ rewatchCompletatiNT: min }, function () {

                });
            })
        });
    }
})

NTEp3.addEventListener('click', function (result) {
    let text = document.getElementById('textEp3NT');
    if (text.value < 0 || text.value > 1000) {
        alert("Solo valori tra 0 e 1000")
    } else {
        //aggiorno la quantita
        chrome.storage.sync.set({ ep3NT: parseInt(text.value) }, function () {
            chrome.storage.sync.get(["ep1NT", "ep2NT", "ep3NT", "ep4NT"], function (data) {
                let min = data.ep1NT
                data.ep2NT < min ? min = data.ep2NT : null
                data.ep3NT < min ? min = data.ep3NT : null
                data.ep4NT < min ? min = data.ep4NT : null
                console.log(min)
                chrome.storage.sync.set({ rewatchCompletatiNT: min }, function () {

                });
            })
        });
    }
})

NTEp4.addEventListener('click', function (result) {
    let text = document.getElementById('textEp4NT');
    if (text.value < 0 || text.value > 1000) {
        alert("Solo valori tra 0 e 1000")
    } else {
        //aggiorno la quantita
        chrome.storage.sync.set({ ep4NT: parseInt(text.value) }, function () {
            chrome.storage.sync.get(["ep1NT", "ep2NT", "ep3NT", "ep4NT"], function (data) {
                let min = data.ep1NT
                data.ep2NT < min ? min = data.ep2NT : null
                data.ep3NT < min ? min = data.ep3NT : null
                data.ep4NT < min ? min = data.ep4NT : null
                console.log(min)
                chrome.storage.sync.set({ rewatchCompletatiNT: min }, function () {

                });
            })
        });
    }
})

//NATALE A NEW YORK

NYEp1.addEventListener('click', function (result) {
    let text = document.getElementById('textEp1NY');
    if (text.value < 0 || text.value > 1000) {
        alert("Solo valori tra 0 e 1000")
    } else {
        //aggiorno la quantita
        chrome.storage.sync.set({ ep1NY: parseInt(text.value) }, function () {
            chrome.storage.sync.get(["ep1NY", "ep2NY"], function (data) {
                let min = data.ep1NY
                data.ep2NY < min ? min = data.ep2NY : null

                console.log(min)
                chrome.storage.sync.set({ rewatchCompletatiNY: min }, function () {

                });
            })
        });
    }
})

NYEp2.addEventListener('click', function (result) {
    let text = document.getElementById('textEp2NY');
    if (text.value < 0 || text.value > 1000) {
        alert("Solo valori tra 0 e 1000")
    } else {
        //aggiorno la quantita
        chrome.storage.sync.set({ ep2NY: parseInt(text.value) }, function () {
            chrome.storage.sync.get(["ep1NY", "ep2NY"], function (data) {
                let min = data.ep1NY
                data.ep2NY < min ? min = data.ep2NY : null

                console.log(min)
                chrome.storage.sync.set({ rewatchCompletatiNY: min }, function () {

                });
            })
        });
    }
})

//LOST IN TOKYO

LITEp1.addEventListener('click', function (result) {
    let text = document.getElementById('textEp1LIT');
    if (text.value < 0 || text.value > 1000) {
        alert("Solo valori tra 0 e 1000")
    } else {
        //aggiorno la quantita
        chrome.storage.sync.set({ ep1LIT: parseInt(text.value) }, function () {
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
            })
        });
    }
})
LITEp2.addEventListener('click', function (result) {
    let text = document.getElementById('textEp2LIT');
    if (text.value < 0 || text.value > 1000) {
        alert("Solo valori tra 0 e 1000")
    } else {
        //aggiorno la quantita
        chrome.storage.sync.set({ ep2LIT: parseInt(text.value) }, function () {
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
            })
        });
    }
})
LITEp3.addEventListener('click', function (result) {
    let text = document.getElementById('textEp3LIT');
    if (text.value < 0 || text.value > 1000) {
        alert("Solo valori tra 0 e 1000")
    } else {
        //aggiorno la quantita
        chrome.storage.sync.set({ ep3LIT: parseInt(text.value) }, function () {
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
            })
        });
    }
})
LITEp4.addEventListener('click', function (result) {
    let text = document.getElementById('textEp4LIT');
    if (text.value < 0 || text.value > 1000) {
        alert("Solo valori tra 0 e 1000")
    } else {
        //aggiorno la quantita
        chrome.storage.sync.set({ ep4LIT: parseInt(text.value) }, function () {
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
            })
        });
    }
})
LITEp5.addEventListener('click', function (result) {
    let text = document.getElementById('textEp5LIT');
    if (text.value < 0 || text.value > 1000) {
        alert("Solo valori tra 0 e 1000")
    } else {
        //aggiorno la quantita
        chrome.storage.sync.set({ ep5LIT: parseInt(text.value) }, function () {
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
            })
        });
    }
})
LITEp6.addEventListener('click', function (result) {
    let text = document.getElementById('textEp6LIT');
    if (text.value < 0 || text.value > 1000) {
        alert("Solo valori tra 0 e 1000")
    } else {
        //aggiorno la quantita
        chrome.storage.sync.set({ ep6LIT: parseInt(text.value) }, function () {
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
            })
        });
    }
})
LITEp7.addEventListener('click', function (result) {
    let text = document.getElementById('textEp7LIT');
    if (text.value < 0 || text.value > 1000) {
        alert("Solo valori tra 0 e 1000")
    } else {
        //aggiorno la quantita
        chrome.storage.sync.set({ ep7LIT: parseInt(text.value) }, function () {
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
            })
        });
    }
})
LITEp8.addEventListener('click', function (result) {
    let text = document.getElementById('textEp8LIT');
    if (text.value < 0 || text.value > 1000) {
        alert("Solo valori tra 0 e 1000")
    } else {
        //aggiorno la quantita
        chrome.storage.sync.set({ ep8LIT: parseInt(text.value) }, function () {
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
            })
        });
    }
})
LITEp9.addEventListener('click', function (result) {
    let text = document.getElementById('textEp9LIT');
    if (text.value < 0 || text.value > 1000) {
        alert("Solo valori tra 0 e 1000")
    } else {
        //aggiorno la quantita
        chrome.storage.sync.set({ ep9LIT: parseInt(text.value) }, function () {
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
            })
        });
    }
})
LITEp10.addEventListener('click', function (result) {
    let text = document.getElementById('textEp10LIT');
    if (text.value < 0 || text.value > 1000) {
        alert("Solo valori tra 0 e 1000")
    } else {
        //aggiorno la quantita
        chrome.storage.sync.set({ ep10LIT: parseInt(text.value) }, function () {
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
            })
        });
    }
})