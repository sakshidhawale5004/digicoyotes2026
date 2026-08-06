import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, Suspense, useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";
import { Float, Stars, useTexture } from "@react-three/drei";
import logoUrl from "@/assets/logo.png";

/**
 * Cinematic hero scene — realistic lighting rig.
 * - Central icosahedron in graphite with warm orange key light + cool rim light
 * - Three orbiting satellite polyhedrons for depth
 * - Fake radial contact shadow disc grounds the composition
 * - Elegant particle constellation with faint connections
 */

const ContactShadow = () => {
  // Faint radial dark disc used as a soft "ground shadow" beneath the core.
  const tex = useMemo(() => {
    const size = 256;
    const c = document.createElement("canvas");
    c.width = c.height = size;
    const ctx = c.getContext("2d")!;
    const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    g.addColorStop(0, "rgba(0,0,0,0.55)");
    g.addColorStop(0.5, "rgba(0,0,0,0.18)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    const t = new THREE.CanvasTexture(c);
    t.needsUpdate = true;
    return t;
  }, []);

  return (
    <mesh position={[0, -1.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[6, 6]} />
      <meshBasicMaterial map={tex} transparent depthWrite={false} />
    </mesh>
  );
};

const Satellite = ({
  radius,
  speed,
  offset,
  yTilt,
  size,
  isDark,
}: {
  radius: number;
  speed: number;
  offset: number;
  yTilt: number;
  size: number;
  isDark: boolean;
}) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.position.set(Math.cos(t) * radius, Math.sin(t * 0.7) * yTilt, Math.sin(t) * radius);
    ref.current.rotation.x += 0.008;
    ref.current.rotation.y += 0.012;
  });
  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[size, 0]} />
      {isDark ? (
        <meshStandardMaterial
          color="#141414"
          metalness={0.9}
          roughness={0.25}
          emissive="#ff5a1f"
          emissiveIntensity={0.15}
        />
      ) : (
        <meshStandardMaterial
          color="#ff5a1f"
          metalness={0.15}
          roughness={0.2}
        />
      )}
    </mesh>
  );
};

const CoreObject = ({ isDark }: { isDark: boolean }) => {
  const ref = useRef<THREE.Group>(null);
  const geo = useMemo(() => new THREE.IcosahedronGeometry(1.55, 1), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(geo), [geo]);
  
  // Load the logo texture for the day mode coin
  const texture = useLoader(THREE.TextureLoader, logoUrl);

  useFrame((state, dt) => {
    if (!ref.current) return;
    
    if (isDark) {
      ref.current.rotation.y += dt * 0.1;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.12;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.12;
    } else {
      // Coin spin
      ref.current.rotation.y += dt * 0.4;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.15;
      ref.current.rotation.x = 0.1 * Math.sin(state.clock.elapsedTime);
      ref.current.rotation.z = 0.05 * Math.cos(state.clock.elapsedTime);
    }
  });

  if (!isDark) {
    return (
      <group ref={ref} position={[0, 0.2, 0]}>
        {/* Solid branded orange core */}
        <mesh geometry={geo}>
          <meshStandardMaterial
            color="#ff5a1f"
            metalness={0.15}
            roughness={0.3}
            emissive="#ff8a3d"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Clean white wireframe */}
        <lineSegments geometry={edges} scale={1.01}>
          <lineBasicMaterial color="#ffffff" transparent opacity={0.6} />
        </lineSegments>

        {/* Orbiting Logo */}
        <group position={[0, 0, 1.8]} scale={0.7}>
          <mesh>
            <planeGeometry args={[4, 4]} />
            <meshBasicMaterial map={texture} transparent opacity={1} side={THREE.FrontSide} />
          </mesh>
        </group>
        
        <group position={[0, 0, -1.8]} scale={0.7} rotation={[0, Math.PI, 0]}>
          <mesh>
            <planeGeometry args={[4, 4]} />
            <meshBasicMaterial map={texture} transparent opacity={1} side={THREE.FrontSide} />
          </mesh>
        </group>
      </group>
    );
  }

  return (
    <group ref={ref} position={[0, 0.1, 0]}>
      {/* Core object */}
      <mesh geometry={geo}>
        <meshStandardMaterial
          color="#151515"
          metalness={0.95}
          roughness={0.28}
          emissive="#ff5a1f"
          emissiveIntensity={0.06}
        />
      </mesh>
      {/* Warm edge highlight (Dark mode only) */}
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#ff7a2a" transparent opacity={0.55} />
      </lineSegments>
      {/* Outer soft glow shell */}
      <mesh geometry={geo} scale={1.22}>
        <meshBasicMaterial
          color="#ff8a3d"
          transparent
          opacity={0.045}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

const Constellation = ({ isDark }: { isDark: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const COUNT = 55;
  const RANGE = 6;

  const nodes = useMemo(() => {
    const arr: THREE.Vector3[] = [];
    for (let i = 0; i < COUNT; i++) {
      arr.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * RANGE * 2,
          (Math.random() - 0.5) * RANGE,
          (Math.random() - 0.5) * 3 - 1
        )
      );
    }
    return arr;
  }, []);

  const pointPositions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    nodes.forEach((n, i) => {
      arr[i * 3] = n.x;
      arr[i * 3 + 1] = n.y;
      arr[i * 3 + 2] = n.z;
    });
    return arr;
  }, [nodes]);

  const lineGeo = useMemo(() => {
    const positions: number[] = [];
    const maxDist = 1.6;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < maxDist) {
          positions.push(nodes[i].x, nodes[i].y, nodes[i].z);
          positions.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return g;
  }, [nodes]);

  useFrame((_, dt) => {
    if (groupRef.current) groupRef.current.rotation.y += dt * 0.02;
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[pointPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={isDark ? "#ff8a3d" : "#ff5a1f"}
          size={0.05}
          transparent
          opacity={isDark ? 0.85 : 0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color={isDark ? "#ff6b1a" : "#ff5a1f"} transparent opacity={isDark ? 0.14 : 0.08} />
      </lineSegments>
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
    <div className={`${className} pointer-events-none z-0`}>
      <Canvas
        camera={{ position: [0, 0.4, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        frameloop={visible ? "always" : "never"}
      >
        <Suspense fallback={null}>
          {/* Ambient base */}
          <ambientLight intensity={isDark ? 0.18 : 0.6} />
          {/* Warm key light (upper right) */}
          <directionalLight position={[4, 5, 3]} color={isDark ? "#ff8a3d" : "#ff6b1a"} intensity={isDark ? 1.8 : 1.2} />
          {/* Cool rim light (behind, opposite) */}
          <directionalLight position={[-3, 2, -4]} color={isDark ? "#c9dcff" : "#ffffff"} intensity={isDark ? 0.9 : 0.6} />
          {/* Soft bounce fill from below */}
          <pointLight position={[0, -3, 2]} color="#ff9248" intensity={isDark ? 0.7 : 0.8} distance={8} />
          {/* Deep orange hotspot to punch highlights */}
          <pointLight position={[3, 0.5, 2]} color="#ff6b1a" intensity={isDark ? 1.4 : 1} distance={9} />

          <ContactShadow />
          <CoreObject isDark={isDark} />
          <Satellite radius={2.7} speed={0.35} offset={0} yTilt={0.4} size={0.28} isDark={isDark} />
          <Satellite radius={3.1} speed={-0.28} offset={2.1} yTilt={0.6} size={0.22} isDark={isDark} />
          <Satellite radius={2.4} speed={0.42} offset={4.3} yTilt={0.3} size={0.18} isDark={isDark} />
          <Constellation isDark={isDark} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingShapes;
