function initMachine(id) {
    const area = document.getElementById(id);
    const input = getMachinePart(area, 'input');
    const output = getMachinePart(area, 'output');
    const machine = getMachinePart(area, 'machine');

    const updateOutput = getOutputFunction(input, machine, output);
    addSliderHandler(input, updateOutput);
    addSliderHandler(machine, updateOutput);
}

function getMachinePart(area, name) {
    const part = area.getElementsByClassName(name)[0];
    const slider = part.getElementsByTagName('input')[0];
    const value = part.getElementsByClassName('slider-value')[0];
    return { slider, value };
}

function getOutputFunction(input, machine, output) {
    return function() {
        const inputValue = +input.value.innerHTML;
        const machineValue = +machine.value.innerHTML;
        output.value.innerHTML = inputValue + machineValue;
    }
}

function addSliderHandler({ slider, value }, callback) {
    slider.addEventListener('input', (evt) =>  {
        value.innerHTML = evt.target.value;
        if (callback) {
            callback();
        }
    });
}

initMachine('dot-machine-1');
