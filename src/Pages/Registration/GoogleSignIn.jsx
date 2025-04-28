import { useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import axios from 'axios';
import { Button } from '../../Components/Common/Button/Button';

const GoogleSignIn = () => {
    const [error, setError] = useState(null);

    const login = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                // Get user info from Google
                const userInfo = await axios.get(
                    'https://www.googleapis.com/oauth2/v3/userinfo',
                    {
                        headers: {
                            Authorization: `Bearer ${response.access_token}`,
                        },
                    }
                );

                // Send the user info to your backend
                const backendResponse = await axios.post('/api/auth/google', {
                    email: userInfo.data.email,
                    name: userInfo.data.name,
                    picture: userInfo.data.picture,
                });

                // Handle successful login (e.g., store token, redirect)
                console.log('Login successful:', backendResponse.data);

            } catch (err) {
                setError('Failed to login with Google');
                console.error('Error:', err);
            }
        },
        onError: () => {
            setError('Google login failed');
        },
    });

    return (
        <div className="google-signin-container">
            <Button
                onClick={() => login()}
                variant='outline'
                size='ssm'
                className='w-full'
            >
                <GoogleIcon />
                Sign in with Google
            </Button>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default GoogleSignIn;

const GoogleIcon = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4"><path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 1 1 0-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.97 9.97 0 0 0 12.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748z"></path></svg>
        </>
    )
}