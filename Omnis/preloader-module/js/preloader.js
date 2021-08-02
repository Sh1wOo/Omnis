function sPreloader() {
// Inizialization Backgorund
const preloaderLib = document.querySelector('preloaderlib');
preloaderLib.classList.add('preloader')
const pbgDetect = document.querySelector(`preloaderlib`);
const detectedPbg = pbgDetect.attributes[0].value;
const pbgOur = document.querySelector(`preloaderlib[pbg="${detectedPbg}"]`);

function changeOurColor() {
    document.getElementsByClassName('preloader')[0].style.backgroundColor = `${detectedPbg}`;
} 

switch (preloaderLib) {
    case pbgOur:
            changeOurColor()
        break;
}

//Inizialization s-name
const snameDetect = document.querySelector(`preloaderlib`);
const detectedSname = snameDetect.attributes[1].value;
const snameOur = document.querySelector(`preloaderlib[s-name="${detectedSname}"]`)
const snameOur2 = document.querySelector(`preloaderlib[s-name=""]`)
// defult Animation 
const defaultAnim = document.querySelector(`preloaderlib[s-name="default"]`);
const defaultDiv = document.createElement('div');
      defaultDiv.classList.add('loader', 'color');
// Specefic Anim
const circleLinesAnim = document.querySelector(`preloaderlib[s-name="circle-lines"]`);
const circleLinesDiv = document.createElement('div');
      circleLinesDiv.classList.add('circle-lines', 'color');
      circleLinesDiv.innerHTML = `
      <span class="circle-lines-span"></span>
      <span class="circle-lines-span"></span>
      <span class="circle-lines-span"></span>
      <span class="circle-lines-span"></span>
      <span class="circle-lines-span"></span>
      <span class="circle-lines-span"></span>
      <span class="circle-lines-span"></span>
      <span class="circle-lines-span"></span>
      `
// Cube Anim
const CubeAnim =document.querySelector(`preloaderlib[s-name="cube"]`);
const CubeDiv = document.createElement('div');
CubeDiv.classList.add('wrapper')
CubeDiv.innerHTML = `
 <div class="spinner">
  <div class="sk-folding-cube">
   <div class="sk-cube1 sk-cube"></div>
   <div class="sk-cube2 sk-cube"></div>
   <div class="sk-cube4 sk-cube"></div>
   <div class="sk-cube3 sk-cube"></div>
  </div>
 </div>
`
// animation sStandart
const sStandAnim =document.querySelector(`preloaderlib[s-name="ice-cream"]`);
const sStandDiv = document.createElement('div');
sStandDiv.innerHTML = `
<img src="./Omnis/preloader-module//img/ice-cream.gif" alt="ise-cream">
`
// animation rocket
const rocketAnim = document.querySelector(`preloaderlib[s-name="rocket"]`);
const rocketDiv = document.createElement('div');
rocketDiv.innerHTML = `
<img src="./Omnis/preloader-module//img/rocket.gif" alt="rocket">
`
// aniation parrot
const parrotAnim = document.querySelector(`preloaderlib[s-name="parrot"]`)
const parrotDiv = document.createElement('div')
parrotDiv.innerHTML = `
<div class="parrot">
<div class="big"></div>
<div class="middle"></div>
<div class="small"></div>					
</div>
` 
// parrot init
const parrtotDetect = document.querySelector(`preloaderlib`);
const parrotSname = parrtotDetect.attributes[3].value;
const parrotOur = document.querySelector(`preloaderlib[s-parrot="${parrotSname}"]`)
const parrotOur2 = document.querySelector(`preloaderlib[s-parrot=""]`)


if(snameOur != snameOur2) {
    if(snameOur === defaultAnim) {
        preloaderLib.appendChild(defaultDiv);
    }
    if(snameOur === circleLinesAnim) {
        preloaderLib.appendChild(circleLinesDiv);
    }
    if(snameOur === CubeAnim) {
        preloaderLib.appendChild(CubeDiv);
    }
    if(snameOur === sStandAnim) {
        preloaderLib.appendChild(sStandDiv);
    }
    if(snameOur === rocketAnim) {
        preloaderLib.appendChild(rocketDiv);
    }
    if(snameOur === parrotAnim) {
        if(parrotOur !== parrotOur2) {
            if(parrotSname[0] === '#' && parrotSname.length >= 4) {

                preloaderLib.style.setProperty(`--collor-perrot`, `${parrotSname}`)

            } else if (parrotSname[0] === '#' && parrotSname.length <= 4){
                preloaderLib.style.setProperty('--collor-perrot', '#fcba03')
            }
            preloaderLib.appendChild(parrotDiv);
        } else return ;
    }

} else {
    preloaderLib.appendChild(defaultDiv)
    console.log('lol')
}

// s-color
const detectedCname = snameDetect.attributes[2].value;
const sColorOur = document.querySelector(`preloaderlib[s-color="${detectedCname}"]`)
const defaultColor = document.querySelector(`preloaderlib[s-color="default"]`);
const nothingColor = document.querySelector(`preloaderlib[s-color=""]`);

const colorsAnim = [
    'indianRed',
    'lightCoral',
    'salmon',
    'darkSalmon',
    'lightSalmon',
    'crimson',
    'red',
    'pink',
    'lightPink',
    'hotPink',
    'coral',
    'darkOrange',
    'green',
    'mediumSpringGreen',
    'lime',
    'rosyBrown',
    'brown',
    'maroon',
    'aqua',
    'steelBlue',
    'purple',
    'slateBlue',
    'indigo',
    'yellow'
]


if (sColorOur != nothingColor) {
    if (sColorOur === defaultColor) {
        preloaderLib.style.setProperty('--color-for-anim', '#fcba03')
    }
    if(detectedCname[0] === '#' && detectedCname.length >= 4) {
        preloaderLib.style.setProperty(`--color-for-anim`, `${detectedCname}`)
        // console.log('это работает')
    } else if (detectedCname[0] === '#' && detectedCname.length <= 4){
        preloaderLib.style.setProperty('--color-for-anim', '#fcba03')
    }
    // if(detectedCname === colorsAnim[0,1,2])
    for(let i = 0; i < colorsAnim.length;i++) {
        if (detectedCname === colorsAnim[i]) {
            preloaderLib.style.setProperty(`--color-for-anim`, `${detectedCname}`)
            console.log(detectedCname)
        }
        // console.log(colorsAnim[i])
    }
    
} else {
    
    preloaderLib.style.setProperty('--color-for-anim', '#fcba03')
    
}

// delete 
window.onload = function () {
    const preloaderlib = document.querySelector('preloaderlib');
    const scrolPreloader = document.querySelector('body');

    setTimeout(() => {
        (function addAnim() {
            preloaderlib.classList.add('glide-anim');
        })()

        
    },1200);

    setTimeout(() => {
        preloaderlib.classList.remove('preloaderlib');
        preloaderlib.remove();
    },1500)
   
};
}

export default sPreloader;