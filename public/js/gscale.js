$(document).ready(function() {

  function start(){

var sounds = {
     'c3' : new Audio("sounds/key (28).wav"),
     'c3s' :new Audio("sounds/key (29).wav"),
     'd3': new Audio("sounds/key (30).wav"),
     'd3s' :new Audio("sounds/key (31).wav"),
     'e3': new Audio("sounds/key (32).wav"),
     'f3': new Audio("sounds/key (33).wav"),
     'f3s' :new Audio("sounds/key (34).wav"),
     'g3' :new Audio("sounds/key (35).wav"),
     'g3s' : new Audio("sounds/key (36).wav"),
     'a3': new Audio("sounds/key (37).wav"),
     'a3s': new Audio("sounds/key (38).wav"),
     'b3': new Audio("sounds/key (39).wav"),
     'c4': new Audio("sounds/key (40).wav"),
     'c4s' :new Audio("sounds/key (41).wav"),
     'd4': new Audio("sounds/key (42).wav"),
     'd4s' :new Audio("sounds/key (43).wav"),
     'e4': new Audio("sounds/key (44).wav"),
     'f4' :new Audio("sounds/key (45).wav"),
     'f4s': new Audio("sounds/key (46).wav"),
     'g4': new Audio("sounds/key (47).wav"),
     'g4s': new Audio("sounds/key (48).wav"),
     'a4' :new Audio("sounds/key (49).wav"),
     'a4s': new Audio("sounds/key (50).wav"),
     'b4': new Audio("sounds/key (51).wav"),
     'c5': new Audio("sounds/key (52).wav"),
}

var keyToNote = {
    20 : "c3",
    81 : "c3s",
    65 : "d3",
    87 : "d3s",
    83 : "e3",
    68 : "f3",
    82 : "f3s",
    70 : "g3",
    84 : "g3s",
    71 : "a3",
    89 : "a3s",
    72 : "b3",
    74 : "c4",
    73 : "c4s",
    75 : "d4",
    79 : "d4s",
    76 : "e4",
    186 : "f4",
    219 : "f4s",
    222 : "g4",
    221 : "g4s",
    13 : "a4",
    103 : "a4s",
    100 : "b4",
    101 : "c5"
}



$(".key").hover(function(){
        $("#currentKey").html(this.id).css({"color":"black","font-size":"30px"});
        }, function(){
        $(this).html("");
    });






var state = {

    notes:["g3","a3","b3","c4","d4","e4","f4s","g4","f4s","e4","d4","c4","b3","a3","g3"],

    notesPlayed:[]
}


function render(note){


      for(var i = 0; i < state.notes.length;i++){


        if(state.notes[i] === state.notesPlayed[i]){

            notes[i].setKeyStyle(0,{fillStyle: "lime"})
            
        }
        else if(state.notesPlayed[i] && state.notes[i] !== state.notesPlayed[i]){

            notes[i].setKeyStyle(0,{fillStyle: "red"})
        }
        else{
            notes[i].setKeyStyle(0,{fillStyle: "black"})
        }
    }

       voice.draw(ctx,topStaff,bottomStaff);
       console.log(score)
        
    }




    canvas = $("#score")[0];
    var renderer = new Vex.Flow.Renderer(canvas, Vex.Flow.Renderer.Backends.
CANVAS);
    var ctx = renderer.getContext();


    var topStaff = new Vex.Flow.Stave(250, 30, 850);
    var bottomStaff = new Vex.Flow.Stave(250, 90, 850);

    topStaff.addClef("treble").addTimeSignature('4/4')
    bottomStaff.addClef("bass").addTimeSignature('4/4')

    var brace = new Vex.Flow.StaveConnector(topStaff, bottomStaff).setType(3);
    var lineRight = new Vex.Flow.StaveConnector(topStaff, bottomStaff).setType(0);
    var lineLeft = new Vex.Flow.StaveConnector(topStaff, bottomStaff).setType(1);


    topStaff.setContext(ctx).draw();
    bottomStaff.setContext(ctx).draw();


    brace.setContext(ctx).draw();
    lineLeft.setContext(ctx).draw();
    lineRight.setContext(ctx).draw();
    // Create the notes


      var notes = [
    new Vex.Flow.StaveNote({clef: "treble", keys: ["g/3"], duration: "q" }),
    new Vex.Flow.StaveNote({clef: "treble", keys: ["a/3"], duration: "q" }),
    new Vex.Flow.StaveNote({clef: "treble", keys: ["b/3"], duration: "q" }),
    new Vex.Flow.StaveNote({clef: "treble", keys: ["c/4"], duration: "q" }),
    new Vex.Flow.StaveNote({clef: "treble", keys: ["d/4"], duration: "q" }),
    new Vex.Flow.StaveNote({clef: "treble", keys: ["e/4"], duration: "q" }),
    new Vex.Flow.StaveNote({clef: "treble", keys: ["f#/4"], duration: "q" }).addAccidental(0, new Vex.Flow.Accidental("#")),
    new Vex.Flow.StaveNote({clef: "treble", keys: ["g/4"], duration: "q" }),
    new Vex.Flow.StaveNote({clef: "treble", keys: ["f#/4"], duration: "q" }).addAccidental(0, new Vex.Flow.Accidental("#")),
    new Vex.Flow.StaveNote({clef: "treble", keys: ["e/4"], duration: "q" }),
    new Vex.Flow.StaveNote({clef: "treble", keys: ["d/4"], duration: "q" }),
    new Vex.Flow.StaveNote({clef: "treble", keys: ["c/4"], duration: "q" }),
    new Vex.Flow.StaveNote({clef: "treble", keys: ["b/3"], duration: "q" }),
    new Vex.Flow.StaveNote({clef: "treble", keys: ["a/3"], duration: "q" }),
    new Vex.Flow.StaveNote({clef: "treble", keys: ["g/3"], duration: "q" }),
  
  



    // start new measure
    
    ];
    


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

$('#startstop').bind('keypress', function(e)
{
   if(e.keyCode == 13)
   {
      return false;
   }

})



    $(document).on('keydown',function(e){

    var key = e.which
    var note = keyToNote[key];
    if (note === undefined){
        note = 0
    }
    else{
    state.notesPlayed.push(note)
    sounds[note].currentTime = 0
    sounds[note].play();
    render(note);
    animWhite("#" + note);
    animBlack("." + note);
   console.log(state.notes)
   console.log(state.notesPlayed)
}

})





    // Create a voice in 4/4
    var voice = new Vex.Flow.Voice({
        num_beats: 4,
        beat_value: 4,
        resolution: Vex.Flow.RESOLUTION
    });

    // turn off tick counter
    voice.setStrict(false)

    // Add notes to voice
    voice.addTickables(notes);

    // Format and justify the notes to 700 pixels
    var formatter = new Vex.Flow.Formatter().
    joinVoices([voice]).format([voice], 700);

    // Render voice
  

    voice.draw(ctx,topStaff,bottomStaff);
    //inputting sound


 }

$('#startstop').on('click', function()
{
  
   start()
   
})
})



