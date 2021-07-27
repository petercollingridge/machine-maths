function initMachine(id) {
    const apple = document.getElementById('apple-image');
    const area = document.getElementById(id);
    const input = getMachinePart(area, 'input');
    const output = getMachinePart(area, 'output');
    const machine = getMachinePart(area, 'machine');

    const updateOutput = getOutputFunction(input, machine, output);
    const sliderUpdate = (el, n) => {
        addApples(el, n, apple)
        // updateOutput();
    }
    addSliderHandler(input, sliderUpdate);
    addSliderHandler(machine, sliderUpdate);
}

function getMachinePart(area, name) {
    const part = area.getElementsByClassName(name)[0];
    const slider = part.getElementsByTagName('input')[0];
    const value = part.getElementsByClassName('slider-value')[0];
    return { slider, value };
}

// Add <n> apples to element <el>
// TODO: can make this more efficient by counting current apples
//       and either adding or removing the extra
function addApples(el, n, apple) {
    // Clear current 
    el.textContent = '';
    for (let i = 0; i < n; i++) {
        el.appendChild(apple.cloneNode(true));
    }
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
        // value.innerHTML = evt.target.value;
        callback(value, evt.target.value);
    });
}

initMachine('dot-machine-1');
