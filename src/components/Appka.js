import React, { Component } from "react"
// import TodoItem from "./components/TodoItem"
// import todosData from "./components/todosData"
// import Conditionals from "./components/conditionals"

// -------------------------------------
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       todos: todosData
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }
//   handleChange(id) {
//     this.setState(prevState => {
//       const updatedTodos = prevState.todos.map(todo => {
//         if (todo.id === id) {
//           return {
//             ...todo,
//             completed: !todo.completed
//           }
//         }
//         return todo
//       })
//       // console.log(prevState.todos)
//       // console.log(updatedTodos)
//       return {
//         todos: updatedTodos
//       }
//     })
//   }
//   render() {
//     const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)

//     return (
//       <div className="todo-list">
//         {todoItems}
//       </div>
//     )
//   }
// }

// -------------------------------------
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoading: true
//     }
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         isLoading: false
//       })
//     }, 1500)
//   }
//   render() {
//     return (
//       <div>
//         {this.state.isLoading ?
//           <h1>loading...</h1> :
//           <Conditionals />
//         }
//       </div>
//     )
//   }
// }


// -------------------------------------
// class App extends React.Component {
//   constructor() {  
//     super()
//     this.state = {
//       isLoggedIn: false
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState(prevState => {
//       return {
//         isLoggedIn: !prevState.isLoggedIn
//       }
//     })
//   }

//   render() {

//     let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
//     let displayText = this.state.isLoggedIn ? "log out" : "log in"


//     return (
//       <div>
//         <button onClick={this.handleClick}>{buttonText}</button>
//         <h1>{displayText}</h1>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       value: 'dupa dupencja'
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleChange(event) {
//     this.setState(
//       { value: event.target.value }
//     )
//   }
//   handleSubmit(event) {
//     alert('podano imie:' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:&nbsp;
//           <input
//             type='text'
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Essay:
//           <textarea value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input
//           type='submit'
//           value='Submit'
//         />
//       </form>
//     )
//   }
// }

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            isFriendly: false,
            favColor: 'blue'
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        // I wersja przed dodaniem checkbox'a
        // const { name, value } = event.target
        // this.setState({
        //   [name]: value
        // })
        const { name, value, type, checked } = event.target
        type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    render() {
        return (
            <form>
                {/* ---------- INPUT ---------- */}

                <input
                    type='text'
                    value={this.state.firstName}
                    name='firstName'
                    placeholder='first name'
                    onChange={this.handleChange}
                />
                <br />
                <input
                    type='text'
                    value={this.state.lastName}
                    name='lastName'
                    placeholder='last name'
                    onChange={this.handleChange}
                />
                <br />
                <textarea
                    value='type text here'
                />
                <br />

                {/* ---------- CHECKBOX ---------- */}
                <label>
                    <input
                        type='checkbox'
                        name='isFriendly'
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    /> is Friendly?
        </label>
                <br />
                <label>
                    <input
                        type='radio'
                        name='gender'
                        value='male'
                        checked={this.state.gender === 'male'}
                        onChange={this.handleChange}
                    /> Male
        </label>
                <br />
                {/* ---------- RADIO ---------- */}

                <label>
                    <input
                        type='radio'
                        name='gender'
                        value='female'
                        checked={this.state.gender === 'female'}
                        onChange={this.handleChange}
                    /> Female
        </label>
                <br />
                {/* ---------- OPTIONS ---------- */}
                <label>Favorite Color:</label>
                <select
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                </select>

                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are {this.state.gender}</h2>
                <h2>Your favorite color is {this.state.favColor}</h2>
            </form>
        )
    }
}

export default App

// ------------------------------
// ------------------------------
// ------------------------------

import React from 'react'
import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            plantName: '',
            plantCategory: '',
            plantRoom: '',
            wateringInterval: '',
            fertilizingInterval: '',
            requiredExposure: '',
            requiredTemperature: '',
            requiredHumidity: '',
            plantBlooming: '',
            plantDifficulty: '',

        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === 'checkbox' ?
            this.setState({ [name]: checked }) :
            this.setState({ [name]: value })
    }

    render() {

        return (
            <div>

                <h1>ADD NEW PLANT</h1>

                <form>
                    <label>Name:</label>
                    <input
                        type='text'
                        value={this.state.plantName}
                        name='plantName'
                        onChange={this.handleChange}
                    />
                    <br />

                    <label>Plant Category:</label>
                    <select
                        value={this.state.plantCategory}
                        onChange={this.handleChange}
                        name='plantCategory'
                    >
                        <option value='succulent'>succulent</option>
                        <option value='tillandsia'>tillandsia</option>
                        <option value='cacti'>cacti</option>
                        <option value='orchids'>orchids</option>
                        <option value='green-plant'>green-plant</option>
                        <option value='house-plant'>house-plant</option>
                        <option value='other'>other</option>
                    </select>
                    <br />

                    <label>Plant Room:</label>
                    <select
                        value={this.state.plantRoom}
                        onChange={this.handleChange}
                        name='plantRoom'
                    >
                        <option value='living-room'>living room</option>
                        <option value='bedroom'>bedroom</option>
                        <option value='bathroom'>bathroom</option>
                        <option value='kitchen'>kitchen</option>
                        <option value='balcony'>balcony</option>
                        <option value='sleeping-room'>sleeping room</option>
                    </select>
                    <br />

                    <label>Watering Interval:</label>
                    <input
                        type='text'
                        value={this.state.wateringInterval}
                        name='wateringInterval'
                        placeholder=''
                        onChange={this.handleChange}
                    />
                    <br />

                    <label>Fertilizing Interval:</label>
                    <input
                        type='text'
                        value={this.state.fertilizingInterval}
                        name='fertilizingInterval'
                        placeholder=''
                        onChange={this.handleChange}
                    />
                    <br />

                    <label>Required Exposure:</label>
                    <input
                        type='text'
                        value={this.state.requiredExposure}
                        name='requiredExposure'
                        placeholder=''
                        onChange={this.handleChange}
                    />
                    <br />

                    <label>Required Temperature:</label>
                    <input
                        type='text'
                        value={this.state.requiredTemperature}
                        name='requiredTemperature'
                        placeholder=''
                        onChange={this.handleChange}
                    />
                    <br />

                    <label>Required Humidity:</label>
                    <input
                        type='text'
                        value={this.state.requiredHumidity}
                        name='requiredHumidity'
                        placeholder=''
                        onChange={this.handleChange}
                    />
                    <br />

                    <label>Blooming:</label>
                    <input
                        type='checkbox'
                        name='plantBlooming'
                        checked={this.state.plantBlooming}
                        onChange={this.handleChange}
                    />
                    <br />

                    <label>Difficulty:</label>
                    <select
                        value={this.state.plantDifficulty}
                        onChange={this.handleChange}
                        name='plantDifficulty'
                    >
                        <option value='beginner'>beginner</option>
                        <option value='medium-low'>medium-low</option>
                        <option value='medium'>medium</option>
                        <option value='medium-high'>medium-high</option>
                        <option value='high'>high</option>
                    </select>
                </form>

                <h3>You're trying add plant which name is {this.state.plantName}.</h3>
                <h3>Its category is {this.state.plantCategory}.</h3>
                <h3>You can find it in {this.state.plantRoom}</h3>
                <h3>Remember about watering {this.state.wateringInterval} as well as {this.state.fertilizingInterval} per day.</h3>
                <h3>It required exposire is {this.state.requiredExposure}, {this.state.requiredHumidity} humidity and {this.state.requiredTemperature} temperature.</h3>

            </div>
        )
    }
}

export default App