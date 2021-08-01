import React from 'react';

function Reservoir({ x, y }) {
    let pipePath = 'M0 0v8 a6 6 0 0 0 6 6';
    for (let i = 0; i < 8; i++) {
        pipePath += `h${i % 2 ? '-' : ''}24a6 6 0 0 ${i % 2 ? '0' : '1'} 0 12`;
    }
    pipePath += 'a6 6 0 0 1 6 6v20';

    return (
        <g transform={`translate(${x} ${y})`}>
            <path fill="#fba" d="M-16 -20a16 16 0 0 0 32 0v-20a100 100 0 0 1 -32 0z"/>
            <rect fill="rgb(216, 60, 75)" opacity="0.4" x="-16" y="-64" width="32" height="60" rx="16" ry="16"/>
            <rect fill="rgb(216, 60, 75)" x="-5" y="-5" width="10" height="5"/>
            <circle fill="rgb(140, 35, 65)" cx="12" cy="138" r="8"/>
            <path className="pipes" d={pipePath} />
        </g>
    );
}

export default Reservoir;
