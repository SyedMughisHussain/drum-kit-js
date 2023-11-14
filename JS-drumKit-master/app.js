let buttons = document.querySelectorAll(".btn");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    playSound(i);
    addAnimation(buttons[i]);
    setTimeout(removeAnimation, 300, buttons[i]);
  });
}

document.addEventListener("keydown", function (event) {
    let sound = ['w','a','s','d','j','k','l'];
    if(sound.includes(event.key)){
        let index = sound.indexOf(event.key)
        playSound(index);
        addAnimation(buttons[index]);
        setTimeout(removeAnimation, 200, buttons[index]);
    }
    else{
        console.log(-1);
    }
});

function addAnimation(button) {
  button.classList.add("animation");
}

function removeAnimation(button) {
  button.classList.remove("animation");
}

function playSound(index) {
  const audio = new Audio(`./sounds/sound-${index + 1}.mp3`);
  audio.play();
}
