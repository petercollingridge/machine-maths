import React from 'react';
import { useSpring, animated } from 'react-spring';
import Apple from './Apple';

function Items({ count, x, y, gap=30, animating }) {
    const distance = gap * (count + 1);
    const timeTaken = 1000 * distance / 25;

    const styles = useSpring({
        config: { duration: timeTaken },
        from: { x: 0 },
        to: { x: gap * (count + 1) },
        pause: !animating,
      })

    const items = [];
    for (let i = 1; i <= count; i++) {
        items.push(<Apple key={i} x={x - gap * i} y={y} size={28} />);
    }
    return <animated.g style={styles}>{items}</animated.g>;
}

export default Items;
