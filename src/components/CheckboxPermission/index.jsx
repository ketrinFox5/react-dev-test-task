import { useEffect, useState } from 'react';

const CheckboxPermission = ({item, checkboxChange, userPermissions, isAllCheckbox}) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (e) => {
        console.log(e)
        const checkboxData = {value: item.value, checked: e.target.checked}
        checkboxChange(checkboxData);
        setIsChecked(e.target.checked);
    }
    const isCheckedPermission = () => {
        const isHasPermission = userPermissions.some((permission) => {
            return permission === item.value;
        });
        setIsChecked(isHasPermission || isAllCheckbox);
    }
    const isDisabled = () => {
        if (item.value === "Все") {
            return false;
        } 
        return isAllCheckbox;
    }
    useEffect(() => {
        isCheckedPermission();
    }, [isAllCheckbox]);

    return(
        <div className="permission__edit">
            <label htmlFor={item.value}>
                <input 
                    id={item.value}
                    type="checkbox"
                    name={item.name}
                    onChange={handleCheckboxChange}
                    checked={isChecked || isAllCheckbox}
                    disabled={isDisabled()}
                />
                {item.value}
            </label>
        </div>
    )
}

export default CheckboxPermission