import React from 'react'
import PropTypes from 'prop-types'
import './Countdown.css'
import { hourMinuteToSeconds, secondsToHourMinutSecond } from './utils'
import './../node_modules/semantic-ui-css/semantic.css'

const Countdown = props => {
    const eventInSeconds = hourMinuteToSeconds(props.hour, props.minute)
    const nowInSeconds = hourMinuteToSeconds(
        props.timeNow.hour, props.timeNow.minute) + props.timeNow.seconds
    // different
    const diff = eventInSeconds - nowInSeconds;
    // const diffText = diff > 0 ? diff : 'tomorrow';
    const diffText = diff > 0 ? secondsToHourMinutSecond(diff) : 'tomorrow';
    return (

        <div className='countdown'>
            {/* <strong>{props.name}</strong> - {props.hour}:{props.minute} */}
            <strong>{props.name}</strong> - {diffText}
            <div className='countdown__icons'>
                <i className='icon edit' onClick={() => props.onEditInit(props.id)} />
                <i className='icon times' onClick={() => props.onRemove(props.id)} />
            </div>
        </div>
    )
}

Countdown.propTypes = {
    name: PropTypes.string,
    hour: PropTypes.number,
    minute: PropTypes.number,
    onEditInit: PropTypes.func,
    timeNow: PropTypes.shape({
        hour: PropTypes.number,
        minute: PropTypes.number,
        seconds: PropTypes.number
    }),
    onRemove: PropTypes.func,

}

export default Countdown