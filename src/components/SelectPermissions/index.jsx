import Select from 'react-select';
import { useState } from 'react'
import { optionsList, customStyles, allOptionsSelect, allOptions } from '../../utils';

const SelectPermissions = ({selectPermissions}) => {
    const [selectOptions, setSelectedOptions] = useState([]);
    const [isAllOptions, setIsAllOptions] = useState(false);

    const handleChange = (selectedOptions) => {
        const isAllOptions = selectedOptions.some(item => {
            return item.value === 'Все'
        });
        if (isAllOptions) {
            setIsAllOptions(true);
            setSelectedOptions(allOptionsSelect);
            selectPermissions(allOptions);
        } else {
            setIsAllOptions(false); 
            setSelectedOptions(selectedOptions);
            selectPermissions(selectedOptions);
        }
        
    }

    return(
        <div>
            <Select
                options={isAllOptions ? allOptionsSelect : optionsList}
                isMulti
                onChange={handleChange}
                className="add-user__form-select"
                placeholder="Выберите права доступа"
                styles={customStyles}
                value={selectOptions}
            />
        </div>
    )
}

export default SelectPermissions