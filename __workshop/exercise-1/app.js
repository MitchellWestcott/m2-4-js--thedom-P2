// Preset values
const FROGS = 5;

for (let count = 1; count <= FROGS; count++) {
    const lane = document.createElement("li");
    lane.id = `lane-${count}`;
    const laneNumber = document.createElement("span");
    laneNumber.innerText = count;
    lane.appendChild(laneNumber);
    track.appendChild(lane);
}

let racers = [];

for (let loadStable = 0; loadStable < FROGS; loadStable++) {
    racers.push(frogstable[loadStable]);
}

//console.log(racers);

racers.forEach(function (racer, id) {
    const frogRacers = document.createElement("span");
    frogRacers.style.background = racer.color;
    frogRacers.innerText = `${racer.number}`;
    //console.log(`lane-${id +1}`);
    frogRacers.classList.add("frog");
    frogRacers.id = "frogID-" + racer.number;
    let laneCheck = document.getElementById(`lane-${id +1}`);
    //console.log(laneCheck);
    laneCheck.appendChild(frogRacers);
    //add a class of frog to each of the frogs so that we can make use
    //of the provided styling
    //move the frog name to its own span and give that span a class of "frog-name"
    frogRacers.classList.add("frog");
    const frogNames = document.createElement("span");
    frogNames.innerText = `${racer.name}`
    frogNames.classList.add("frog-name");
    document.getElementById(`lane-${id +1}`).appendChild(frogNames);

    //Set each frog's progress to 0 inside its object, inside of the racers array.
    //Set the frog's lane inside its object as well. (We'll need this later.)
    //Verify the console.log of racers to validate.

    racers[id].progress = 0;
    racers[id].lane = `lane-${id +1}`;
    //console.log(racers);
});

function racingFrog(racer) {
    //console.log("racingFrog() ", racer);
    const trackWidth = track.offsetWidth;
    //const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
    const hop = setInterval(function () {
        const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
        // add hopLength to progress
        racer.progress += hopLength;
        // add a console log to verify
        console.log(`${racer.name} is at ${racer.progress}`);
        //document.querySelector(".racer.lane") += racer.progress;
        document.getElementById(
            "frogID-" + racer.number
        ).style.left = `${racer.progress}%`;
        if (racer.progress >= 100) {
            clearInterval(hop);
            console.log(`${racer.name} has finished`);
        }
      },Math.random() * 1000);
}
//Write a forEach that will call racingFrog() for each frog in the racers array.
racers.forEach(racingFrog); 