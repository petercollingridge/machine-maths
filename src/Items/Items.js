import React from 'react';
import Apple from './Apple';

function Items({ count, x, y, gap=30 }) {
    const items = [];
    for (let i = 1; i <= count; i++) {
        items.push(<Apple key={i} x={x - gap * i} y={y} size={28} />);
    }
    return <>{items}</>;
}

export default Items;
