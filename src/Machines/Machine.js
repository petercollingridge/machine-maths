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

function ConveyorBelt({ x, floorY, width, height }) {
    const y1 = floorY - height;
    const nWheels = Math.floor(width / 20);
    width = nWheels * 20;
    const wheels = Array.from({length: nWheels}, (_, i) => i * 20);
    const dotR = 0.7;

    return (
        <g transform={`translate(${x} ${y1})`}>
            <path class="conveyor-belt" d={`M10 0a10 10 0 0 0 0 20h${width - 20}a10 10 0 0 0 0 -20z`} />
            { wheels.map(x => (
                <g key={x} transform={`translate(${x + 10} 10)`}>
                    <circle class="conveyor-wheel" r="8" />
                    <circle class="conveyor-wheel-axle" r="2" />
                    <g className="spin">
                        <circle class="conveyor-wheel-dot" cx="-3.2" cy="-3.2" r={dotR} />
                        <circle class="conveyor-wheel-dot" cx="-3.2" cy="3.2" r={dotR} />
                        <circle class="conveyor-wheel-dot" cx="3.2" cy="3.2" r={dotR} />
                        <circle class="conveyor-wheel-dot" cx="3.2" cy="-3.2" r={dotR} />
                    </g>
                </g>
            )) }
            <ConveyorBeltLeg x={10} y={10} height={height - 10} />
            <ConveyorBeltLeg x={width - 10} y={10} height={height - 10} />
        </g>
    );
}

function SpringLeg({ x }) {
    return (
        <g transform={`translate(${x})`}>
            <path className="spring-part spring-back" d="M-20 13l40 8m0 16l-40 -8m0 16l40 8m0 16l-40 -8m0 16l40 8"/>
            <path className="spring-part spring-front" d="M20 5l-40 8m0 16l40 -8m0 16l-40 8m0 16l40 -8m0 16l-40 8"/>
            <rect class="spring-top" x="-30" y="0" width="60" height="8" />
            <rect class="spring-base" x="-35" y="82" width="70" height="12" rx="4" ry="4"/>
            <rect class="spring-base" x="-35" y="88" width="70" height="6"/>
        </g>
    );
}

function MachineBody({ x = 0, floorY, width, height }) {
    const y1 = floorY - height + 26;

    return (
        <g transform={`translate(${x} ${y1})`}>
            <SpringLeg x={-width / 2 + 38} />
            <SpringLeg x={width / 2 - 38} />
            <rect class="main-box" x={-width / 2} y="-180" width={width} height="180" rx="6" ry="6" />
        </g>
    );
}

function Machine() {
    const width = 700;
    const height = 300;

    return (
        <svg className="machine-img" width={700} height={300}>
            <ConveyorBelt x={50} floorY={height - 1} width={width - 100} height="120" />
            <MachineBody x={width / 2} floorY={height - 1} width="160" height="120"/>
        </svg>
    );
}

export default Machine;
