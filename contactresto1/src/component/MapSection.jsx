import React from "react";

const MapSection = () => {
  return (
    <div className="w-full max-w-lg h-[450px] bg-gray-300 rounded-lg overflow-hidden">
  <iframe
    title="Map Location"
    className="w-full h-full"
    src="https://maps.google.com/maps?q=Jalan+Brigjen+Dharsono+Bypass,+Cirebon+45653&t=&z=15&ie=UTF8&iwloc=&output=embed"
    allowFullScreen
  ></iframe>
</div>

  );
};

export default MapSection;
