import React from "react";
import Earth from "./Globe";

const GlobeSection = () => {
  return (
    <section className="relative px-4 sm:px-6">
      <div
        className="h-fit overflow-hidden rounded-3xl max-w-4xl mx-auto
        border border-white/20
        bg-[radial-gradient(35%_128px_at_50%_0%,rgba(255,255,255,0.15),rgba(255,255,255,0.05))] text-white mb-20"
      >
        <article className="grid gap-4 text-center relative z-10 py-10">
          <span className="inline-block text-sm border p-1 px-3 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35]">
            Get Access
          </span>

          <h1 className="text-4xl  font-semibold bg-linear-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter">
            Design with a Global
            <br />
            Perspective, Innovate with Ease.
          </h1>
          <Earth />
        </article>
      </div>
    </section>
  );
};

export default GlobeSection;
