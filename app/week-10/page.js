"use client";


import { useUserAuth } from "./_utils/auth-context";

export default function Login() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    async function handleSignIn() {
        try {
            await gitHubSignIn();
        }
        catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="text-lg">
            <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>
            {user ? (
                <div className="text-lg">
                    <p>
                        Signed in as {user.displayName} {user.email}
                    </p>
                    <button
                        onClick={handleSignOut}
                        className="text-lg m-2 hover:underline">
                        Sign Out
                    </button>                    
                    <p>
                        <a className="text-lg hover:underline" href="/week-10/shopping-list">Continue to your Shopping List</a>
                    </p>
                </div>
            ) : (
                <button onClick={handleSignIn} className="text-lg m-2 hover:underline">
                        Sign in with GitHub
                </button>
            )}
        </div>
      );    
}