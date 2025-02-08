import { Canvas } from "@react-three/fiber";
import Particles from "./Particles";
import Header from "./Header";
import LoveMessages from "./LoveMessages";
import SlideShow from "./SlideShow";

export function CelebrationStage() {
  return (
    <div className='h-dvh max-w-dvw snap-y snap-mandatory overflow-y-scroll relative bg-pink-200'>
      <div className='fixed w-dvw h-dvh inset-0 -z-1'>
        <Canvas camera={{ position: [0, 0, 0], fov: 50 }}>
          <ambientLight intensity={0.1} />
          <Particles />
        </Canvas>
      </div>
      {/* Background Canvas - Fixed Position */}

      <LoveMessages />
      <Header />
      <SlideShow />
    </div>
  );
}
