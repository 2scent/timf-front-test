import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';

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

interface DaumPostscodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete?: (address: Address) => void;
}

export default function DaumPostscodeModal({
  isOpen,
  onClose,
  onComplete,
}: DaumPostscodeModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
    >
      <button type="button" onClick={onClose}>닫기</button>
      <DaumPostcodeEmbed
        onComplete={onComplete}
        onClose={onClose}
      />
    </Modal>
  );
}
