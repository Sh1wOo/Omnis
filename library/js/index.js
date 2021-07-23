const print = (something) => {
    console.log(something);
}

const preloaderLib = document.querySelector('preloaderlib');
preloaderLib.classList.add('preloader');

const sNameDark = document.querySelector('preloaderlib[s-name="dark"]');

const sNameDetect = document.querySelector(`preloaderlib`);

const detectedSname = sNameDetect.attributes[0].value;

const sNameOur = document.querySelector(`preloaderlib[s-name="${detectedSname}"]`);

function changeOurColor() {
    document.getElementsByClassName('preloader')[0].style.backgroundColor = `${detectedSname}`;


    print(`${detectedSname} is detected`);
} 

switch (preloaderLib) {
    case sNameOur:
            changeOurColor()
        break;
}

window.onload = function () {
    const preloader = document.querySelector('preloaderlib');
    const scrolPreloader = document.querySelector('body');

    // (function addPr() {
    //     scrolPreloader.classList.add('scrol-preloader');
    // })()
    
    // function removePr() {
    //     scrolPreloader.classList.remove('scrol-preloader');
    // }

    // setTimeout(() => {
    //     (function addAnim() {
    //         preloader.classList.add('glide-anim');
    //         removePr();
    //     })()

        
    // },1e3);

    setTimeout(() => {
        preloader.classList.remove('preloader');
        preloader.remove();
    },1300)
    print('Preloader-lib-Working');
};
// print(sNameOur.attributes[0])

