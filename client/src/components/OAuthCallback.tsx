import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const OAuthCallback: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const code = params.get('code')

    if (code) {
      axios
        .post('/api/auth/oauth2/callback', { code })
        .then((response) => {
          const { accessToken, refreshToken } = response.data

          // Store tokens in localStorage for demonstration purposes.
          localStorage.setItem('accessToken', accessToken)
          localStorage.setItem('refreshToken', refreshToken)

          // Redirect to the dashboard.
          navigate('/dashboard')
        })
        .catch((error) => {
          console.error('OAuth callback error:', error)
          // Handle error (e.g., redirect to an error page)
        })
    }
  }, [navigate])

  return <div>Processing OAuth callback...</div>
}

export default OAuthCallback
