import React from 'react';
import './EditEvent.css'

import { isValidNumberInput } from './utils'


const EditEvent = props => {
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
                    value={props.hour}
                    onKeyPress={e => isValidNumberInput(e)}
                    onChange={e =>
                        props.onInputChange({ [e.target.name]: e.target.value })
                    }
                />
            </div>
            <div className='edit-event__input-group'>
                <label htmlFor='minute'>minute</label>     {/* htmlFor to to samo co className  */}
                <input
                    type='tel'
                    id='minute'
                    name='minute'
                    value={props.minute}
                    onKeyPress={e => isValidNumberInput(e)}
                    onChange={e =>
                        props.onInputChange({ [e.target.name]: e.target.value })
                    }
                />
            </div>
            <button onClick={() => props.onSave()}>OK</button>
            <button>CANCEL</button>
        </div>
    );
};

export default EditEvent