import Button from '@/components/common/UI/Button';
import User from '@/assets/images/icons/profile-user.svg';
import { useState } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PATTERN = /\D/g; // все символы, которые не числа

function Form() {
  const [name, setName] = useState<string>('Палкин Кирилл');
  const [email, setEmail] = useState<string>('test@mail.ru');
  const [phone, setPhone] = useState<string>('');
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [born, setBorn] = useState<string>('2023-01-01');

  const getInputNumbersValue = (value: string) => value.replace(PATTERN, '');

  const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;

    let inputNumbersValue = getInputNumbersValue(input.value);
    let formattedInputValue = '';
    const { selectionStart } = input;

    if (!inputNumbersValue) {
      setPhone('');
      return;
    }

    if (input.value.length !== selectionStart) {
      return;
    }

    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] === '9') {
        inputNumbersValue = `7${inputNumbersValue}`;
      }

      const firstSymbols = inputNumbersValue[0] === '8' ? '8' : '+7';
      formattedInputValue = `${firstSymbols} `;

      if (inputNumbersValue.length > 1) {
        formattedInputValue += `(${inputNumbersValue.substring(1, 4)}`;
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += `) ${inputNumbersValue.substring(4, 7)}`;
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += `-${inputNumbersValue.substring(7, 9)}`;
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += `-${inputNumbersValue.substring(9, 11)}`;
      }
    } else {
      formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
    }
    if (formattedInputValue[0] === '+' && formattedInputValue[1] === '7') {
      if (formattedInputValue.length < 18) {
        setPhoneError(true);
      } else {
        setPhoneError(false);
      }
    } else if (formattedInputValue.length < 17) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }

    setPhone(formattedInputValue);
  };

  const handlePhoneKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    if (
      event.key === 'Backspace'
      && getInputNumbersValue(input.value).length === 1
    ) {
      setPhone('');
    }

    return input;
  };

  const handlePhonePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = event.clipboardData;
    const input = event.target as HTMLInputElement;
    const inputNumbersValue = getInputNumbersValue(input.value);

    if (pasted) {
      const pastedText = pasted.getData('Text');
      if (PATTERN.test(pastedText)) {
        setPhone(inputNumbersValue);
      }
    }
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      className="w-full max-w-[358px] md:max-w-full bg-white border border-stroke-dark rounded-[20px] py-[24px]"
      onSubmit={submitHandler}
    >
      <div className="flex justify-between items-start border-b border-stroke-dark mb-[16px] pb-[16px] px-[24px]">
        <div className="w-[72px] h-[72px] basis-[72px] shrink-0 flex items-center justify-center rounded-full border border-stroke-dark">
          <User />
        </div>
        <div className="flex-1 ml-[24px]">
          <label
            htmlFor="name"
            className="profile-label no-border"
          >
            <span className="profile-label__text">Имя</span>
            <input
              id="name"
              className={`profile-label__input${!name ? ' error' : ''}`}
              type="text"
              placeholder="Введите имя"
              value={name}
              onInput={(event) => setName((event.target as HTMLInputElement).value)}
            />
            {!name && <span className="profile-label__error">Введите имя</span>}
          </label>
        </div>
      </div>
      <label
        htmlFor="email"
        className="profile-label"
      >
        <span className="profile-label__text">Почта</span>
        <input
          id="email"
          className={`profile-label__input${
            !email || !emailRegex.test(email) ? ' error' : ''
          }`}
          type="email"
          placeholder="Введите почту"
          value={email}
          onInput={(event) => setEmail((event.target as HTMLInputElement).value)}
        />
        {(!name || !emailRegex.test(email)) && (
          <span className="profile-label__error">Введите корректную почту</span>
        )}
      </label>
      <label
        htmlFor="phone"
        className="profile-label"
      >
        <span className="profile-label__text">Телефон</span>
        <input
          id="phone"
          className={`profile-label__input${phoneError ? ' error' : ''}`}
          type="tel"
          placeholder="Введите номера телефона"
          maxLength={18}
          value={phone}
          onInput={handlePhoneInput}
          onKeyDown={handlePhoneKeyDown}
          onPaste={handlePhonePaste}
        />
        {phoneError && (
          <span className="profile-label__error">
            Введите корректный номер телефона
          </span>
        )}
      </label>
      <label
        htmlFor="born"
        className="profile-label"
      >
        <span className="profile-label__text">Дата рождения</span>
        <input
          id="born"
          className={`profile-label__input${!born ? ' error' : ''}`}
          type="date"
          placeholder="Введите Имя"
          value={born}
          onInput={(event) => setBorn((event.target as HTMLInputElement).value)}
        />
        {!born && (
          <span className="profile-label__error">Введите дату рождения</span>
        )}
      </label>
      <div className="px-[24px]">
        <Button
          buttonType="submit"
          type="orange"
          text="Сохранить"
          customStyles="!w-full !h-[45px]"
        />
      </div>
    </form>
  );
}

export default Form;
