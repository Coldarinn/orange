import Image from 'next/image';
import Modal from '../common/UI/Modal';

interface IAddReviewsModal {
  isVisible: boolean,
  picture: string,
  onClose: () => void,
}

function ReviewImageModal({
  isVisible, picture, onClose,
}: IAddReviewsModal) {
  return (
    <Modal
      isVisible={isVisible}
      onClose={onClose}
    >
      <div className="w-[400px] h-[400px] bg-white p-[32px] rounded-[20px]">
        <Image
          src={picture}
          alt="Изображение товара"
          width={0}
          height={0}
          className="w-full object-contain"
        />
      </div>
    </Modal>
  );
}

export default ReviewImageModal;
