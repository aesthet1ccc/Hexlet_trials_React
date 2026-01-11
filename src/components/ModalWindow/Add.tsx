import React, { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import styles from './Add.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

type AddProps = {
  showAdd: boolean;
  handleClose: () => void;
  onAdd: React.Dispatch<React.SetStateAction<string[]>>;
};

const Add: FC<AddProps> = ({ showAdd, handleClose, onAdd }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAdd((prev) => [...prev, inputValue]);
    setInputValue('');
    handleClose();
  };

  return (
    <>
      <Modal show={showAdd} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group className={styles.form_add}>
            <Form.Label>Add a task</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
          </Form.Group>
        </Form>
        <Modal.Footer className={styles.footer_add_block}>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
