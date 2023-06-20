import React from "react";

export default function ReviewCard(props) {
  const { children } = props;
  return (
    <div className="flex justify-start text-base gap-x-10">{children}</div>
  );
}

function Head(props) {
  const { image } = props;
  return (
    <div className="flex justify-center items-center w-1/4">
      <img src={image} alt="avatar" className="rounded-full" />
    </div>
  );
}

function Body(props) {
  const { title, children } = props;
  return (
    <div className="flex flex-col justify-center w-3/4">
      <div className="flex justify-start items-center gap-x-2 w-full">
        <h1 className="text-2xl font-extrabold">{title}</h1>
      </div>
      <div className="flex justify-start items-center text-base">
        <p className="text-md font-semibold">{children}</p>
      </div>
    </div>
  );
}

ReviewCard.Head = Head;
ReviewCard.Body = Body;
