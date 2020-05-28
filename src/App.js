import React, { Component } from 'react';

class App extends Component {
  state = ({
    name: '',
    lastname: '',
  });
  // get field inputs
  const getInputs = (e) => {
    state[e.target.id] = e.target.value;
    setstate({ ...state });
  };

  // get form data
  const getFormData = (e) => {
    e.preventDefaut();
    const allstate = this.state;
  };

  return (
    <div className='App'>
      <form>
        <label>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          value={this.state.name}
          onChange={getInputs}
        />
        <label>Last Name</label>
        <input
          type='text'
          id='lastname'
          value={state.lastname}
          onChange={getInputs}
        />

        <button
          onClick={getFormData}
          // style={{ height: '3vh', backgroundColor: 'blue', color: 'white' }}
        >
          Click Me
        </button>
      </form>
    </div>
  );
}

// const [state, setstate] = useState({});
// const [genderState, setGenderState] = useState("");

// const getInputs = (e)=> {
//   state[e.target.id] = e.target.value
//   setstate({...state});

// }

// const allInputs = (e) => {
//   e.preventDefault();
//    const allstate = {state,Gender:genderState}

export default App;
