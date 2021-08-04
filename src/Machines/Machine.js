import React, { useState } from 'react';

import ConveyorBelt from './ConveyorBelt';
import Reservoir from './Reservoir';
import Items from '../Items/Items';

import './Machine.css';


function SpringLeg({ x }) {
    return (
        <g transform={`translate(${x})`}>
            <path className="spring-part spring-back" d="M-20 16l40 8m0 16l-40 -8m0 16l40 8m0 16l-40 -8"/>
            <path className="spring-part spring-front" d="M20 8l-40 8m0 16l40 -8m0 16l-40 8m0 16l40 -8"/>
            <rect className="spring-top" x="-30" y="0" width="60" height="8" />
            <rect className="spring-base" x="-35" y="70" width="70" height="12" rx="4" ry="4"/>
            <rect className="spring-base" x="-35" y="76" width="70" height="6"/>
        </g>
    );
}

function Button({ x = 0, y = 0, r = 20, onClick, text }) {
    return (
        <g transform={`translate(${x} ${y})`}>
            <circle className="btn machine-gauge" r={r} onClick={onClick} />
            { text && <text className="btn-text" y="1">{text}</text> }
        </g>
    );
}

function MachineBody({
    x = 0,
    floorY,
    width,
    height,
    machineToggle,
    label,
}) {
    const width2 = width / 2;
    const y1 = floorY - height + 26;

    return (
        <g transform={`translate(${x} ${y1})`}>
            <SpringLeg x={-width2 + 38} />
            <SpringLeg x={width2 - 38} />
            <rect className="main-box" x={-width2} y="-180" width={width} height="180" rx="6" ry="6" />
            <Reservoir x={12 - width2} y={-180}/>
            <Button x={0} y={-150} onClick={machineToggle} text={label} />
            <Button x={50} y={-150} onClick={machineToggle} text="Go" />
        </g>
    );
}

function Machine({
    label,
    conveyorLeft=5,
    conveyorRight=5,
    itemsIn=0,
}) {
    const [active, setActive] = useState(false);
    const width = 700;
    const height = 340;

    const conveyorHeight = 108;
    const machineWidth = 160;
    const totalWidth = machineWidth + 40 + (conveyorLeft + conveyorRight) * 30;
    const x1 = (width - totalWidth) / 2;
    const machineX = x1 + machineWidth / 2 + 20 + conveyorLeft * 30;

    const machineToggle = () => setActive(!active);

    return (
        <svg className="machine-img" width={700} height={height}>
            <ConveyorBelt
                x={x1}
                floorY={height - 1}
                width={totalWidth}
                height={conveyorHeight}
                active={active}
                itemsIn={itemsIn}
            />
            <Items
                count={itemsIn}
                x={machineX - machineWidth / 2}
                y={height -conveyorHeight - 2}
                animating={active}
            />
            <MachineBody
                x={machineX}
                floorY={height - 1}
                width={machineWidth}
                height={conveyorHeight}
                machineToggle={machineToggle}
                label={label}
            />
        </svg>
    );
}

export default Machine;
