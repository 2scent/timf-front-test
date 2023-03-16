import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export default function AlertModal({
  isOpen,
  onClose,
  title,
  content,
}: AlertModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
    >
      <button type="button" onClick={onClose}>닫기</button>
      <h3>{title}</h3>
      <p>{content}</p>
    </Modal>
  );
}
