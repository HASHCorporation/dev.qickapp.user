import React, { useState } from "react";
import PropTypes from 'prop-types';
// import { ErrorMessage, useField } from 'formik';
import './inputstyle.css';

const CustomSelect = ({ label, data }) => {
    const [selectData] = useState(data);
    const [selectedData, updateSelectedData] = useState("");
    console.log(data);
    function handleChange(event) {
        updateSelectedData(event.target.value);
        if (data.onSelectChange) data.onSelectChange(selectedData);
    }
    function handleOnBlur(){

    }
    const options = selectData.map(optionValue => (
        <option key={optionValue.id} value={optionValue.id}>
            {optionValue.name}
        </option>
    ));
    React.useEffect(() => {
        console.log("data", data);
    }, [])

    return (
        <>
        <label htmlFor={label}>{label}</label>
            <select className="form-select"
                name="customSearch"
                onChange={handleChange}
                onBlur={handleOnBlur}
            >
                <option>Select Item</option>
                {options}
            </select>
        </>
    );
}
CustomSelect.propTypes = {
    data: PropTypes.array,
    label: PropTypes.string,
};
export default CustomSelect;