import { stillImages } from "@/config";
import Image from "next/image";
import tomerImage from "public/assets/AboutTomer.webp";

function AboutTomer() {
  return (
    <>
      <div className="relative mt-5 flex w-full items-center justify-center">
        <Image
          src={stillImages.at(6)}
          alt="/"
          width={1920}
          height={1080}
          className=" absolute left-0 top-0 -z-10 h-full object-cover object-center brightness-50"
          loading="lazy"
        />
        <div
          className="container flex max-w-5xl flex-col items-center justify-center gap-8 p-10 lg:flex-row"
          style={{ direction: "rtl" }}
        >
          <div className="flex flex-col items-start justify-center gap-2 text-white">
            <h2 className="text-3xl font-bold drop-shadow-stroke">
              קצת עליי...
            </h2>
            <h1 className="text-4xl font-semibold text-main drop-shadow-stroke">
              Tomer Aizik
            </h1>
            <p className="mt-4 text-lg drop-shadow-stroke">
              בתחום התקשורת והמדיה אני עוסק מספר שנים, כיום גם כסטודנט. דרכי
              התחילה בזמן התיכון במגמת תקשורת והתמקצעה במהלך השנים, החל מהשירות
              הצבאי כצלם ועורך אותו סיימתי עם ארבע תעודות הצטיינות, כשברור שזה
              הקו בו אמשיך לעסוק מעתה ואילך. בהמשך, זכיתי לפגוש ולעבוד עם חברות
              ואנשים רבים לאורך השנים על מגוון סרטונים ויצירות שאת חלקם ניתן
              לראות באתר. מחכה לעבוד גם איתכם!
            </p>
          </div>
          <Image
            src={tomerImage}
            alt="/"
            width={750}
            height={750}
            className=" w-[90vw] max-w-[350px] border border-black drop-shadow-[0px_2px_5px_rgba(0,0,0)] lg:w-[20vw] lg:min-w-[350px] lg:max-w-none"
          />
        </div>
      </div>
    </>
  );
}

export default AboutTomer;
