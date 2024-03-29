import './App.css';
import React from 'react'

function App() {
  return (
    <div className="App">
      <header>
        <h1>User Signup Form</h1>
      </header>
      <SignupForm />
    </div>
  );
}

const SignupForm = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')

  const [resultText, setResultText] = React.useState('') // Displays the result to the user

  const handleSubmit = React.useCallback((e) => {
    e.preventDefault() // Prevent page from reloading on submit

    if (!(username && password && confirmPassword)) setResultText('Please fill in all form fields.')
    else if (password === confirmPassword) setResultText('Passwords match!')
    else if (password !== confirmPassword) setResultText('Passwords do not match.')
  }, [username, password, confirmPassword])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <form onSubmit={handleSubmit} className='signup-form'>
        <div className='input-field'> <label id="username">Username</label><input value={username} name='username' type='text' onChange={(e) => setUsername(e.target.value)} /></div>
        <div className='input-field'><label id="password">Password</label><input value={password} name='password' onChange={(e) => setPassword(e.target.value)} /></div>
        <div className='input-field'><label id="confirm-password">Confirm Password</label><input value={confirmPassword} name='confirm-password' onChange={(e) => setConfirmPassword(e.target.value)} /></div>
        <button type="submit">Submit</button>
      </form>

      <p>{resultText}</p>
    </div>

  )
}

export default App;
