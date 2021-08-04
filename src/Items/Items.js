import React from 'react';
import { useSpring, animated } from 'react-spring';
import Apple from './Apple';

function Items({
    count,
    x,
    y,
    size = 28,
    gap=30,
    animating
}) {
    const SPEED = 20 / 1000; // 25 pixels per second
    const distance = gap * (count + 1) * 2;
    const timeTaken = distance / SPEED;

    const styles = useSpring({
        config: { duration: timeTaken },
        from: { x: 0 },
        to: { x: distance },
        pause: !animating,
      })

    const items = [];
    for (let i = 1; i <= count; i++) {
        items.push(<Apple key={i} x={x - gap * i} y={y} size={size} />);
    }
    return (
        <>
            <defs>
                <clipPath id="clip-items-left">
                    <rect x={x - distance} y={y - size - 1} width={distance} height={size + 2} />
                </clipPath>
            </defs>
            <animated.g style={styles} clipPath="url(#clip-items-left)">
                {items}
            </animated.g>
        </>
    );
}

export default Items;
