import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import Card from "../organisms/Card";

export default function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <div className="flex justify-center items-center w-full h-screen bg-[url('/images/annie-spratt-OIuCXxx08yg-unsplash.jpg')] bg-cover bg-fixed">
        <div className="flex justify-center items-center flex-col w-full h-screen bg-black/70 backdrop-blur-sm px-56">
          <h1 className="text-7xl font-bold uppercase text-white leading-[100px]">
            Build Your Future
          </h1>
          <p className="text-3xl font-semibold text-gray-300 tracking-wide text-center">
            Education should not only teach knowledge, but should also be able
            to stimulate development in a better direction.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col justify-center items-center w-full py-20 gap-y-20">
        <div className="flex justify-center items-center w-full">
          <h1 className="text-5xl font-bold border-b-4 border-gray-500 pb-4">
            With Educademy
          </h1>
        </div>
        <Card>
          <Card.Image src="/images/ht-chong-chzdBq0vlRg-unsplash.jpg" />
          <Card.Body title="Learning Becomes Fun.">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            harum provident dicta ex veniam? Distinctio delectus quis
            blanditiis, nobis dolores fugit quia eos itaque. Corrupti
            consectetur quas illo esse veritatis quam velit nulla autem libero,
            et mollitia quidem asperiores quo vitae ab tempora provident
            cupiditate soluta magni architecto sed? Quasi.
          </Card.Body>
        </Card>

        <Card row="flex-row-reverse">
          <Card.Image src="/images/cdc-gsRi9cWCIB0-unsplash.jpg" />
          <Card.Body title="Interactive Learning.">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            harum provident dicta ex veniam? Distinctio delectus quis
            blanditiis, nobis dolores fugit quia eos itaque. Corrupti
            consectetur quas illo esse veritatis quam velit nulla autem libero,
            et mollitia quidem asperiores quo vitae ab tempora provident
            cupiditate soluta magni architecto sed? Quasi.
          </Card.Body>
        </Card>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
