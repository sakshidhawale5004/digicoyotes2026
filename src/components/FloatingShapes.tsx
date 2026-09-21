import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

const BlackHoleCore = ({ isDark }: { isDark: boolean }) => {
  const coreRef = useRef<THREE.Mesh>(null);
  const diskRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state, dt) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += dt * 0.5;
    }
    if (diskRef.current) {
      diskRef.current.rotation.z -= dt * 0.2;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += dt * 0.1;
    }
  });

  const particleCount = 2000;
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const color = new THREE.Color();

    for (let i = 0; i < particleCount; i++) {
      const radius = 2 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 0.5 * (6 - radius); // Thicker in the middle
      
      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(theta) * radius;

      const mix = Math.random();
      color.setHSL(0.08 + mix * 0.05, 1, 0.5 + mix * 0.5); // Orange to yellow
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return { positions, colors };
  }, []);

  return (
    <group rotation={[Math.PI / 8, 0, 0]}>
      {/* Event Horizon (Black Core) */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* Glowing Accretion Disk */}
      <group ref={diskRef} rotation={[Math.PI / 2, 0, 0]}>
        {/* Inner bright ring */}
        <mesh>
          <ringGeometry args={[1.6, 2.8, 64]} />
          <meshBasicMaterial 
            color="#ff5a1f" 
            transparent 
            opacity={0.8} 
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
        
        {/* Outer fade ring */}
        <mesh>
          <ringGeometry args={[2.8, 5, 64]} />
          <meshBasicMaterial 
            color="#ff8a3d" 
            transparent 
            opacity={0.3} 
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        {/* Outer aura */}
        <mesh>
          <ringGeometry args={[5, 8, 64]} />
          <meshBasicMaterial 
            color="#ff3300" 
            transparent 
            opacity={0.1} 
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      </group>

      {/* Orbiting Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles.positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[particles.colors, 3]} />
        </bufferGeometry>
        <pointsMaterial 
          size={0.05} 
          vertexColors 
          transparent 
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Glow behind the core */}
      <mesh position={[0, 0, -1]}>
        <planeGeometry args={[12, 12]} />
        <meshBasicMaterial 
          color="#ff5a1f" 
          transparent 
          opacity={0.15} 
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
};

const FloatingShapes = ({ className = "absolute inset-0" }: { className?: string }) => {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const { theme } = useTheme();
  const isDark = theme !== "light";

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
    <div className={`${className} pointer-events-none z-0 mix-blend-screen`}>
      <Canvas
        camera={{ position: [0, 1, 10], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        frameloop={visible ? "always" : "never"}
      >
        <BlackHoleCore isDark={isDark} />
      </Canvas>
    </div>
  );
};

export default FloatingShapes;
