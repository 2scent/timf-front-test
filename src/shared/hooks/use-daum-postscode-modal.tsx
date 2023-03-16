import { Address } from 'react-daum-postcode';

import { useModal } from 'react-modal-hook';

import DaumPostscodeModal from '../components/DaumPostscodeModal';

interface UseDaumPostcodeModalProps {
  onComplete?: (address: Address) => void;
}

export default function useDaumPostcodeModal({ onComplete }: UseDaumPostcodeModalProps = {}) {
  const [showModal, hideModal] = useModal(() => (
    <DaumPostscodeModal
      isOpen
      onClose={hideModal}
      onComplete={onComplete}
    />
  ));

  return {
    showModal,
    hideModal,
  };
}
