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

interface DataModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}

export default function DataModal({
  isOpen,
  onClose,
  data,
}: DataModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
    >
      <button type="button" onClick={onClose}>닫기</button>
      <p>{data}</p>
    </Modal>
  );
}
