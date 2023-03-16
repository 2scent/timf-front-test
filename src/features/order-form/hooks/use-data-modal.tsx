import { useModal } from 'react-modal-hook';

import DataModal from '../components/DataModal';

interface UseDataModalProps {
  data: any;
}

export default function useDataModal(
  { data }: UseDataModalProps,
  inputs?: React.DependencyList,
) {
  const [showModal, hideModal] = useModal(() => (
    <DataModal
      isOpen
      onClose={hideModal}
      data={data}
    />
  ), inputs);

  return {
    showModal,
    hideModal,
  };
}
