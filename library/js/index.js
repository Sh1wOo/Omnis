const print = (something) => {
    console.log(something);
}

const preloaderLib = document.querySelector('preloaderlib');

const sNameWhite = document.querySelector('preloaderlib[s-name="white"]');
const sNameDark = document.querySelector('preloaderlib[s-name="dark"]');
const sNameYellow = document.querySelector('preloaderlib[s-name="yellow"]');

const sNameDetect = document.querySelector(`preloaderlib`);

const detectedSname = sNameDetect.attributes[0].value;
const sNameOur = document.querySelector(`preloaderlib[s-name="${detectedSname}"]`);


function changeOurColor() {
    document.body.style.backgroundColor = `${detectedSname}`;
    print(`${detectedSname} is detected`);
} 
function changeColorDark() {
    document.body.style.backgroundColor = "#2C2F33";
    print('dark is detected')
}
function changeColorWhite() {
    document.body.style.backgroundColor = "#FFFFFF";
    print('white is detected')
}
function changeColorYellow() {
    document.body.style.backgroundColor = "#e8e85f";
    print('yellow is detected')
}

switch (preloaderLib) {
    case sNameWhite:
        changeColorWhite();
        break;
    case sNameYellow:
        changeColorYellow();
        break;
    case sNameOur:
        changeOurColor()
        break;
    default:
        changeColorDark();
        break;
}