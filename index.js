// Added eventlistner to button to get noticed when clicked
var noOfDrumButons = document.querySelectorAll(".drum").length;

for(var i = 0; i<noOfDrumButons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function ()  {//adding eventlistner to each button
    var buttonInnerHtml = this.innerHTML;
    buttonAnimation(buttonInnerHtml);

    switch(buttonInnerHtml) {
        case "w":
            var tom1 = new Audio("/Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document Object Model/Drum Kit/sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("/Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document Object Model/Drum Kit/sounds/tom-2.mp3");
            tom2.play();
            break;
            
        case "s":
            var tom3 = new Audio("/Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document Object Model/Drum Kit/sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("/Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document Object Model/Drum Kit/sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("/Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document Object Model/Drum Kit/sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("/Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document Object Model/Drum Kit/sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("/Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document Object Model/Drum Kit/sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(buttonInnerHtml);
    }

} );
}