import React from 'react';
import styles from '../DynamicForm/DynamicForm.module.css';

interface fieldState {
  id: number;
  text: string;
}

const DynamicForm: React.FC = () => {
  const [fieldList, setfieldList] = React.useState<fieldState[]>([{ id: 1, text: '' }]);

  const handleFieldAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setfieldList((prevFieldValue) => {
      const lastId: number =
        prevFieldValue.length > 0 ? prevFieldValue[prevFieldValue.length - 1]?.id || 0 : 0;
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
    <div className={styles.root}>
      <form>
        <div className={styles.form}>
          <label>Dynamic-Form</label>
          {fieldList.map((field) => (
            <div key={field.id}>
              <h2 className={styles.user_index}>Field {field.id}: </h2>
              <div className={styles.users_block}>
                <div className={styles.first_input_block}>
                  <input
                    name="text"
                    type="text"
                    required
                    value={field.text}
                    onChange={(event) => handleFieldChange(event, field.id)}
                    placeholder={`Введите значение в поле ${field.id}`}
                  />
                </div>
                <div className={styles.remove_button_block}>
                  <button
                    type="button"
                    className={styles.button_remove}
                    onClick={() => RemoveFieldAdd(field.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          {fieldList.length < 5 && (
            <button type="button" className={styles.button_add} onClick={handleFieldAdd}>
              Add field
            </button>
          )}
          <div className={styles.list_users_block}>
            <h2>Список пользователей</h2>
            {fieldList.map((field, id) => (
              <ul key={field.id}>
                <li>
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
