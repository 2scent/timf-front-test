import { useModal } from 'react-modal-hook';

import AlertModal from '../components/AlertModal';

interface UseAlertModalProps {
  title: string;
  content: string;
}

export default function useAlertModal(
  { title, content }: UseAlertModalProps,
  inputs?: React.DependencyList,
) {
  const [showModal, hideModal] = useModal(() => (
    <AlertModal
      isOpen
      onClose={hideModal}
      title={title}
      content={content}
    />
  ), inputs);

  return {
    showModal,
    hideModal,
  };
}
