import React from "react";
import PixelBlast from "./PixelBlast";

const PageBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full">
      <PixelBlast
        variant="circle"
        pixelSize={7}
        color="#3273ff"
        patternScale={3}
        patternDensity={1.2}
        pixelSizeJitter={0.5}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquid
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.6}
        edgeFade={0.25}
        transparent
      />
      <div className="absolute inset-0 backdrop-blur-sm bg-gray-900 opacity-65" />
    </div>
  );
};

export default PageBackground;
