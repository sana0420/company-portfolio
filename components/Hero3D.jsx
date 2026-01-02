"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm"

function Stars(props) {
  const ref = useRef()
  const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }), [])

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#00ffff" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

function FloatingCube() {
  const meshRef = useRef()

  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
  })

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={0.2} transparent opacity={0.8} />
    </mesh>
  )
}

function FloatingSphere() {
  const meshRef = useRef()

  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.2
    meshRef.current.position.y = Math.cos(state.clock.elapsedTime * 1.2) * 0.15
  })

  return (
    <mesh ref={meshRef} position={[-2, 0, 0]}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.3} transparent opacity={0.9} />
    </mesh>
  )
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
        <FloatingCube />
        <FloatingSphere />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </div>
  )
}
