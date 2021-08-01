import React, { useState } from 'react';

import ConveyorBelt from './ConveyorBelt';
import Reservoir from './Reservoir';
import './Machine.css';


function SpringLeg({ x }) {
    return (
        <g transform={`translate(${x})`}>
            <path className="spring-part spring-back" d="M-20 16l40 8m0 16l-40 -8m0 16l40 8m0 16l-40 -8"/>
            <path className="spring-part spring-front" d="M20 8l-40 8m0 16l40 -8m0 16l-40 8m0 16l40 -8"/>
            <rect class="spring-top" x="-30" y="0" width="60" height="8" />
            <rect class="spring-base" x="-35" y="70" width="70" height="12" rx="4" ry="4"/>
            <rect class="spring-base" x="-35" y="76" width="70" height="6"/>
        </g>
    );
}

function Button({ x = 0, y = 0, r = 20, onClick, text }) {
    return (
        <g transform={`translate(${x} ${y})`}>
            <circle class="btn machine-gauge" r={r} onClick={onClick} />
            { text && <text class="btn-text" y="1">{text}</text> }
        </g>
    );
}

function MachineBody({
    x = 0, floorY, width, height, machineToggle
}) {
    const width2 = width / 2;
    const y1 = floorY - height + 26;

    return (
        <g transform={`translate(${x} ${y1})`}>
            <SpringLeg x={-width2 + 38} />
            <SpringLeg x={width2 - 38} />
            <rect class="main-box" x={-width2} y="-180" width={width} height="180" rx="6" ry="6" />
            <Reservoir x={12 - width2} y={-180}/>
            <Button y={-150} onClick={machineToggle} text="+2" />
            <Button y={-100} onClick={machineToggle} text="Go" />
        </g>
    );
}

function Machine() {
    const [active, setActive] = useState(false);
    const width = 700;
    const height = 340;

    const machineToggle = () => setActive(!active);

    return (
        <svg className="machine-img" width={700} height={height}>
            <ConveyorBelt x={50} floorY={height - 1} width={width - 100} height="108" active={active} />
            <MachineBody x={width / 2} floorY={height - 1} width="160" height="108" machineToggle={machineToggle} />
        </svg>
    );
}

export default Machine;
