import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import OAuthCallback from './components/OAuthCallback'

const Dashboard: React.FC = () => (
  <div>
    <h2>Dashboard</h2>
    <p>Here goes supervisor stuff</p>
  </div>
)

const Login: React.FC = () => {
  const oauthUrl =
    'https://hub.somewhere-on-our-stack.jb/auth?client_id=YOUR_CLIENT_ID&redirect_uri=http://localhost:5173/oauth/callback&response_type=code'
  return (
    <div>
      <h2>Login</h2>
      <a href={oauthUrl}>Login with OAuth2 Provider</a>
    </div>
  )
}




function App() {
  return (
    <>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> |{' '}
          <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Welcome to the OAuth App</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/oauth/callback" element={<OAuthCallback />} />
        </Routes>
      </div>
    </>)
}


export default App


// -- OLD CODE
//
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
