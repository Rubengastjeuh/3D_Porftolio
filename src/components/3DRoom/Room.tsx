import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';
import {CSS3DObject, CSS3DRenderer} from 'three/examples/jsm/renderers/CSS3DRenderer';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

interface ProjectListProps {
    projects: Array<{
        id: number;
        title: string;
        description: string;
        skills: string[];
        ageWhenDone: number;
        image: string;
    }>;
}

const Room3D: React.FC<ProjectListProps> = ({projects}) => {
    const canvasRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        // Initialize Three.js scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, (window.innerWidth-300) / 500, 0.1, 400);
        const renderer = new CSS3DRenderer();
        renderer.setSize(window.innerWidth-300, 500);
        const orbitControls = new OrbitControls(camera, renderer.domElement);
        orbitControls.enableDamping = true;
        orbitControls.enablePan = true;

        const canvas = canvasRef.current;

        if (canvas) {
            // Create a new div to hold the renderer's DOM element
            const rendererContainer = document.createElement('div');
            rendererContainer.appendChild(renderer.domElement);

            // Remove existing child nodes (if any)
            canvas.innerHTML = '';

            // Append the new div to the canvas
            canvas.appendChild(rendererContainer);
        }

        // Light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
        directionalLight.position.set(5, 10, 7);
        directionalLight.castShadow = true;
        scene.add(directionalLight);

        const createCSS3DObject = (content: string) => {
            const wrapper = document.createElement('div');
            wrapper.innerHTML = content;
            const div = wrapper.firstElementChild as HTMLDivElement;


            return new CSS3DObject(div);
        };

        // Add project cards as CSS3DObjects
        projects.forEach((project, index) => {
            const cardContent = `
                <div class="card">
                    <img src=${project.image} alt=${project.title} class="cardImage">
                    <h3>${project.title}</h3>
                    <h3>${project.description}</h3>
                </div>
                
            `;
            const css3DObject = createCSS3DObject(cardContent);

            const cardWidth = 400;
            //const cardHeight = 800;

            if (index < projects.length / 2) {
                css3DObject.position.set(-500, 0, index * (cardWidth + 150));
                const angleInRadians = THREE.MathUtils.degToRad(90);
                css3DObject.rotateY(angleInRadians);
            } else {
                css3DObject.position.set(500,  0,(index - projects.length / 2) * (cardWidth + 150));
                const angleInRadians = THREE.MathUtils.degToRad(-90);
                css3DObject.rotateY(angleInRadians);
            }
            scene.add(css3DObject);
        });
        camera.position.set(-12.74, 92, 1231.45);
        camera.lookAt(scene.position);

        const animate = () => {
            requestAnimationFrame(animate);
            orbitControls.update();
            renderer.render(scene, camera);
        };
        animate();



        const handleResize = () => {
            const {clientWidth, clientHeight} = canvas!;
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(clientWidth, clientHeight);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [projects]);

    return <div className="roomContainer" ref={canvasRef}></div>;
};

export default Room3D;
