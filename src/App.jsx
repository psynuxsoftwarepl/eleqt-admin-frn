

import React, { useState } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Tabs from './components/Tabs';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    // You can log errorInfo to an error reporting service here
  }
  render() {
    if (this.state.hasError) {
      return <div style={{color:'red',padding:'2rem'}}><h2>Something went wrong.</h2><pre>{this.state.error && this.state.error.toString()}</pre></div>;
    }
    return this.props.children;
  }
}

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [activeTab, setActiveTab] = useState('admins');
  const [showHome, setShowHome] = useState(true);

  if (!loggedInUser) {
    return <Login onLogin={setLoggedInUser} />;
  }

  return (
    <ErrorBoundary>
      <div style={{background:'#222',minHeight:'100vh',color:'#fff'}}>
        <div style={{padding:'2rem'}}>
          <button onClick={() => {setShowHome(true);}} style={{marginRight:'1rem',padding:'8px'}}>Home</button>
          <button onClick={() => {setShowHome(false);}} style={{padding:'8px'}}>Dashboard</button>
          <button onClick={() => {setLoggedInUser(null);}} style={{float:'right',padding:'8px'}}>Logout</button>
        </div>
        {showHome ? (
          <Home username={loggedInUser} />
        ) : (
          <div style={{padding:'2rem'}}>
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <Dashboard activeTab={activeTab} />
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;
