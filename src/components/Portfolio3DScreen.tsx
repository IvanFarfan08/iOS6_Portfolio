import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Import 3D models
import rrSvFTest from '../assets/3D/RR_SV.glb?url';

interface Model3D {
    name: string;
    description: string;
    path: string;
    scale?: number;
}

const models: Model3D[] = [
    {
        name: "Range Rover SV",
        description: "3D Model",
        path: rrSvFTest,
        scale: 1,
    },
];

function Portfolio3DScreen() {
    const containerRef = useRef<HTMLDivElement>(null);
    const initializedRef = useRef(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const currentModel = models[currentIndex];

    useEffect(() => {
        if (!containerRef.current || initializedRef.current) return;
        initializedRef.current = true;

        const container = containerRef.current;

        // Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf5f5f5);

        // Camera setup
        const camera = new THREE.PerspectiveCamera(
            50,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        camera.position.set(2.2, 1, 2.2);

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = false;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.4;
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        container.appendChild(renderer.domElement);

        // OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enableZoom = true;
        controls.enablePan = true;
        controls.target.set(0, 0, 0);

        // Studio-quality lighting setup

        // Hemisphere light for natural sky/ground ambient
        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
        hemiLight.position.set(0, 20, 0);
        scene.add(hemiLight);

        // Key light - main light source (front-right, slightly warm)
        const keyLight = new THREE.DirectionalLight(0xfffaf0, 1.2);
        keyLight.position.set(5, 8, 5);
        scene.add(keyLight);

        // Fill light - softer, opposite side (front-left, slightly cool)
        const fillLight = new THREE.DirectionalLight(0xf0f5ff, 0.6);
        fillLight.position.set(-5, 5, 5);
        scene.add(fillLight);

        // Back/rim light - creates edge definition
        const rimLight = new THREE.DirectionalLight(0xffffff, 0.8);
        rimLight.position.set(0, 5, -8);
        scene.add(rimLight);

        // Top light - highlights roof and top surfaces
        const topLight = new THREE.DirectionalLight(0xffffff, 0.4);
        topLight.position.set(0, 15, 0);
        scene.add(topLight);

        // Ground bounce light - subtle upward fill
        const bounceLight = new THREE.DirectionalLight(0xf5f5f5, 0.3);
        bounceLight.position.set(0, -5, 5);
        scene.add(bounceLight);


        // Model reference for rotation
        let currentModelMesh: THREE.Group | null = null;

        // Load model
        const loader = new GLTFLoader();
        const modelData = models[0];

        console.log('Loading model from:', modelData.path);

        loader.load(
            modelData.path,
            (gltf) => {
                console.log('GLTF loaded:', gltf);

                const model = gltf.scene;

                // Get bounding box for scaling
                const box = new THREE.Box3().setFromObject(model);
                const size = box.getSize(new THREE.Vector3());

                // Scale to fit first
                const maxDim = Math.max(size.x, size.y, size.z);
                const scale = 3 / maxDim;
                model.scale.setScalar(scale);

                // Recalculate bounding box after scaling
                const scaledBox = new THREE.Box3().setFromObject(model);
                const scaledCenter = scaledBox.getCenter(new THREE.Vector3());

                // Center the model at origin
                model.position.x = -scaledCenter.x;
                model.position.y = -scaledCenter.y;
                model.position.z = -scaledCenter.z;

                console.log('Applied scale:', scale);

                // Fix materials
                model.traverse((child) => {
                    if (child instanceof THREE.Mesh && child.material) {
                        const materials = Array.isArray(child.material) ? child.material : [child.material];
                        materials.forEach((mat: THREE.Material) => {
                            if (mat instanceof THREE.MeshStandardMaterial || mat instanceof THREE.MeshPhysicalMaterial) {
                                mat.envMap = null;
                                mat.envMapIntensity = 0;
                                mat.needsUpdate = true;
                            }
                        });
                    }
                });

                scene.add(model);
                currentModelMesh = model;

                console.log('Model added! Scene children:', scene.children.length);
                setIsLoading(false);
            },
            (progress) => {
                if (progress.total > 0) {
                    console.log('Loading:', Math.round(progress.loaded / progress.total * 100) + '%');
                }
            },
            (error) => {
                console.error('Error loading model:', error);
                setIsLoading(false);
            }
        );

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            if (currentModelMesh) {
                currentModelMesh.rotation.y += 0.005;
            }

            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Resize handler
        const handleResize = () => {
            if (!containerRef.current) return;
            const width = containerRef.current.clientWidth;
            const height = containerRef.current.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
            controls.dispose();
        };
    }, []);

    return (
        <div className="absolute inset-0 top-[30px] bg-[#f5f5f5] animate-fade-in">
            {/* Title */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 text-center">
                <h1
                    className="text-2xl md:text-3xl text-gray-800 tracking-wide"
                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700 }}
                >
                    {currentModel.name}
                </h1>
                <p
                    className="text-sm md:text-base text-gray-500 mt-1"
                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 300 }}
                >
                    {currentModel.description}
                </p>
            </div>

            {/* Loading indicator */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
                </div>
            )}

            {/* 3D Viewer */}
            <div
                ref={containerRef}
                className="w-full h-[calc(100vh-30px)] touch-none"
            />

            {/* Navigation arrows - only show if multiple models */}
            {models.length > 1 && (
                <>
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200 active:scale-90"
                    >
                        <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200 active:scale-90"
                    >
                        <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </>
            )}

            {/* Progress slider - only show if multiple models */}
            {models.length > 1 && (
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 w-32 md:w-40">
                    <div className="relative h-1 bg-gray-300 rounded-full overflow-hidden">
                        <div
                            className="absolute h-full bg-gray-500 rounded-full transition-all duration-300 ease-out"
                            style={{
                                width: `${100 / models.length}%`,
                                left: `${(currentIndex / models.length) * 100}%`
                            }}
                        />
                    </div>
                    <div className="text-center mt-2 text-xs text-gray-400"
                        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 300 }}
                    >
                        {currentIndex + 1} / {models.length}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Portfolio3DScreen;
