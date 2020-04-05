import React, { Component } from 'react'
import './App.css'

import Countdown from './Countdown.jsx'
import EditEvent from './EditEvent'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import uniqid from 'uniqid'

class App extends Component {
    // Funckja ktora zawsze wywolyje sie automatycznie z clasa app
    constructor() {
        super();
        this.state = {
            now: {
                hour: new Date().getHours(),
                minute: new Date().getMinutes(),
                seconds: new Date().getSeconds(),
            },

            events: [
                { id: 0, name: 'sniadanie', hour: 7, minute: 0 },
                { id: 1, name: 'obiad', hour: 15, minute: 0 },
                { id: 2, name: 'kolacja', hour: 20, minute: 0 },
                { id: 3, name: 'bieganie', hour: 23, minute: 0 },
            ],
            editedEvent: {
                id: uniqid(),
                name: '',
                hour: -1,
                minute: -1
            },
        }
        this.handleEditEvent = this.handleEditEvent.bind(this)
        this.handleSaveEvent = this.handleSaveEvent.bind(this)
        this.handleRemoveEvent = this.handleRemoveEvent.bind(this)
        this.handleEditInit = this.handleEditInit.bind(this)
        this.handleEditCancel = this.handleEditCancel.bind(this)
    }

    timer = () => {
        this.setState({
            now: {
                hour: new Date().getHours(),
                minute: new Date().getMinutes(),
                seconds: new Date().getSeconds(),
            },
        })
    }

    componentDidMount() {
        const storageEvents = JSON.parse(localStorage.getItem('events')) || [];
        this.setState({ events: storageEvents })
        console.log(storageEvents)
        const intervalId = setInterval(this.timer, 1000)
        this.setState({ intervalId: intervalId })
    }

    // componentWillUnmount() {
    //     clearInterval(this.state.intervalId)
    // }

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
                    hour: -1,
                    minute: -1
                },
            }
        },
            // zapisywanie danych w localStorage
            () => localStorage.setItem('events', JSON.stringify(this.state.events))
        )

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
        }),
            // zapisywanie, a raczej usuwanie b danych w localStorage
            () => localStorage.setItem('events', JSON.stringify(this.state.events))
        )
    }

    handleEditInit(id) {
        // console.log(id)
        this.setState(prevState => ({
            // editedEvent: { ...prevState.events[id] }
            editedEvent: { ...prevState.events.find(el => el.id === id) }
        }))
    }

    handleEditCancel() {
        this.setState({
            editedEvent: {
                id: uniqid(),
                name: '',
                hour: -1,
                minute: -1
            },
        })
    }

    render() {
        const events = this.state.events.map(el => {
            return <Countdown
                key={el.id}
                id={el.id}
                name={el.name}
                hour={el.hour}
                minute={el.minute}

                timeNow={this.state.now}
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
                    onSave={() => this.handleSaveEvent()}
                    onCancel={() => this.handleEditCancel()}
                />
                <SectionOne />
                <SectionTwo />
                <SectionThree />
            </div>
        )
    }
}

// const App = () => ();

export default App;