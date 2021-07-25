function initMachine(id) {
    const area = document.getElementById(id);
    const input = area.getElementsByClassName('input')[0];
    const machine = area.getElementsByClassName('machine')[0];

    addSliderHandler(input);
    addSliderHandler(machine);
}

function addSliderHandler(el) {
    const slider = el.getElementsByTagName('input')[0];
    const value = el.getElementsByClassName('slider-value')[0];
    slider.addEventListener('input', (evt) =>  {
        value.innerHTML = evt.target.value;
    });
}

initMachine('dot-machine-1');
