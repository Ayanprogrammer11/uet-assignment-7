import React, { useState } from 'react';

// SignInForm Component
const SignInForm = ({ onSignIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
};

// Welcome Component
const Welcome = ({ username }) => (
  <div>
    <h2>Welcome, {username}!</h2>
    <p>You have successfully signed in.</p>
  </div>
);

// Invalid Login Component
const InvalidLogin = () => (
  <div>
    <p>Invalid username or password. Please try again.</p>
  </div>
);

// About Component (Child of Profile)
const About = () => (
  <div>
    <h3>About Me</h3>
    <p>I'm a passionate developer who loves creating React applications.</p>
    <p>My skills include JavaScript, React, and Node.js.</p>
  </div>
);

// Profile Component
const Profile = () => (
  <div>
    <h2>User Profile</h2>
    <About />
  </div>
);

// Main App Component
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showInvalidLogin, setShowInvalidLogin] = useState(false);

  const handleSignIn = (enteredUsername, enteredPassword) => {
    // Simple validation (in a real app, this would be more secure)
    if (enteredUsername === 'user' && enteredPassword === 'password') {
      setIsLoggedIn(true);
      setUsername(enteredUsername);
      setShowInvalidLogin(false);
    } else {
      setShowInvalidLogin(true);
    }
  };

  return (
    <div>
      <h1>React Sign-In App</h1>
      {!isLoggedIn ? (
        <>
          <SignInForm onSignIn={handleSignIn} />
          {showInvalidLogin && <InvalidLogin />}
        </>
      ) : (
        <>
          <Welcome username={username} />
          <Profile />
        </>
      )}
    </div>
  );
};

export default App;