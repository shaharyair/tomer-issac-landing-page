function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="flex h-12 w-full items-center justify-center gap-3 bg-navbarBlack font-thin text-white"
      style={{ direction: "rtl" }}
    >
      <h1>נבנה על ידי</h1>
      <h1>
        <a
          className="text-main brightness-125"
          href="https://api.whatsapp.com/send?phone=972586520441"
        >
          <u>Shahar Yair</u>
        </a>
      </h1>
      <h1>{currentYear} &copy; </h1>
    </div>
  );
}

export default Footer;
