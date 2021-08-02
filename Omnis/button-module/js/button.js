function sButton() {
    
    const sButton = document.querySelector('s-button');
    sButton.id = "super-Button"
    
    const newButton = document.createElement('button')
    newButton.classList.add('button')
    newButton.innerHTML = `
    <span class="button__text">Download</span>
    <span class="button__icon">
    <ion-icon name="cloud-download-outline"></ion-icon>
    </span>

    `
  
    sButton.appendChild(newButton, )
    console.log(sButton.id);

}

export default sButton;