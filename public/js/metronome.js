function tick(t) {
    $("<div />").html(t % 2 === 1 ? "Tick" : "Tock").addClass("statusline").appendTo(".status");
    $("#count").html(t);    
}

function done() {
    $("<div />").html("Done!").addClass("statusline").css("background-color", "#FFFF99").appendTo(".status");
    $("#startstop").html("start");
}

var paper = Raphael("metronome_container", 200, 200);

var m = metronome({
    len: 200,
    angle: 20,
    tick: tick,
    complete: done,
    paper: paper,
    audio: "../sounds/tick.wav"
});

m.make_input("#inputs");

m.shapes().outline.attr("fill", "#00A30F");
m.shapes().arm.attr("stroke", "#EEE");