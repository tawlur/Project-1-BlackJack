/*---Constants---*/
// const dealer
// const player


/*---Variables---*/



   //vaires state from start to shuffle




/*---Cached Element References---*/




/*---Event Listeners---*/





/*---Functions---*/

// function init() {


//     deck = ["dA","dQ","dK","dJ","d10","d09","d08",
//     "d07","d06","d05","d04","d03","d02","hA","hQ","hK",
//     "hJ","h10","h09","h08","h07","h06","h05","h04","h03",
//     "h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06",
//     "c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09",
//     "s08","s07","s06","s05","s04","s03","s02"];

//     render();
// }


let deck = ["dA","dQ","dK","dJ","d10","d09","d08",
"d07","d06","d05","d04","d03","d02","hA","hQ","hK",
"hJ","h10","h09","h08","h07","h06","h05","h04","h03",
"h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06",
"c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09",
"s08","s07","s06","s05","s04","s03","s02"];


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
    console.log(getRandomInt(52));
    //create random number between 0 and 51 to pull from deck
  }
  console.log(getRandomInt(52));    