import React, { useState } from 'react';

const DynamicForm = () => {
    const [formFields, setFormFields] = useState([]);

    const addField = () => {
        setFormFields([...formFields, '']);
    };

    const handleInputFeild = (e, index) => {
        const updatedFields = [...formFields];
        updatedFields[index] = e.target.value;
        setFormFields(updatedFields);
    }
    console.log(formFields)

    const removeField = (index) => {
        const updatedFields = [...formFields];
        updatedFields.splice(index, 1);
        setFormFields(updatedFields);
    };

    return (
        <div className='container center border'>
            <h1>Dynamic Form</h1>
            <button onClick={addField}>Add Field</button>
            {formFields.map((value, index) => (
                <div key={index} className='py-1'>
                    <input type="text" value={value} onChange={(e) => handleInputFeild(e, index)} />
                    <button className='mx-1' onClick={() => removeField(index)}>Remove</button>
                </div>
            ))}
            {/* Displaying the input values */}
            <ol>
                {formFields.map((inp, index) => (
                    inp !== '' && (
                        <li key={index}>{inp}</li>
                    )
                ))}
            </ol>
        </div>
    );
};

export default DynamicForm;
