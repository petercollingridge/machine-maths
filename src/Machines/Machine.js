import React, { useState } from 'react';

import ConveyorBelt from './ConveyorBelt';
import './Machine.css';


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

function MachineBody({
    x = 0, floorY, width, height, machineToggle
}) {
    const y1 = floorY - height + 26;

    return (
        <g transform={`translate(${x} ${y1})`}>
            <SpringLeg x={-width / 2 + 38} />
            <SpringLeg x={width / 2 - 38} />
            <rect class="main-box" x={-width / 2} y="-180" width={width} height="180" rx="6" ry="6" />
            <circle class="btn machine-gauge" cx="0" cy="-140" r="20" onClick={machineToggle} />
        </g>
    );
}

function Machine() {
    const [active, setActive] = useState(false);
    const width = 700;
    const height = 300;

    const machineToggle = () => setActive(!active);

    return (
        <svg className="machine-img" width={700} height={300}>
            <ConveyorBelt x={50} floorY={height - 1} width={width - 100} height="120" active={active} />
            <MachineBody x={width / 2} floorY={height - 1} width="160" height="120" machineToggle={machineToggle} />
        </svg>
    );
}

export default Machine;
