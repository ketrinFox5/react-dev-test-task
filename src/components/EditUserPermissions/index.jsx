import { useEffect, useState, useRef } from 'react'
import { allOptions, optionsList } from '../../utils';
import CheckboxPermission from '../CheckboxPermission';

const EditUserPermissions = ({checkedPermissions, userPermissions, onCloseModal}) => {
    const [checkedOptions, setCheckedOptions] = useState(userPermissions);
    const [isAllCheckbox, setIsAllCheckbox] = useState(userPermissions.length === allOptions.length);
    const [isOpen, setIsOpen] = useState(true);
    const componentRef = useRef(null); 

    const checkboxChange = (data) => {
        let updatePermissions = [];
        
            if (data.checked) {
                if (data.value === 'Все') {
                    updatePermissions = allOptions.map(item => item.value);
                    setIsAllCheckbox(true);
                } else {
                    updatePermissions = [...checkedOptions, data.value];
                }
            } else {
                if (data.value === 'Все') {
                    setIsAllCheckbox(false);
                    updatePermissions = [];
                } else {
                    updatePermissions = checkedOptions.filter(item=> item !== data.value);
                }
            }
        setCheckedOptions(updatePermissions);
        checkedPermissions(updatePermissions);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (componentRef.current && !componentRef.current.contains(event.target)) {
            onCloseModal();
        } };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onCloseModal]);
    
    return(
        <>
            {isOpen && 
                <div className="user__edit-permissions modal" ref={componentRef}>
                    {optionsList.map(option => {
                        return <CheckboxPermission isAllCheckbox={isAllCheckbox} userPermissions={userPermissions} item={option} checkboxChange={checkboxChange} key={option.value}/>
                    })}
                </div>
            }
        </>
    )
}

export default EditUserPermissions