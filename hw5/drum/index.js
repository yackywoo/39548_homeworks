let key_to_drum = {
    "w" : "tom-1",
    "a" : "tom-2",
    "s" : "tom-3",
    "d" : "tom-4",
    "j" : "crash",
    "k" : "kick-bass",
    "l" : "snare"
};


$(document).ready(function() {
    //clicking the buttons via browser
    $("button").click(function() {
        //get first letter of drum class button clicked
        let letter = $(this).attr("class")[0];
        console.log(letter+" clicked");
        drumSound(key_to_drum[letter]);
    });

    //presing physical keys
    $("html").keydown(function(event) {
        //if found in dict then play sound
        if(key_to_drum[event.key.toLowerCase()]) {
            console.log(event.key.toLowerCase()+" pressed");
            drumSound(key_to_drum[event.key.toLowerCase()]);
        }
    });
});

//drum sound
function drumSound(sound_name) {
    var audio = new Audio("./sounds/"+sound_name+".mp3");
    console.log(audio);
    audio.play();
};