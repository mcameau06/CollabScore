// Create an SVG renderer and attach it to the DIV element named "boo".
var vf = new Vex.Flow.Factory({renderer: {elementId: 'output'}});
var score = vf.EasyScore();
var system = vf.System();

system.addStave({
  voices: [score.voice(score.notes('C#5/q, B4, A4, G#4'))]
}).addClef('treble').addTimeSignature('4/4');

vf.draw();

console.log("It works")