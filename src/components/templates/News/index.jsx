import React from "react";
import Title from "../../atoms/Title";
import SubTitle from "../../atoms/SubTitle";

export default function News() {
  return (
    <div className="w-full h-full bg-[url('/images/banner.png')] bg-cover">
      <div className="flex flex-col justify-center items-center w-full space-y-14">
        <div className="flex flex-col justify-center items-center gap-y-4 pt-32">
          <Title size="4xl">
            Enjoy various advantages integrated into our system
          </Title>
          <div className="flex justify-center items-center px-56">
            <SubTitle>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis
            </SubTitle>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <img src="/images/phone.png" alt="image" className="full h-auto" />
        </div>
      </div>
    </div>
  );
}
