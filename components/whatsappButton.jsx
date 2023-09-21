import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsappButton() {
  return (
    <>
      <a href="https://api.whatsapp.com/send?phone=972507677702">
        <div className=" hover fixed left-4 top-[calc(100%-1rem)]  z-10 -translate-y-full rounded-full bg-main p-3.5 text-white drop-shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white hover:text-main">
          <FaWhatsapp className=" text-2xl lg:text-4xl" />
        </div>
      </a>
    </>
  );
}
