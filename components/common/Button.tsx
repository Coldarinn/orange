interface IButton {
  type: String,
  text: String,
  customStyles?: String
}

function Button({ type, text, customStyles }: IButton) {
  return (
    <button
      className={`px-[32px] py-[16px] rounded-[64px] transition-opacity duration-300 ease-linear hover:opacity-70 ${type === 'white' ? 'bg-white' : 'bg-brand-700'} ${customStyles}`}
      type="button"
    >
      {text}
    </button>
  );
}

export default Button;
