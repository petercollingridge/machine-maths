import React from 'react';
import './Machine.css';


function ConveyorBeltLeg({ x, y, height }) {
    const nThreads = Math.floor((height - 12) / 2);
    let thread = 'M-4.5 7h9';
    for (let i = 0; i < nThreads; i++) {
        thread += `m0 2h${ i % 2 ? '': '-' }9`;
    }

    return (
        <g transform={`translate(${x} ${y})`}>
            <rect class="conveyor-foot" x="-3.5" width="7" height={height - 6} />
            <path class="leg-thread" d={thread} />
            <circle class="conveyor-foot" cx="0" cy="0" r="5" />
            <circle class="conveyor-leg" cx="0" cy="0" r="2" />
            <rect class="conveyor-foot" x="-6" y={height - 6} width="12" height="6" rx="2" ry="2"/>
        </g>
    );
}

function ConveyorBelt({ x, y, width, height }) {
    const y1 = y - height;
    const nWheels = Math.floor(width / 20);
    width = nWheels * 20;
    const wheels = Array.from({length: nWheels}, (_, i) => i * 20);

    return (
        <g transform={`translate(${x} ${y1})`}>
            <path class="conveyor-belt" d={`M10 0a10 10 0 0 0 0 20h${width - 20}a10 10 0 0 0 0 -20z`} />
            { wheels.map(x => (
                <g key={x} transform={`translate(${x + 10} 10)`}>
                    <circle class="conveyor-wheel" r="8" />
                    <circle class="conveyor-wheel-axle" r="2" />
                </g>
            )) }
            <ConveyorBeltLeg x={10} y={10} height={height - 10} />
            <ConveyorBeltLeg x={width - 10} y={10} height={height - 10} />
        </g>
    );
}

function Machine() {
    const width = 700;
    const height = 300;

    return (
        <svg className="machine-img" width={700} height={300}>
            <ConveyorBelt x={50} y={height - 1} width={width - 100} height="120" />
        </svg>
    );
}

export default Machine;
