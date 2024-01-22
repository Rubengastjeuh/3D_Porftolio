// 3DRoom.tsx
import React from 'react';
import * as THREE from 'three';
import { useEffect, useRef } from "react";

const Room3D = () => {
    const refContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (refContainer.current) {
            // === THREE.JS CODE START ===
            var scene = new THREE.Scene();
            var camera = new THREE.PerspectiveCamera(75, (window.innerWidth-100) /700, 0.1, 1000);
            var renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth-200, 700);
            // document.body.appendChild( renderer.domElement );
            // use ref as a mount point of the Three.js scene instead of the document.body
            while (refContainer.current.firstChild) {
                refContainer.current.removeChild(refContainer.current.firstChild);
            }
            refContainer.current.appendChild(renderer.domElement);
            var geometry = new THREE.BoxGeometry(1, 1, 1);
            var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            var cube = new THREE.Mesh(geometry, material);
            scene.add(cube);
            camera.position.z = 5;

            var animate = function () {
                requestAnimationFrame(animate);
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                renderer.render(scene, camera);
            };

            animate();
            // === THREE.JS CODE END ===
        }
    }, []); // Empty dependency array to run only once

    return (
        <div className="roomContainer" ref={refContainer}></div>
    );
};

export default Room3D;
