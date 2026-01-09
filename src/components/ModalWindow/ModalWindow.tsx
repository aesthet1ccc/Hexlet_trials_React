import React, { useState, FC } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import styles from './ModalWindow.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './Add';
import Rename from './Rename';
import Remove from './Remove';

const ModalWindow: FC = () => {
  const [task, setTask] = useState<string[]>([]);
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const [showRename, setShowRename] = useState<boolean>(false);
  const [showRemove, setShowRemove] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [removeIndex, setRemoveIndex] = useState<number | null>(null);

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  const handleCloseRename = () => setShowRename(false);
  const handleShowRename = (index: number) => {
    setShowRename(true);
    setEditIndex(index);
  };
  const onRename = (newValue: string) => {
    if (editIndex !== null) {
      const updateTask = [...task];
      updateTask[editIndex] = newValue;
      setTask(updateTask);
    }
  };

  const handleShowRemove = (index: number) => {
    setRemoveIndex(index);
    setShowRemove(true);
  };
  const handleCloseRemove = () => setShowRemove(false);
  const confirmDelete = () => {
    if (removeIndex !== null) {
      setTask(task.filter((_, i) => i !== removeIndex));
      setRemoveIndex(null);
    }
  };

  return (
    <div className={styles.modal_window_main}>
      <h1 className={styles.modal_window_title}>Modal Window task</h1>
      <Button type="button" className="btn btn-secondary" onClick={handleShowAdd}>
        add
      </Button>
      <div className={styles.list_block}>
        {task.map((value, index) => (
          <div className={styles.value_list} key={index}>
            <p className={styles.input_value}>{value}</p>
            <Button
              type="button"
              className="btn btn-primary"
              onClick={() => handleShowRename(index)}
            >
              rename
            </Button>
            <Button
              type="button"
              className="btn btn-primary"
              onClick={() => handleShowRemove(index)}
            >
              remove
            </Button>
          </div>
        ))}
      </div>
      <Rename
        showRename={showRename}
        handleClose={handleCloseRename}
        initialValue={editIndex !== null ? task[editIndex] : ''}
        onRename={onRename}
      />
      <Remove showRemove={showRemove} handleClose={handleCloseRemove} onRemove={confirmDelete} />
      <Add showAdd={showAdd} handleClose={handleCloseAdd} onAdd={setTask} />
    </div>
  );
};

export default ModalWindow;
