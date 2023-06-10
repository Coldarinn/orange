import Modal from '../common/UI/Modal';

interface IAuthModal {
  isVisible: boolean,
  onClose: () => void,
}

function AuthModal({ isVisible, onClose }: IAuthModal) {
  return (
    <Modal
      isVisible={isVisible}
      onClose={onClose}
    >
      sadas
    </Modal>
  );
}

export default AuthModal;
