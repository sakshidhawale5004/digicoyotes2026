import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

const DigitalCore = () => {
  const groupRef = useRef<THREE.Group>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state, dt) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += dt * 0.15;
      groupRef.current.rotation.x += dt * 0.1;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y -= dt * 0.2;
      wireframeRef.current.rotation.x -= dt * 0.15;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += dt * 0.05;
      // Pulse effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      particlesRef.current.scale.set(scale, scale, scale);
    }
  });

  const particleCount = 1000;
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const color = new THREE.Color();

    for (let i = 0; i < particleCount; i++) {
      // Create a spherical particle network
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const radius = 3.5 + Math.random() * 1.5;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mix = Math.random();
      color.setHSL(0.08 + mix * 0.05, 1, 0.6 + mix * 0.4); // Orange to yellow highlights
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return { positions, colors };
  }, []);

  return (
    <group ref={groupRef}>
      {/* Outer Wireframe */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshBasicMaterial 
          color="#ff5a1f" 
          wireframe 
          transparent 
          opacity={0.6} 
          blending={THREE.NormalBlending}
        />
      </mesh>

      {/* Surrounding Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles.positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[particles.colors, 3]} />
        </bufferGeometry>
        <pointsMaterial 
          size={0.06} 
          vertexColors 
          transparent 
          opacity={0.9}
          blending={THREE.NormalBlending}
          depthWrite={false}
        />
      </points>

      {/* Lighting for the core */}
      <pointLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#ff5a1f" />
    </group>
  );
};

const FloatingShapes = ({ className = "absolute inset-0" }: { className?: string }) => {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    setEnabled(mq.matches && !reduced.matches);
    const handler = () => setEnabled(mq.matches && !reduced.matches);
    mq.addEventListener("change", handler);
    reduced.addEventListener("change", handler);
    const onVis = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      mq.removeEventListener("change", handler);
      reduced.removeEventListener("change", handler);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className={`${className} pointer-events-none z-0`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        frameloop={visible ? "always" : "never"}
      >
        <DigitalCore />
      </Canvas>
    </div>
  );
};

export default FloatingShapes;
