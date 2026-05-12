let environmentTitle = "The farm";

let environmentElements = ["Babagaga", "toad", "grass", "barn", "tree"];

let mainEntity = {
    name: "Babagaga",
    species: "Goblin",
    mood: "Shy",
    isMoving: true,
    favoriteElement: environmentElements[4]
};

let count = 0;

let buttonCreature = {
    name: "lego batman",
    species: "farm goblin",
    favoriteFood: "cereal",
    moods: ["shy", "nervous", "a little more social..", "pretty alright!", "good!", "confident!", "amazing!!", "like a superstar!!", "WOOOAHHH!!!", "nervous again... you overdid it"]
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

   let message = "<p>H-hello... I'm Babagaga...</p>";

   message = message + "<p>Right now I'm feeling " + currentMood + "...</p>";
    message = message + "<p>I am a " + buttonCreature.species + ".</p>";
    message = message + "<p>Please treat me kindly!</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});
