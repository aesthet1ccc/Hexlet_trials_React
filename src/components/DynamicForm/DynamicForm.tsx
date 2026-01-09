import React, { useState, FC } from 'react';
import styles from '../DynamicForm/DynamicForm.module.css';
import DynamicFormField from './DynamicFormField';

export interface FieldState {
  id: number;
  text: string;
}

const DynamicForm: FC = () => {
  const [fieldList, setfieldList] = useState<FieldState[]>([{ id: 1, text: '' }]);

  const handleFieldAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setfieldList((prevFieldValue) => {
      const prevValueLen = prevFieldValue.length;
      const lastId: number = prevValueLen > 0 ? prevFieldValue[prevValueLen - 1]?.id || 0 : 0;
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
    <div className={styles.dynamic_Form}>
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
            <h2 className={styles.user_list_title}>Список пользователей</h2>
            {fieldList.map((field, id) => (
              <ul key={field.id}>
                <li className={styles.list_item}>
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
