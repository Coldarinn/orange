import Star from '@/assets/images/icons/bigStar.svg';
import Photo from '@/assets/images/icons/photo.svg';
import Cross from '@/assets/images/icons/cross.svg';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { addAlert } from '@/store/slicers/alertsSlice';
import { useAppDispatch } from '@/hooks/store';
import EndpointNames from '@/config/api';
import $api from '@/services/api';
import Modal from '../common/UI/Modal';
import Button from '../common/UI/Button';

interface IAddReviewsModal {
  isVisible: boolean,
  productId: string,
  productName: string,
  onClose: () => void,
  getReviews: () => void,
}

const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.svg', '.webp', '.hdr', '.bmp'];
const MAX_IMAGES = 6;

function AddReviewsModal({
  isVisible, productId, productName, onClose, getReviews,
}: IAddReviewsModal) {
  const dispatch = useAppDispatch();

  const [selectedStar, setSelectedStar] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  const [images, setImages] = useState<string[]>([]); // Состояние для хранения загруженных изображений
  const fileInputRef = useRef<HTMLInputElement>(null); // Ссылка на элемент input для выбора файлов

  // Обработчик события "drop" при перетаскивании файла на область
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    uploadImages(e.dataTransfer.files);
  };

  // Обработчик изменения input для выбора файлов
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      uploadImages(files);
    }
  };

  // Загрузка изображений
  const uploadImages = async (files: FileList) => {
    const newImages = [...images];

    for (let i = 0; i < files.length && newImages.length < MAX_IMAGES; i++) {
      const file = files[i];
      if (isValidImage(file)) { // Проверка, является ли файл изображением
        const base64Image = await readFileAsDataURL(file); // Преобразование изображения в base64
        if (!newImages.includes(base64Image)) { // Проверка на уникальность изображения
          newImages.push(base64Image); // Добавление изображения в массив
        }
      }
    }

    setImages(newImages); // Обновление состояния с новыми изображениями
  };

  // Проверка, является ли файл допустимым изображением
  const isValidImage = (file: File): boolean => {
    const extension = file.name.split('.').pop()?.toLowerCase();
    return (
      SUPPORTED_EXTENSIONS.includes(file.type)
      || (extension && SUPPORTED_EXTENSIONS.includes(`.${extension}`))
    );
  };

  // Асинхронное чтение файла как URL Data
  const readFileAsDataURL = (file: File): Promise<string> => new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.readAsDataURL(file);
  });

  // Обработчик удаления изображения
  const handleImageDelete = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages); // Обновление состояния с удаленным изображением
  };

  const submitHandler = () => {
    if (!selectedStar) {
      dispatch(addAlert({ id: Date.now(), type: 'error', text: 'Укажите рейтинг товара' }));
    } else if (!message) {
      dispatch(addAlert({ id: Date.now(), type: 'error', text: 'Введите отзыв о товаре' }));
    } else {
      const body = {
        product_id: productId,
        stars: selectedStar,
        message,
        pictures: images,
      };
      $api.post(EndpointNames.FEEDBACK, body)
        .then(() => {
          getReviews();
          onClose();
        });
    }
  };

  return (
    <Modal
      isVisible={isVisible}
      onClose={onClose}
    >
      <div className="w-[594px] bg-white p-[32px] rounded-[20px]">
        <div className="text-text-900 text-[32px] ubuntu font-bold mb-[12px]">
          Отзыв о товаре
        </div>
        <div className="text-text-900 text-[20px] pt-sans mb-[50px]">
          { productName }
        </div>
        <div className="flex items-center gap-[20px] mb-[30px]">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star
              key={idx}
              className={`w-[43px] h-[40px] cursor-pointer ${idx + 1 <= selectedStar ? 'fill-stars' : 'fill-text-100'} ${idx > 0 && 'ml-[6px]'}`}
              onClick={() => setSelectedStar(idx + 1)}
            />
          ))}
        </div>
        <textarea
          id="name"
          className={`w-full min-h-[100px] rounded-[24px] outline-none bg-brand-200 border border-stroke-brand placeholder:text-text-600 py-[16px] px-[28px] resize-y${!message ? ' error' : ''}`}
          placeholder="Введите отзыв"
          value={message}
          onInput={(event) => setMessage((event.target as HTMLInputElement).value)}
        />
        {!message && <span className="text-red text-sm mt-[4px]">Введите отзыв</span>}
        <div className="my-[20px] text-text-800 font-medium">
          Фотографии
        </div>
        <div
          className="border !border border-text-500 hover:border-text-800 p-[30px] rounded-[28px] w-full mb-[20px]"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="text-text-400 mb-[16px] text-center">
            Можно добавить до 6 штук
          </div>
          <label className="flex items-center w-fit mx-auto cursor-pointer py-[12px] px-[20px] border-2 border-text-700 rounded-[24px] gap-[8px]">
            <Photo />
            Загрузить
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              multiple
              onChange={handleFileInputChange}
            />
          </label>
        </div>
        <div className="flex flex-wrap gap-[10px] mb-[20px]">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex items-center justify-center relative w-[80px] h-[80px] p-[4px] rounded-lg duration-200 border border-white hover:border-stroke-dark"
            >
              <Image
                src={image}
                alt={`Изображение товара ${index}`}
                width={0}
                height={0}
                className="w-full object-contain"
              />
              <Cross
                className="absolute top-[4px] right-[4px] cursor-pointer w-[20px] h-[20px] text-text-500"
                onClick={() => handleImageDelete(index)}
                title={`удалить изображение товара ${index}`}
              />
            </div>
          ))}
        </div>
        <Button
          type="orange"
          text="Оставить отзыв"
          customStyles="w-full h-[52px]"
          onClick={submitHandler}
        />
      </div>
    </Modal>
  );
}

export default AddReviewsModal;
