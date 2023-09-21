import Button from "./button";

function Dialog({ message, onClick }) {
  return (
    <div
      className="fixed left-0 top-0 z-[999] flex h-screen w-screen animate-fade-in items-center justify-center bg-navbarBlack/50 text-center backdrop-blur-[5px]"
      style={{ direction: "rtl" }}
    >
      <div className=" flex h-[25vh] max-h-[200px] min-h-[150px] w-[75vw] min-w-[250px] max-w-[350px] flex-col items-center justify-evenly rounded-lg border border-white bg-navbarBlack p-5 drop-shadow-md">
        <p className=" text-lg font-thin text-white lg:text-xl">{message}</p>
        <Button onClick={onClick}>Close</Button>
      </div>
    </div>
  );
}

export default Dialog;
