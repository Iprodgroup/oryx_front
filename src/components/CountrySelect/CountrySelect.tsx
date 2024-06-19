import styles from './styles.module.sass';

import Select from 'react-select';
import Image from 'next/image';

const options = [
  { value: 'usa', label: 'США', image: '/usa.svg' },
  { value: 'eu', label: 'Европа', image: '/eu.svg' },
];

const CountrySelect = () => {
  return (
    <Select
      options={options}
      formatOptionLabel={(country) => (
        <div className={styles.select__option}>
          <Image src={country.image} alt='' width={28} height={28} />
          <span>{country.label}</span>
        </div>
      )}
      defaultValue={{ value: 'usa', label: 'США', image: '/usa.svg' }}
      isSearchable={false}
      classNames={{
        control: () => styles.select,
        singleValue: () => styles.select__placeholder,
      }}
      components={{ IndicatorSeparator: () => null }}
      isDisabled
    />
  );
};

export default CountrySelect;
