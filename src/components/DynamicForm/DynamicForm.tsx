import React, { useState, FC } from 'react';
import styles from '../DynamicForm/DynamicForm.module.css';
import DynamicFormField from './DynamicFormField';

export interface fieldState {
  id: number;
  text: string;
}

const DynamicForm: FC = () => {
  const [fieldList, setfieldList] = useState<fieldState[]>([{ id: 1, text: '' }]);

  const handleFieldAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setfieldList((prevFieldValue) => {
      const prevValue =
        prevFieldValue.length > 0 ? prevFieldValue[prevFieldValue.length - 1]?.id || 0 : 0;
      const lastId: number = prevValue;
      const nextId: number = lastId + 1;
      return [...prevFieldValue, { id: nextId, text: '' }];
    });
  };

  const RemoveFieldAdd = (id: number) => {
    setfieldList((prevFieldValue) => prevFieldValue.filter((field) => field.id !== id));
  };

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const { name, value } = event.target;
    setfieldList((prevFieldValue) =>
      prevFieldValue.map((field) => {
        if (field.id === id) {
          return { ...field, [name]: value };
        }
        return field;
      }),
    );
  };

  return (
    <div className={styles.Dynamic_Form}>
      <h1>Dynamic-Form task</h1>
      <form>
        <div className={styles.form}>
          <label className={styles.label_title}>Dynamic-Form</label>
          {fieldList.map((field) => (
            <DynamicFormField
              key={field.id}
              field={field}
              handleFieldChange={handleFieldChange}
              RemoveFieldAdd={RemoveFieldAdd}
            />
          ))}
          {fieldList.length < 5 && (
            <button type="button" className={styles.button_add} onClick={handleFieldAdd}>
              Add field
            </button>
          )}
          <div className={styles.list_users_block}>
            <h2 className={styles.h2_user_list}>Список пользователей</h2>
            {fieldList.map((field, id) => (
              <ul key={field.id}>
                <li className={styles.list_users}>
                  Field {field.id}: {field.text}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;
