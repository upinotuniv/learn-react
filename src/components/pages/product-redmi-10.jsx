import React from "react";
import ProductLayout from "../templates/ProductLayout";
import Product from "../organisms/Product";
import ReviewCard from "../organisms/ReviewCard";
import Heading from "../atoms/Heading";
import message from "../../service/message.json";
import product from "../../service/product.json";

export default function ProductRedmi() {
  const reviewData = message;
  const productData = product;

  return (
    <ProductLayout>
      <Heading title="DETAIL PRODUCT" />

      <Product>
        <Product.DetailProduct
          row="flex-row-reverse"
          image="bg-redmiOne"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempore sint ipsa officia? Sunt accusantium qui beatae, dignissimos, nesciunt minima architecto officiis, perferendis deleniti earum dolore accusamus nihil! Mollitia architecto, sit dolor ut repellendus eos natus, sint qui odit quod porro nisi consequatur iste perspiciatis fugiat nesciunt ab rem? Totam odit nulla deserunt rerum praesentium aliquam voluptatem, recusandae blanditiis necessitatibus, similique facere excepturi tenetur cum, maiores provident repudiandae ullam labore quae! Iste, similique cumque totam ad at suscipit voluptas, esse, quaerat sunt quis in vel cupiditate necessitatibus reprehenderit? Dolore accusantium consequatur dicta commodi veniam magni eius, excepturi velit impedit aperiam?"
        />
        <Product.DetailProduct
          row="flex-row"
          image="bg-redmiTwo"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempore sint ipsa officia? Sunt accusantium qui beatae, dignissimos, nesciunt minima architecto officiis, perferendis deleniti earum dolore accusamus nihil! Mollitia architecto, sit dolor ut repellendus eos natus, sint qui odit quod porro nisi consequatur iste perspiciatis fugiat nesciunt ab rem? Totam odit nulla deserunt rerum praesentium aliquam voluptatem, recusandae blanditiis necessitatibus, similique facere excepturi tenetur cum, maiores provident repudiandae ullam labore quae! Iste, similique cumque totam ad at suscipit voluptas, esse, quaerat sunt quis in vel cupiditate necessitatibus reprehenderit? Dolore accusantium consequatur dicta commodi veniam magni eius, excepturi velit impedit aperiam?"
        />
        <Product.DetailProduct
          row="flex-row-reverse"
          image="bg-redmiThree"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempore sint ipsa officia? Sunt accusantium qui beatae, dignissimos, nesciunt minima architecto officiis, perferendis deleniti earum dolore accusamus nihil! Mollitia architecto, sit dolor ut repellendus eos natus, sint qui odit quod porro nisi consequatur iste perspiciatis fugiat nesciunt ab rem? Totam odit nulla deserunt rerum praesentium aliquam voluptatem, recusandae blanditiis necessitatibus, similique facere excepturi tenetur cum, maiores provident repudiandae ullam labore quae! Iste, similique cumque totam ad at suscipit voluptas, esse, quaerat sunt quis in vel cupiditate necessitatibus reprehenderit? Dolore accusantium consequatur dicta commodi veniam magni eius, excepturi velit impedit aperiam?"
        />
      </Product>

      <div className="flex flex-col justify-center items-center w-full mb-20">
        <Heading title="REVIEW" />

        <div className="flex flex-col w-full px-20 space-y-6 py-10">
          <div className="flex justify-start items-center w-full text-base">
            <p className="text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              tempore sint ipsa officia? Sunt accusantium qui beatae,
              dignissimos, nesciunt minima architecto officiis, perferendis
              deleniti earum dolore accusamus nihil! Mollitia architecto, sit
              dolor ut repellendus eos natus, sint qui odit quod porro nisi
              consequatur iste perspiciatis fugiat nesciunt ab rem? Totam odit
              nulla deserunt rerum praesentium aliquam voluptatem, recusandae
              blanditiis necessitatibus, similique facere excepturi tenetur cum,
              maiores provident repudiandae ullam labore quae! Iste, similique
              cumque totam ad at suscipit voluptas, esse, quaerat sunt quis in
              vel cupiditate necessitatibus reprehenderit? Dolore accusantium
              consequatur dicta commodi veniam magni eius, excepturi velit
              impedit aperiam?
            </p>
          </div>
        </div>

        <div className="flex w-full px-20 space-x-24">
          {reviewData.map((review) => (
            <ReviewCard key={review.id}>
              <ReviewCard.Head image={review.image} />
              <ReviewCard.Body title={review.user}>
                {review.message}
              </ReviewCard.Body>
            </ReviewCard>
          ))}
        </div>
      </div>
    </ProductLayout>
  );
}
