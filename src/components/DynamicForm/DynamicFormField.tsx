import { FC } from 'react';
import styles from '../DynamicForm/DynamicForm.module.css';
import { FieldState } from './DynamicForm';

type DynamicFormFieldProps = {
  field: FieldState;
  handleFieldChange: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  RemoveFieldAdd: (id: number) => void;
};

const DynamicFormField: FC<DynamicFormFieldProps> = ({
  field,
  handleFieldChange,
  RemoveFieldAdd,
}) => {
  return (
    <div key={field.id}>
      <h2 className={styles.user_index}>Field {field.id}: </h2>
      <div className={styles.users_block}>
        <div className={styles.first_input_block}>
          <input
            className={styles.input_field}
            name={`Field ${field.id}`}
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
  );
};

export default DynamicFormField;
