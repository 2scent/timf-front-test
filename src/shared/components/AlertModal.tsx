import Modal from 'react-modal';

import styled from '@emotion/styled';

import Box from '@mui/material/Box';

import Button from './Button';

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
          borderBottom: '1px solid #dee2e6',
        }}
      >
        <h3>{title}</h3>
        <p>{content}</p>
      </Box>
      <Box
        sx={{
          p: '1rem',
          textAlign: 'right',
        }}
      >
        <Button
          type="button"
          onClick={onClose}
        >
          확인
        </Button>
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
