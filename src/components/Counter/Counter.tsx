import React from 'react';

import styles from './Counter.module.css';
import Button from 'react-bootstrap/Button';
import { useState, FC } from 'react';
import { useTranslation } from 'react-i18next';

const Counter: FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const { i18n, t } = useTranslation();

  const ChangeLocalization = () => {
    const switchLang = i18n.language === 'ru' ? 'eng' : 'ru';
    setIsSelected(!isSelected);
    i18n.changeLanguage(switchLang);
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
            onClick={ChangeLocalization}
            variant={isSelected ? 'primary' : 'outline-info'}
          >
            English
          </Button>
          <Button
            variant={!isSelected ? 'primary' : 'outline-info'}
            className={styles.button_switch_loc}
            onClick={ChangeLocalization}
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
