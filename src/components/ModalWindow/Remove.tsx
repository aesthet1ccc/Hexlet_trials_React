import { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import styles from './Remove.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

type RemoveProps = {
  showRemove: boolean;
  handleClose: () => void;
  onRemove: () => void;
};

const Remove: FC<RemoveProps> = ({ showRemove, handleClose, onRemove }) => {
  return (
    <>
      <Modal show={showRemove} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Remove</Modal.Title>
        </Modal.Header>
        <Modal.Footer className={styles.footer_remove_block}>
          <Button
            variant="danger"
            onClick={() => {
              onRemove();
              handleClose();
            }}
          >
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Remove;
