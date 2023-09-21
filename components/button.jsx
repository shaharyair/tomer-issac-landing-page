function Button(props) {
  const { onClick, disabled, className, type, children } = props;

  return (
    <>
      <button
        className={`${className} rounded-md bg-main px-5 py-2.5 transition-all  duration-300 hover:bg-main/60 disabled:bg-main/50 lg:m-0`}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
