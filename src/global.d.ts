export { };

declare module '*.glb';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
      group: any;
      mesh: any;
      ambientLight: any;
      meshPhysicalMaterial: any;
      meshStandardMaterial: any;
      meshBasicMaterial: any;
      primitive: any;
      [key: string]: any;
    }
  }
}
