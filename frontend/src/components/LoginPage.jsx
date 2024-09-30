import React from 'react';

export default function LoginPage() {
    const handleGoogleLogin = () => {
        window.location.href = '/auth/google'; // Redirect to Google Auth
    };

    return (
        <div className="login-page">
            <h1>Welcome to Onebox</h1>
            <p>Please log in to access your Onebox.</p>
            <button onClick={handleGoogleLogin} className="google-login-btn">
                Login with Google
            </button>
        </div>
    );
}
