import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CSS3DObject, CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls';

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

interface SkillInfoProps {
    skills: Array<{
        name: string;
    }>;
}

interface StudyInfoProps {
    study: {
        school: string;
        startYear: number;
        endYear: number;
        fieldOfStudy: string;
    };
}

interface Room3DProps extends ProjectListProps, SkillInfoProps, StudyInfoProps {}

const Room3D: React.FC<Room3DProps> = ({ projects, skills, study }) => {
    const canvasRef = useRef<HTMLDivElement | null>(null);
    const clock = new THREE.Clock();
    let controls: any;
    const cardWidth = 400;
    const createCSS3DObject = (content: string) => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = content;
        const div = wrapper.firstElementChild as HTMLDivElement;

        return new CSS3DObject(div);
    };

    const addProjects = (scene: THREE.Scene) => {
        projects.forEach((project, index) => {
            const cardContent = `
          <div>
              <p class="projectTitle">${project.title}</p>
              <div class="card">
                  <img src=${project.image} alt=${project.title} class="cardImage">
                  <h3>${project.description}</h3>
              </div>
          </div>`;
            const css3DObject = createCSS3DObject(cardContent);



            if (index < projects.length / 2) {
                css3DObject.position.set(-500, 0, index * (cardWidth + 150));
                const angleInRadians = THREE.MathUtils.degToRad(90);
                css3DObject.rotateY(angleInRadians);
            } else {
                css3DObject.position.set(500, 0, (index - projects.length / 2) * (cardWidth + 150));
                const angleInRadians = THREE.MathUtils.degToRad(-90);
                css3DObject.rotateY(angleInRadians);
            }
            scene.add(css3DObject);
        });
    };

    const addSkills = (scene: THREE.Scene) => {

            const cardContent = `
          <div class="skillContainer">
          <div class="skillFloor">
              ${skills.map((skill) => (
                `<div class="skillCard">${skill.name}</div>`
            )).join('')}
          </div>
          <p class="title">Skills</p>
          </div>`;
            const css3DObject = createCSS3DObject(cardContent);
        const z = ((cardWidth+150)) * (projects.length/2 -1)-400
            css3DObject.position.set(0, -400, z);
            const angleInRadians = THREE.MathUtils.degToRad(270);
            css3DObject.rotateX(angleInRadians);
            scene.add(css3DObject);

    };

    const addStudy = (scene: THREE.Scene) => {
        const cardContent = `
          <div class="studyContainer">
          <p class="title">Education</p>
              <div class="studyCard">
                  <p> ${study.school}</p>
                  <p> ${study.fieldOfStudy}</p>
                  <p>${study.startYear} - ${study.endYear}</p>
              </div>
          </div>`;
        const css3DObject = createCSS3DObject(cardContent);
        const z = (cardWidth) +200
        css3DObject.position.set(0, 0, -z);
        scene.add(css3DObject);
    };

    const setControls = (camera: THREE.PerspectiveCamera, renderer: CSS3DRenderer) => {
        controls = new FirstPersonControls(camera, renderer.domElement);
        controls.movementSpeed = 500;
        controls.lookSpeed = 0.03;
        // controls.lookVertical = false;
    };

    const setLight = (scene: THREE.Scene) => {
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
        directionalLight.position.set(5, 10, 7);
        directionalLight.castShadow = true;
        scene.add(directionalLight);
    };

    const createScene = () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, (window.innerWidth - 100) / 500, 0.1, 400);
        const renderer = new CSS3DRenderer();
        renderer.setSize(window.innerWidth - 100, 500);

        const canvas = canvasRef.current;

        if (canvas) {
            const rendererContainer = document.createElement('div');
            rendererContainer.appendChild(renderer.domElement);
            canvas.innerHTML = '';
            canvas.appendChild(rendererContainer);
        }

        setControls(camera, renderer);
        setLight(scene);
        addProjects(scene);
        addSkills(scene);
        addStudy(scene);
        camera.position.set(-12, 10, (projects.length/2 * cardWidth)+ 2 *cardWidth);
        camera.lookAt(scene.position);

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update(clock.getDelta());
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            const { clientWidth, clientHeight } = canvas!;
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(clientWidth, clientHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    };

    useEffect(() => {
        createScene();
    }, [projects]);

    return <div className="roomContainer" ref={canvasRef}></div>;
};

export default Room3D;
