import * as Tone from 'tone';
import * as VF from 'vexflow';

let factory, system;

const noteData = [];

let renderStaff = () => {

  document.getElementById('staff').innerHTML = '';
  factory = new VF.Factory({renderer:{elementId:'staff', width:1000, height:200}});
  system = factory.System({width:400});

  if (noteData.length > 0){
  
    const notes = noteData.map(d => factory.StaveNote({ keys: d.keys, duration: d.duration }));

    const voice = factory.Voice();
    voice.addTickables(notes);

    system.addStave({
      voices: [voice]  
    })
    .addClef('treble')
    .addTimeSignature('4/4');
    
    factory.draw();
  } else {
    
    system.addStave({
      voices: []  
    }).addClef("treble").addTimeSignature("4/4");
    factory.draw();
  }
}

renderStaff();

const staff = document.getElementById("staff");

staff.addEventListener('click',(e)=>{
  const rect  = e.target.getBoundingClientRect();
  const y = e.clientY - rect.top;

  const staffTop = 60; 
  const lineHeight = 10; 
  const position = Math.floor((y - staffTop) / (lineHeight / 2));

  const noteMap = ['g/5', 'f/5', 'e/5', 'd/5', 'c/5', 'b/4', 'a/4', 'g/4', 'f/4', 'e/4', 'd/4', 'c/4'];
  const noteIndex = Math.max(0, Math.min(noteMap.length - 1, position));
  
  noteData.push({ keys: [noteMap[noteIndex]], duration: 'q' });
  
  renderStaff();
});





