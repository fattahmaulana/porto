// global.d.ts
declare module '@react-three/rapier' {
  export const RigidBody: any;
  export const BallCollider: any;
  export const CuboidCollider: any;
  export const Physics: any;
  export const useRopeJoint: any;
  export const useSphericalJoint: any;
}

declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}
