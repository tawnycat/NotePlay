$( document ).ready(function() {

    const c3 = new Audio("../sounds/key (28).wav");
    const c3s = new Audio("../sounds/key (29).wav");
    const d3 = new Audio("../sounds/key (30).wav");
    const d3s = new Audio("../sounds/key (31).wav");
    const e3 = new Audio("../sounds/key (32).wav");
    const f3 = new Audio("../sounds/key (33).wav");
    const f3s = new Audio("../sounds/key (34).wav");
    const g3 = new Audio("../sounds/key (35).wav");
    const g3s = new Audio("../sounds/key (36).wav");
    const a3 = new Audio("../sounds/key (37).wav");
    const a3s = new Audio("../sounds/key (38).wav");
    const b3 = new Audio("../sounds/key (39).wav");
    const c4 = new Audio("../sounds/key (40).wav");
    const c4s = new Audio("../sounds/key (41).wav");
    const d4 = new Audio("../sounds/key (42).wav");
    const d4s = new Audio("../sounds/key (43).wav");
    const e4 = new Audio("../sounds/key (44).wav");
    const f4 = new Audio("../sounds/key (45).wav");
    const f4s = new Audio("../sounds/key (46).wav");
    const g4 = new Audio("../sounds/key (47).wav");
    const g4s = new Audio("../sounds/key (48).wav");
    const a4 = new Audio("../sounds/key (49).wav");
    const a4s = new Audio("../sounds/key (50).wav");
    const b4 = new Audio("../sounds/key (51).wav");
    const c5 = new Audio("../sounds/key (52).wav");





function animWhite(id){
    $(id).css("background", "blue");
setTimeout(function(){
  $(id).css("background", "white");
}, 200);
}

function animBlack(Class){
    $(Class).css("background", "blue");
setTimeout(function(){
  $(Class).css("background", "black");
}, 200);
}




$(document).on('keydown',function(key ){
    switch(key.which){
        case 20:
        c3.play();
        animWhite("#c3")
       
        break;
        case 81:
         c3s.play();
         animBlack(".c3s")
       
        break;
        case 65:
         d3.play();
          animWhite("#d3")
        break;
        case 87:
         d3s.play();
         animBlack(".d3s")
        break;
        case 83:
         e3.play();
          animWhite("#e3")
        break;
        case 68:
         f3.play();
          animWhite("#f3")
        break;
        case 82:
         f3s.play();
         animBlack(".f3s")
        break;
        case 70:
         g3.play();
          animWhite("#g3")
        break;
        case 84:
         g3s.play();
         animBlack(".g3s")
        break;
        case 71:
         a3.play();
          animWhite("#a3")
        break;
        case 89:
         a3s.play();
         animBlack(".a3s")
        break;
        case 72:
         b3.play();
          animWhite("#b3")
        break;
          case 74:
         c4.play();
          animWhite("#c4")
        break;
        case 73:
         c4s.play();
         animBlack(".c4s")
        break;
        case 75:
         d4.play();
          animWhite("#d4")
        break;
        case 79:
         d4s.play();
         animBlack(".d4s")
        break;
        case 76:
         e4.play();
          animWhite("#e4")
        break;
        case 186:
         f4.play();
          animWhite("#f4")
        break;
        case 219:
         f4s.play();
         animBlack(".f4s")
        break;
        case 222:
         g4.play();
          animWhite("#g4")
        break;
        case 221:
         g4s.play();
         animBlack(".g4s")
        break;
        case 13:
         a4.play();
          animWhite("#a4")
        break;
        case 103:4
         a4s.play();
         animBlack(".a4s")
        break;
        case 100:
         b4.play();
          animWhite("#b4")
        break;
        case 101:
         c5.play();
          animWhite("#c5")
        break;
    }
    })
})

    // const c3 = new Audio("sounds/key (28).wav");
    // $('#c3').click(e => c3.play());
