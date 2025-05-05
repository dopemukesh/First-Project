import { useGoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '../../Components/Common/Button/Button';
import usePWAInstall from '../../hooks/usePWAInstall';

const GoogleSignIn = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // PWA Install hook usage
    const { canInstall, promptInstall } = usePWAInstall();

    const login = useGoogleLogin({
        onSuccess: async (response) => {
            setLoading(true);
            setError(null);
            try {
                // Step 1: Get user info from Google
                const { data: userInfo } = await axios.get(
                    'https://www.googleapis.com/oauth2/v3/userinfo',
                    {
                        headers: {
                            Authorization: `Bearer ${response.access_token}`,
                        },
                    }
                );

                // Step 2: Store user info in localStorage
                localStorage.setItem(
                    'currentUser',
                    JSON.stringify({
                        email: userInfo.email,
                        name: userInfo.name,
                        picture: userInfo.picture,
                        token: response.access_token,
                        isLoggedIn: true,
                    })
                );

                // Step 3: Redirect user
                window.location.href = '/'; // Redirect after login

            } catch (err) {
                console.error('Login failed:', err);
                setError('Failed to login with Google.');
            } finally {
                setLoading(false);
            }
        },
        onError: (err) => {
            console.error('Google login error:', err);
            setError('Google login failed.');
            setLoading(false);
        },
    });

    // Trigger the PWA install prompt after successful login
    useEffect(() => {
        if (canInstall) {
            promptInstall.prompt(); // Trigger install prompt after login
        }
    }, [canInstall, promptInstall]);

    return (
        <div className="google-signin-container">
            <Button
                onClick={() => login()}
                variant="outline"
                size="sm"
                className="w-full flex items-center justify-center gap-2"
                disabled={loading}
            >
                <GoogleIcon />
                {loading ? 'Signing in...' : 'Sign in with Google'}
            </Button>
            {error && <div className="error-message text-red-500 mt-2">{error}</div>}
        </div>
    );
};

export default GoogleSignIn;

// Google Icon Component
const GoogleIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="h-4 w-4"
        >
            <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 1 1 0-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.97 9.97 0 0 0 12.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748z"></path>
        </svg>
    );
};
