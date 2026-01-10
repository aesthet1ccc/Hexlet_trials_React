import React, { FC, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import styles from './Rename.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

type RenameProps = {
  showRename: boolean;
  handleClose: () => void;
  onRename: (value: string) => void;
  initialValue: string;
};

const Rename: FC<RenameProps> = ({ showRename, handleClose, initialValue, onRename }) => {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    if (showRename) {
      setInputValue(initialValue);
    }
  }, [showRename, initialValue]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onRename(inputValue);
    handleClose();
  };

  return (
    <>
      <Modal show={showRename} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Rename</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group className={styles.rename_input}>
            <Form.Control
              type="text"
              autoFocus
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
          </Form.Group>
        </Form>
        <Modal.Footer className={styles.footer_rename_block}>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Rename;
