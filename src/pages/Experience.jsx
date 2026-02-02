import React, { useEffect, useState, useRef } from 'react';
import Spline from '@splinetool/react-spline';

const Experience = () => {
    const [sceneReady, setSceneReady] = useState(false);
    const [showUI, setShowUI] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const splineRef = useRef();
    const isHoveringRef = useRef(false);
    const activeTimeoutsRef = useRef(new Set());

    // Animation durations (ms) — adjust to match actual animation lengths
    const DURATION_ANIM_1 = 900;  // model_experience_Experience1.1 duration
    const DURATION_ANIM_2 = 1100; // model_experience_Experience1.2 duration (looped)
    const DURATION_END_ANIM = 800; // model_experience_Experience1.3 duration

    useEffect(() => {
        const loaderTimer = setTimeout(() => {
            setShowLoader(true);
        }, 2000);

        return () => clearTimeout(loaderTimer);
    }, []);

    function onLoad(spline) {
        console.log('Spline scene loaded:', spline);
        splineRef.current = spline;

        const allObjects = spline.getAllObjects?.() || [];
        console.log('=== ALL OBJECTS IN SCENE ===');
        console.log('Total objects:', allObjects.length);
        allObjects.forEach((obj, index) => {
            console.log(`[${index}] Name: "${obj.name}" | Type: ${obj.type} | UUID: ${obj.uuid}`);
        });
        console.log('=== END ===');

        // Start idle if present
        setTimeout(() => {
            console.log('Attempting to play idle (if present)');
            spline.emitEvent?.('start', 'model_experience_idle');
        }, 500);

        // Let shaders + animation settle
        setTimeout(() => {
            setSceneReady(true);
            setShowLoader(false);
            setTimeout(() => setShowUI(true), 600);
        }, 400);
    }

    // Helpers to track/clear timeouts
    const setTrackedTimeout = (fn, delay) => {
        const id = setTimeout(() => {
            activeTimeoutsRef.current.delete(id);
            fn();
        }, delay);
        activeTimeoutsRef.current.add(id);
        return id;
    };

    const clearTrackedTimeouts = () => {
        activeTimeoutsRef.current.forEach(id => clearTimeout(id));
        activeTimeoutsRef.current.clear();
    };

    // Hover-driven animation loop: 1.1 -> 1.2 -> repeat while hovering
    const startHoverSequence = () => {
        if (!splineRef.current) return;
        if (isHoveringRef.current) return; // already running

        isHoveringRef.current = true;
        console.log('Hover started: begin animation loop (1.1 -> 1.2)');

        const playChain = () => {
            if (!isHoveringRef.current || !splineRef.current) return;

            // Play first hover animation
            console.log('Play: model_experience_Experience1.1');
            // Use the verb your scene expects ('start'/'mouseDown' etc.). 'start' is generic.
            splineRef.current.emitEvent?.('start', 'model_experience_Experience1.1');

            // After the first animation finishes, play the second
            setTrackedTimeout(() => {
                if (!isHoveringRef.current || !splineRef.current) return;

                console.log('Play: model_experience_Experience1.2');
                splineRef.current.emitEvent?.('start', 'model_experience_Experience1.2');

                // After the second animation finishes, loop back if still hovering
                setTrackedTimeout(() => {
                    if (isHoveringRef.current) {
                        playChain();
                    }
                }, DURATION_ANIM_2);
            }, DURATION_ANIM_1);
        };

        playChain();
    };

    // Stop hover loop and play end animation
    const stopHoverSequence = () => {
        if (!splineRef.current) return;
        if (!isHoveringRef.current) return;

        isHoveringRef.current = false;
        console.log('Hover ended: stopping loop, playing end animation (1.3)');

        // cancel scheduled repeats
        clearTrackedTimeouts();

        // Play end animation once
        splineRef.current.emitEvent?.('start', 'model_experience_Experience1.3');

        // Optional: return to idle after end animation completes
        setTrackedTimeout(() => {
            if (splineRef.current) {
                console.log('Return to idle after end animation');
                splineRef.current.emitEvent?.('start', 'model_experience_idle');
            }
        }, DURATION_END_ANIM);
    };

    // Pointer handlers: detect when pointer is over Rectangle1
    function onPointerMove(e) {
        // e.target is the Spline object under the cursor
        const targetName = e?.target?.name;
        if (targetName === 'Rectangle1') {
            if (!isHoveringRef.current) startHoverSequence();
        } else {
            if (isHoveringRef.current) stopHoverSequence();
        }
    }

    function onPointerLeave() {
        // pointer left the canvas entirely
        if (isHoveringRef.current) stopHoverSequence();
    }

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            clearTrackedTimeouts();
        };
    }, []);

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <Spline
                scene="https://prod.spline.design/xzJc0Qh56nEss09z/scene.splinecode"
                onLoad={onLoad}
                onMouseMove={onPointerMove}
                onPointerLeave={onPointerLeave}
                style={{
                    width: '100%',
                    height: '100%',
                    opacity: sceneReady ? 1 : 0,
                    transition: 'opacity 0.8s ease',
                }}
            />

            {/* loader */}
            {showLoader && !sceneReady && (
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, #f5f5f5, #eaeaea)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 40,
                    }}
                >
                    <p
                        style={{
                            fontSize: '1.1rem',
                            letterSpacing: '0.12em',
                            color: '#777',
                        }}
                    >
                        Loading experience…
                    </p>
                </div>
            )}

            {/* gated ui/text */}
            <div
                style={{
                    opacity: showUI ? 1 : 0,
                    visibility: showUI ? 'visible' : 'hidden',
                    transition: 'opacity 0.8s ease',
                }}
            >
                {/* cover up watermark */}
                <div style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 5,
                    width: 180,
                    height: 39,
                    backgroundColor: 'white',
                    pointerEvents: 'none'
                }} />
            </div>
        </div>
    );
};

export default Experience;