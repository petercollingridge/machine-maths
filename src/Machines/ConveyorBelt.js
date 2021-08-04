import React from 'react';
import './ConveyorBelt.css';


function ConveyorBeltLeg({ x, y, height }) {
    const nThreads = Math.floor((height - 12) / 2);
    let thread = 'M-4.5 7h9';
    for (let i = 0; i < nThreads; i++) {
        thread += `m0 2h${ i % 2 ? '': '-' }9`;
    }

    return (
        <g transform={`translate(${x} ${y})`}>
            <rect className="conveyor-foot" x="-3.5" width="7" height={height - 6} />
            <path className="leg-thread" d={thread} />
            <circle className="conveyor-foot" cx="0" cy="0" r="5" />
            <circle className="conveyor-leg" cx="0" cy="0" r="2" />
            <rect className="conveyor-foot" x="-6" y={height - 6} width="12" height="6" rx="2" ry="2"/>
        </g>
    );
}

function ConveyorBelt({
    x,
    floorY,
    width,
    height,
    active,
}) {
    const y1 = floorY - height;
    const dotR = 0.7;

    const nWheels = Math.floor(width / 20);
    width = nWheels * 20;
    const wheels = Array.from({length: nWheels}, (_, i) => i * 20);

    return (
        <g transform={`translate(${x} ${y1})`}>
            <path className="conveyor-belt" d={`M10 0a10 10 0 0 0 0 20h${width - 20}a10 10 0 0 0 0 -20z`} />
            { wheels.map(x => (
                <g key={x} transform={`translate(${x + 10} 10)`}>
                    <circle className="conveyor-wheel" r="8" />
                    <circle className="conveyor-wheel-axle" r="2" />
                    <g className={active ? 'spin' : ''}>
                        <circle className="conveyor-wheel-dot" cx="-3.2" cy="-3.2" r={dotR} />
                        <circle className="conveyor-wheel-dot" cx="-3.2" cy="3.2" r={dotR} />
                        <circle className="conveyor-wheel-dot" cx="3.2" cy="3.2" r={dotR} />
                        <circle className="conveyor-wheel-dot" cx="3.2" cy="-3.2" r={dotR} />
                    </g>
                </g>
            )) }
            <ConveyorBeltLeg x={10} y={10} height={height - 10} />
            <ConveyorBeltLeg x={width - 10} y={10} height={height - 10} />
        </g>
    );
}

export default ConveyorBelt;
