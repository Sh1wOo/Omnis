// Определение Backgorund
const preloaderLib = document.querySelector('preloaderlib');
      preloaderLib.classList.add('preloader');
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

//Определение s-name
const snameDetect = document.querySelector(`preloaderlib`);
const detectedSname = snameDetect.attributes[1].value;
const snameOur = document.querySelector(`preloaderlib[s-name="${detectedSname}"]`)
const snameOur2 = document.querySelector(`preloaderlib[s-name=""]`)
// defult Animation 
const defaultAnim = document.querySelector(`preloaderlib[s-name="default"]`);
const defaultDiv = document.createElement('div');
      defaultDiv.classList.add('loader');
// Specefic Anim
const circleLinesAnim = document.querySelector(`preloaderlib[s-name="circle-lines"]`);
const circleLinesDiv = document.createElement('div');
      circleLinesDiv.classList.add('circle-lines');
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
const CubeAnim =document.querySelector(`preloaderlib[s-name="Cube"]`);
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
<img src="./library//img/ice-cream.gif" alt="ise-cream">
`
// animation rocket
const rocketAnim = document.querySelector(`preloaderlib[s-name="rocket"]`);
const rocketDiv = document.createElement('div');
rocketDiv.innerHTML = `
<img src="./library//img/rocket.gif" alt="rocket">
`

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

} else {
    preloaderLib.appendChild(defaultDiv)
    console.log('lol')
}
console.log(snameOur)


// удаление 
// window.onload = function () {
//     const preloader = document.querySelector('preloaderlib');
//     const scrolPreloader = document.querySelector('body');

//     // setTimeout(() => {
//     //     (function addAnim() {
//     //         preloader.classList.add('glide-anim');
//     //         removePr();
//     //     })()

        
//     // },1e3);

//     setTimeout(() => {
//         preloader.classList.remove('preloader');
//         preloader.remove();
//     },1300)
//     print('Preloader-lib-Working');
// };
// print(sNameOur.attributes[0])

