import Image from "next/image";
import Hero1 from "public/assests/heroCarousel/1.JPG";

function AboutTomer() {
  return (
    <>
      <div className="relative my-5 h-[500px] w-full">
        <Image
          src={Hero1}
          alt="/"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className=" blur-xs brightness-50"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4">
          <div
            className="flex items-center justify-center"
            style={{ direction: "rtl" }}
          >
            <div className="flex flex-col items-start justify-center gap-10 text-white">
              <h1 className="text-4xl font-semibold drop-shadow-sm">
                קצת עליי...
              </h1>
              <p className=" font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                illo officia, hic deleniti, accusantium officiis temporibus
                reiciendis perspiciatis error, odio esse ut corporis ipsa eum
                laboriosam praesentium iusto recusandae quibusdam consequuntur
                ullam totam unde incidunt tempore! Quaerat totam delectus minus
                quisquam optio blanditiis numquam perferendis alias et, eaque
                maiores, ratione voluptate aliquid velit. Necessitatibus autem
                quod consequatur atque ab repellendus nesciunt eaque expedita
                animi aut error et, velit explicabo repudiandae magnam placeat
                accusamus odit. Ratione quo omnis repellat, sit fugit dicta
                maxime impedit, sequi facere obcaecati est molestias nulla
                similique sint exercitationem vero provident, quibusdam
                cupiditate aut. Asperiores, modi nulla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutTomer;
