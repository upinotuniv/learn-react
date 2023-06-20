import React, { useEffect } from "react";
import Card from "../../organisms/Card";
import { IconAlarm, IconMotorbike, IconTargetArrow } from "@tabler/icons-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Service() {
  // useEffect(() => {
  //   gsap.from(".card", {
  //     xPercent: -100,
  //     scrollTrigger: {
  //       trigger: ".card",
  //       start: "top bottom",
  //       end: "top 20%",
  //       scrub: 1,
  //     },
  //   });
  // }, []);

  const data = [
    {
      id: 1,
      icon: IconAlarm,
      title: "10 Hours Delivery",
      desc: "Set ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    },
    {
      id: 2,
      icon: IconMotorbike,
      title: "Pickup Delivery",
      desc: "Set ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    },
    {
      id: 3,
      icon: IconTargetArrow,
      title: "Measurement Accuracy",
      desc: "Set ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    },
  ];

  return (
    <div className="w-full h-screen card">
      <div className="flex flex-col justify-center items-center w-full px-24 pb-12 gap-y-4">
        <h1 className="text-[#3B3B3B] font-bold text-4xl">Why Choosing US?</h1>
        <p className="text-[#383838] font-normal text-xl">
          A ton of services that you will definitely get when using our services
        </p>
      </div>
      <div className="flex justify-center items-center w-full px-24 space-x-8">
        {data.map((service) => (
          <Card key={service.id}>
            <Card.Head>
              <service.icon size={100} color="#265AD4" stroke={1.5} />
            </Card.Head>
            <Card.Body title={service.title}>{service.desc}</Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
