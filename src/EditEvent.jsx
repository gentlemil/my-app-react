import React from 'react';
import './EditEvent.css'
import PropTypes from 'prop-types'
import {
    isValidNumberInput,
    parseInputAsNumber,
    isValidName,
    isValidHour,
    isValidMinute,
} from './utils'


const EditEvent = props => {
    const isFormValid = isValidName(props.name) &&
        isValidHour(props.hour) &&
        isValidMinute(props.minute)

    // console.log(isValidName(props.name) &&
    //     isValidHour(props.hour) &&
    //     isValidMinute(props.minute)
    // )

    const isFormEmpty =
        props.name === '' && props.hour === -1 && props.minute === -1

    return (
        <div className='edit-event'>
            <div className='edit-event__input-group'>
                <label htmlFor='name'>Name</label>     {/* htmlFor to to samo co className  */}
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={props.name}
                    onChange={e =>
                        props.onInputChange({ [e.target.name]: e.target.value })
                    }
                />
            </div>
            <div className='edit-event__input-group'>
                <label htmlFor='hour'>hour</label>     {/* htmlFor to to samo co className  */}
                <input
                    type='tel'
                    id='hour'
                    name='hour'
                    value={props.hour === -1 ? ' ' : props.hour}
                    onKeyPress={e => isValidNumberInput(e)}
                    onChange={e =>
                        // props.onInputChange({ [e.target.name]: e.target.value })
                        // w utils mamy funcke, ktora zapewnia aby formularrz wysylal number a nie string
                        props.onInputChange({ [e.target.name]: parseInputAsNumber(e.target.value) })
                    }
                />
            </div>
            <div className='edit-event__input-group'>
                <label htmlFor='minute'>minute</label>     {/* htmlFor to to samo co className  */}
                <input
                    type='tel'
                    id='minute'
                    name='minute'
                    value={props.minute === -1 ? ' ' : props.minute}
                    onKeyPress={e => isValidNumberInput(e)}
                    onChange={e =>
                        props.onInputChange({ [e.target.name]: parseInputAsNumber(e.target.value) })
                    }
                />
            </div>
            {/* disabled={false} zamieniamy false na isvalidform */}
            <button disabled={!isFormValid} onClick={() => props.onSave()}>OK</button>
            <button disabled={isFormEmpty} onClick={() => props.onCancel()}>CANCEL</button>
        </div>
    );
};

EditEvent.prototype = {
    name: PropTypes.string,
    hour: PropTypes.number,
    minute: PropTypes.number,
    onInputChange: PropTypes.func,
    onSave: PropTypes.func,
    onCancel: PropTypes.funck,

}

export default EditEvent