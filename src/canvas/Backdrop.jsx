import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import React, { useRef } from 'react'

const Backdrop = () => {
    const shadow = useRef();

    return (
        <AccumulativeShadows
            ref={shadow}
            temporal
            frames={60}
            alphaTest={0.85}
            rotation={[Math.PI/2 ,0,0]}
            position={[0,0,-0.14]}
        >
            <RandomizedLight amount={7} radius={0} intensity={3} ambient={1.5} position={[5,5,-10]}/>
            <RandomizedLight amount={4} radius={0} intensity={1} ambient={0.9} position={[-5,-5,-10]}/>
        </AccumulativeShadows>
    )
}

export default Backdrop