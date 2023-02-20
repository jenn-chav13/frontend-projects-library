const wrapper = document.getElementsByClassName("card-wrapper")[0];


wrapper.addEventListener("mousemove", e => {
    rotateElement(e, wrapper);
});

const rotateElement = (event, element) => {
    console.log(element);
    const x = event.clientX;
    const y = event.clientY;

    // Get middle point in the screen.
    const middleY = window.innerHeight / 2;
    const middleX = window.innerWidth / 2;
    
    // Get offset from middle

    const offsetX = ((x - middleX) / middleX) * 50;
    const offsetY = (((y - middleY) / middleY) * 50) * -1;

    element.style.setProperty("--rotate-y", `${offsetX}deg`);
    element.style.setProperty("--rotate-x", `${offsetY}deg`);
}