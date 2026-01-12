import styles from './Counter.module.css';
import Button from 'react-bootstrap/Button';
import { useState, FC } from 'react';
import { useTranslation } from 'react-i18next';

type languages = 'ru' | 'en';

const Counter: FC = () => {
  const [count, setCount] = useState(0);
  const { i18n, t } = useTranslation();

  const ChangeLocalization = (lang: languages) => {
    i18n.changeLanguage(lang);
  };

  const AddCountClicks = () => {
    setCount((count) => count + 1);
  };

  const ResetCounter = () => {
    setCount(0);
  };
  return (
    <>
      <div className={styles.counter_block}>
        <div className={styles.local_block}>
          <Button
            className={styles.button_switch_loc}
            onClick={() => ChangeLocalization('en')}
            variant={i18n.language === 'en' ? 'primary' : 'outline-info'}
          >
            English
          </Button>
          <Button
            variant={i18n.language === 'ru' ? 'primary' : 'outline-info'}
            className={styles.button_switch_loc}
            onClick={() => ChangeLocalization('ru')}
          >
            Русский
          </Button>
        </div>
        <Button onClick={AddCountClicks} className={styles.button_counter_clicks} variant="info">
          {count} {t('clicks')}
        </Button>
        <Button className={styles.button_reset} variant="warning" onClick={ResetCounter}>
          {t('reset')}
        </Button>
      </div>
    </>
  );
};

export default Counter;
