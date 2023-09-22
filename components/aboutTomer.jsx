import Image from "next/legacy/image";
import { stillImages } from "@/config";

function AboutTomer() {
  return (
    <>
      <div className="relative mt-5 flex h-[60vh] max-h-[500px] w-full items-center justify-center">
        <Image
          src={stillImages.at(9)}
          alt="/"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className=" absolute left-0 top-0 -z-10 brightness-50"
        />
        <div
          className="container flex max-w-5xl items-center justify-center p-10"
          style={{ direction: "rtl" }}
        >
          <div className="flex flex-col items-start justify-center gap-2 text-white">
            <h2 className="drop-shadow-stroke text-3xl font-bold">
              קצת עליי...
            </h2>
            <h1 className="drop-shadow-stroke text-4xl font-semibold text-main">
              Tomer Aizik
            </h1>
            <p className="drop-shadow-stroke mt-4 text-lg">
              בתחום התקשורת והמדיה אני עוסק מספר שנים, כיום גם כסטודנט. דרכי
              התחילה בזמן התיכון במגמת תקשורת והתמקצעה במהלך השנים, החל מהשירות
              הצבאי כצלם ועורך אותו סיימתי עם ארבע תעודות הצטיינות, כשברור שזה
              הקו בו אמשיך לעסוק מעתה והילך. בהמשך, זכיתי לפגוש ולעבוד עם חברות
              ואנשים רבים לאורך השנים על מגוון סרטונים ויצירות שאת חלקם ניתן
              לראות באתר. מחכה לעבוד גם איתכם!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutTomer;
