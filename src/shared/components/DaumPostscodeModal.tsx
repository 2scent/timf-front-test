import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';

import Modal from 'react-modal';

import styled from '@emotion/styled';

import Box from '@mui/material/Box';

const customStyles = {
  content: {
    top: '30%',
    bottom: 'auto',
    left: '50%',
    right: 'auto',

    transform: 'translate(-50%, -50%)',

    marginRight: '-50%',
    borderRadius: '.5rem',
    width: '500px',
    padding: '0',
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
      <Box
        sx={{
          p: '1rem',
          textAlign: 'right',
        }}
      >
        <CloseButton
          type="button"
          onClick={onClose}
        >
          ❌
        </CloseButton>
      </Box>
      <Box
        sx={{
          p: '1rem',
          borderTop: '1px solid #dee2e6',
        }}
      >
        <DaumPostcodeEmbed
          onComplete={onComplete}
          onClose={onClose}
        />
      </Box>
    </Modal>
  );
}

const CloseButton = styled.button`
  border: 0;
  padding: 0;

  background-color: transparent;
  cursor: pointer;
`;
