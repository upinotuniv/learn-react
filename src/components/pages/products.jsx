import React from "react";
import Card from "../organisms/Card";
import Button from "../atoms/Button";

const data = [
  {
    id: 1,
    image: "/images/c-d-x-PDX_a_82obo-unsplash.jpg",
    title: "Headphone 🎧",
    price: "$ 9.99",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa laudantium ipsam voluptates! Quos earum quas, odio esse sit neque minima dolore fuga nemo quae?",
  },
  {
    id: 2,
    image: "/images/eniko-kis-KsLPTsYaqIQ-unsplash.jpg",
    title: "Camera 📷",
    price: "$ 9.99",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa laudantium ipsam voluptates! Quos earum quas, odio esse sit neque minima dolore fuga nemo quae?",
  },
  {
    id: 3,
    image: "/images/domino-164_6wVEHfI-unsplash.jpg",
    title: "Nika Shoes 👟",
    price: "$ 9.99",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa laudantium ipsam voluptates! Quos earum quas, odio esse sit neque minima dolore fuga nemo quae?",
  },
];

export default function ProductPage() {
  return (
    <div className="flex justify-center items-center gap-10">
      {data.map((product) => (
        <Card key={product.id}>
          <Card.Header src={product.image} />
          <Card.Body title={product.title} price={product.price}>
            {product.desc}
          </Card.Body>
          <Card.Footer>
            <Button text="Buy Now" />
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
}
