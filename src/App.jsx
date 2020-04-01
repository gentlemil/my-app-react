import React, { Component } from 'react'
import './App.css'

import Countdown from './Countdown.jsx'
import EditEvent from './EditEvent'
import uniqid from 'uniqid'

class App extends Component {
    // Funckja ktora zawsze wywolyje sie automatycznie z clasa app
    constructor() {
        super();
        this.state = {
            events: [
                { id: 0, name: 'sniadanie', hour: '07', minute: '00' },
                { id: 1, name: 'obiad', hour: '15', minute: '00' },
                { id: 2, name: 'kolacja', hour: '20', minute: '00' },
            ],
            editedEvent: {
                id: uniqid(),
                name: '',
                hour: '',
                minute: ''
            },
        }
        this.handleEditEvent = this.handleEditEvent.bind(this)
        this.handleSaveEvent = this.handleSaveEvent.bind(this)
        this.handleRemoveEvent = this.handleRemoveEvent.bind(this)
        this.handleEditInit = this.handleEditInit.bind(this)
    }

    handleEditEvent(val) {
        console.log(val)
        // this.setState({ editedEvents: val })    // nadpisuje zmiany, tracimy poprzednie dane
        this.setState(prevState => {
            return {
                editedEvent: Object.assign(prevState.editedEvent, val)
            }
        })
    }

    handleSaveEvent() {
        this.setState(prevState => {
            const editedEventExists = prevState.events.find(
                el => el.id === prevState.editedEvent.id
            )

            let updatedEvents;
            if (editedEventExists) {
                updatedEvents = prevState.events.map(el => {
                    if (el.id === prevState.editedEvent.id)
                        return prevState.editedEvent
                    else
                        return el;
                })
            } else {
                updatedEvents = [...prevState.events, prevState.editedEvent]
            }

            return {
                events: updatedEvents,
                editedEvent: {
                    id: uniqid(),
                    name: '',
                    hour: '',
                    minute: ''
                },
            }
        })

        // alert('bumszakalaka!')
        // this.setState(prevState => ({
        //     events: [...prevState.events, prevState.editedEvent],
        //     // editedEvent musimy ustawic tak, zeby dane z formularza nie zostawaly w pamieci
        //     editedEvent: {
        //         id: uniqid(),
        //         name: '',
        //         hour: '',
        //         minute: ''
        //     },
        // }))
    }

    handleRemoveEvent(id) {
        this.setState(prevState => ({
            events: prevState.events.filter(el => el.id !== id)
        }))
    }

    handleEditInit(id) {
        // console.log(id)
        this.setState(prevState => ({
            // editedEvent: { ...prevState.events[id] }
            editedEvent: { ...prevState.events.find(el => el.id === id) }
        }))
    }

    render() {
        const events = this.state.events.map(el => {
            return <Countdown
                key={el.id}
                id={el.id}
                name={el.name}
                hour={el.hour}
                minute={el.minute}
                onRemove={id => this.handleRemoveEvent(id)}
                onEditInit={id => this.handleEditInit(id)}
            />
        })
        return (
            <div className='app'>
                {events}
                <EditEvent
                    // ------- tutaj sprawiamy, ze nasz formularz sie czysci
                    name={this.state.editedEvent.name}
                    hour={this.state.editedEvent.hour}
                    minute={this.state.editedEvent.minute}
                    // -------
                    onInputChange={val => this.handleEditEvent(val)}
                    // onSave={() => alert('bumbum!')}
                    onSave={() => this.handleSaveEvent()}
                />
            </div>
        )
    }
}

// const App = () => ();

export default App;