import React from 'react';
import { animated, useSpring, useTransition } from "react-spring";

function OpacityChange(from, to, duration) {
    const opacityChange = useSpring({
        from: {
            opacity: from
        },
    
        to: {
            opacity: to
        },
    
        config: {duration: duration},
    });

    return opacityChange;
};

function HeightChange(from, to, duration) {
    const heightChange = useSpring({
        from: {
            height: from
        },
    
        to: {
            height: to
        },
    
        config: {duration: 2000},
    });

    return heightChange;
};

function ColorChange(from, to, duration) {
    const colorChange = useSpring({
        from: {
            color: from
        },
    
        to: {
            color: to
        },
    
        config: {duration: duration},
    });

    return colorChange;
}

function TranslateChange(fromX, fromY, toX, toY, duration) {
    const translateChange = useSpring({
        from: {
            transform: 'translate(' + {fromX} + 'px, ' + {fromY} + 'px)'
        },
    
        to: {
            transform: 'translate(' + {toX} + 'px, ' + {toY} + 'px)'
        },
    
        config: {duration: duration},
    });

    return translateChange;
}

export { OpacityChange, HeightChange, ColorChange, TranslateChange };





