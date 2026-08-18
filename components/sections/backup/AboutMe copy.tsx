'use client'

import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const initParticles = async (engine: Engine) => {
  await loadSlim(engine);
//   await loadFirePreset(engine);
  await loadStarsPreset(engine);
};

const AboutMe = () => {
  return (
    <ParticlesProvider init={initParticles}>
      <div className="relative w-full h-screen bg-linear-to-b from-black via-black/10 to-black/60 overflow-hidden">
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0 h-full w-full pointer-events-none"
          options={{
            preset: "stars",
            fullScreen: { enable: false },
          }}
        />
        <div className="relative z-10 h-full w-full">
          <h1 className="mt-8 text-2xl flex justify-left text-[#6366F1] ml-20">- ABOUT ME</h1>
          <div className="w-full flex flex-col items-center justify-center overflow-hidden">
          </div>
        </div>
      </div>
    </ParticlesProvider>
  );
};

export default AboutMe;