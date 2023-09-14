import Image from "next/image";
import Hero1 from "public/assests/heroCarousel/1.JPG";

function AboutTomer() {
  return (
    <>
      <div className="relative mt-5 flex h-[500px] w-full items-center justify-center">
        <Image
          src={Hero1}
          alt="/"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className=" absolute left-0 top-0 -z-10 brightness-50"
        />
        <div
          className="container flex items-center justify-center p-5"
          style={{ direction: "rtl" }}
        >
          <div className="flex flex-col items-start justify-center gap-2 text-white">
            <h2 className="text-3xl font-bold drop-shadow-md">קצת עליי...</h2>
            <h1 className="text-4xl font-bold text-main drop-shadow-md">
              Cashiyado
            </h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              illo officia, hic deleniti, accusantium officiis temporibus
              reiciendis perspiciatis error, odio esse ut corporis ipsa eum
              laboriosam praesentium iusto recusandae quibusdam consequuntur
              ullam totam unde incidunt tempore! Quaerat totam delectus minus
              quisquam optio blanditiis numquam perferendis alias et, eaque
              maiores, ratione voluptate aliquid velit. Necessitatibus autem
              quod consequatur atque ab repellendus nesciunt eaque expedita
              animi aut error et, velit explicabo repudiandae magnam placeat
              accusamus odit. Ratione quo omnis repellat, sit fugit dicta maxime
              impedit, sequi facere obcaecati est molestias nulla similique sint
              exercitationem vero provident, quibusdam cupiditate aut.
              Asperiores, modi nulla.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutTomer;
