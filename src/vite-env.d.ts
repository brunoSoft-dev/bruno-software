/// <reference types="vite/client" />

declare module '*.glb' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module 'meshline' {
  export class MeshLineGeometry extends import('three').BufferGeometry {
    setPoints(points: import('three').Vector3[] | Float32Array): void;
  }
  export class MeshLineMaterial extends import('three').ShaderMaterial {
    constructor(parameters?: Record<string, any>);
  }
}
