'use client';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ── GLSL ─────────────────────────────────────────────── */
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float u_time;
  varying vec2 vUv;

  float tanhFn(float x, float k)  { return 1.0 - 2.0 / (1.0 + exp(2.0*x*k)); }
  float wave  (float x, float t ) { return sin(8.0*x + 2.0*t)*0.2 + sin(4.0*x + 1.5*t)*0.1; }

  void main() {
    vec2  p   = (vUv - 0.5) * 2.0;          // −1 → 1 space
    float d   = wave(p.x, u_time);          // wavy distortion
    float col = tanhFn(p.y + d, 3.5);       // smooth tanh
    gl_FragColor = vec4(vec3(0.4 + 0.6*col), 1.0);
  }
`;
/* ─────────────────────────────────────────────────────── */

const TanhShaderEffect = () => {
  const mat = useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock }) => {
    mat.current!.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={mat}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{ u_time: { value: 0 } }}
      />
    </mesh>
  );
};

/*  Canvas **scoped to parent** (absolute, not fixed)  */
const TanhShaderCanvas = () => (
  <Canvas
    className="absolute inset-0 w-full h-full pointer-events-none" /* ⬅️ scoped */
    camera={{ position: [0, 0, 1] }}
  >
    <TanhShaderEffect />
  </Canvas>
);

export default TanhShaderCanvas;
