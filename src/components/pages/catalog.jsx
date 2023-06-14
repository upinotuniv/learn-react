import React from "react";
import CatalogLayout from "../templates/Catalog";
import Card from "../organisms/Card";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    image: "/images/ella-olsson-mmnKI8kMxpc-unsplash.jpg",
    title: "Salmon",
    price: "$ 9.99",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt nostrum facere, recusandae molestiae itaque incidunt ducimus quo exercitationem nisi distinctio architecto quasi voluptas officia, odit iusto accusantium, eos laborum.",
  },
  {
    id: 2,
    image: "/images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg",
    title: "Kangkung",
    price: "$ 1.99",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt nostrum facere, recusandae molestiae itaque incidunt ducimus quo exercitationem nisi distinctio architecto quasi voluptas officia, odit iusto accusantium, eos laborum.",
  },
  {
    id: 3,
    image: "/images/davide-cantelli-jpkfc5_d-DI-unsplash.jpg",
    title: "Roti Bakar",
    price: "$ 2.50",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt nostrum facere, recusandae molestiae itaque incidunt ducimus quo exercitationem nisi distinctio architecto quasi voluptas officia, odit iusto accusantium, eos laborum.",
  },
  {
    id: 4,
    image: "/images/emy-XoByiBymX20-unsplash.jpg",
    title: "Semur Jengkol",
    price: "$ 5.99",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt nostrum facere, recusandae molestiae itaque incidunt ducimus quo exercitationem nisi distinctio architecto quasi voluptas officia, odit iusto accusantium, eos laborum.",
  },
  {
    id: 5,
    image: "/images/brooke-lark-jUPOXXRNdcA-unsplash.jpg",
    title: "Salad",
    price: "$ 4.99",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt nostrum facere, recusandae molestiae itaque incidunt ducimus quo exercitationem nisi distinctio architecto quasi voluptas officia, odit iusto accusantium, eos laborum.",
  },
  {
    id: 6,
    image: "/images/alex-munsell-Yr4n8O_3UPc-unsplash.jpg",
    title: "Steak",
    price: "$ 20",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt nostrum facere, recusandae molestiae itaque incidunt ducimus quo exercitationem nisi distinctio architecto quasi voluptas officia, odit iusto accusantium, eos laborum.",
  },
  {
    id: 7,
    image: "/images/brooke-lark-W9OKrxBqiZA-unsplash.jpg",
    title: "Soup",
    price: "$ 3.95",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt nostrum facere, recusandae molestiae itaque incidunt ducimus quo exercitationem nisi distinctio architecto quasi voluptas officia, odit iusto accusantium, eos laborum.",
  },
  {
    id: 8,
    image: "/images/ryan-concepcion-50KffXbjIOg-unsplash.jpg",
    title: "Taco",
    price: "$ 7.55",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt nostrum facere, recusandae molestiae itaque incidunt ducimus quo exercitationem nisi distinctio architecto quasi voluptas officia, odit iusto accusantium, eos laborum.",
  },
  {
    id: 9,
    image: "/images/kashish-lamba-p-O37cSAV_4-unsplash.jpg",
    title: "Kebab",
    price: "$ 5.99",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt nostrum facere, recusandae molestiae itaque incidunt ducimus quo exercitationem nisi distinctio architecto quasi voluptas officia, odit iusto accusantium, eos laborum.",
  },
  {
    id: 10,
    image: "/images/brooke-lark-8beTH4VkhLI-unsplash.jpg",
    title: "Ice Cream",
    price: "$ 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt nostrum facere, recusandae molestiae itaque incidunt ducimus quo exercitationem nisi distinctio architecto quasi voluptas officia, odit iusto accusantium, eos laborum.",
  },
  {
    id: 11,
    image: "/images/birgith-roosipuu-hom5fPULf4I-unsplash.jpg",
    title: "Juice",
    price: "$ 2.99",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt nostrum facere, recusandae molestiae itaque incidunt ducimus quo exercitationem nisi distinctio architecto quasi voluptas officia, odit iusto accusantium, eos laborum.",
  },
  {
    id: 12,
    image: "/images/vinicius-benedit--1GEAA8q3wk-unsplash.jpg",
    title: "Sushi",
    price: "$ 8.50",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt nostrum facere, recusandae molestiae itaque incidunt ducimus quo exercitationem nisi distinctio architecto quasi voluptas officia, odit iusto accusantium, eos laborum.",
  },
];

export default function Catalog() {
  return (
    <CatalogLayout>
      {data.map((product) => (
        <Card key={product.id}>
          <Card.Header src={product.image} />
          <Card.Body title={product.title} price={product.price}>
            {product.desc}
          </Card.Body>
          <Card.Footer>
            <Link to="/catalog-detail">
              <Button>Buy Now</Button>
            </Link>
          </Card.Footer>
        </Card>
      ))}
    </CatalogLayout>
  );
}
