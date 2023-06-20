import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Title from "../../atoms/Title";
import SubTitle from "../../atoms/SubTitle";

export default function Banner() {
  const banner = useRef();

  const timeline = gsap.timeline({
    repeat: false,
    defaults: { duration: 1.5, ease: "easeIn" },
  });

  useEffect(() => {
    timeline
      .from(banner.current, { y: -100, paused: true })
      .to(banner.current, { y: 0 });
  }, []);

  return (
    <div className="flex justify-center items-center w-full p-12">
      <div
        className="banner flex flex-col justify-center items-center gap-y-4 px-64 "
        ref={banner}
      >
        <Title size="text-6xl">
          The Most Fastest Shipping service in Indonesia
        </Title>
        <div className="flex justify-center items-center px-40">
          <SubTitle>
            Say goodbye to abandoned and time-consuming delivery access.
            supported by more than 30,000 of our outlets spread throughout
            Indonesia, our delivery access will be much more optimal
          </SubTitle>
        </div>
      </div>
    </div>
  );
}
