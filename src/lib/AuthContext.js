import React, { useState, useEffect, createContext, useContext } from 'react'
import firebase from 'firebase'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({ isAuth: false })
	useEffect(() => {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				setAuth({
					uid: user.uid,
					isAuth: true,
					email: user.email,
					name: user.displayName || user.email,
					emailVerified: user.emailVerified,
				})
				// ...
			} else {
				setAuth({
					isAuth: false
				})
			}
		});
	}, [])
	const resendVerificationEmail = async () => {
		const user = firebase.auth().currentUser;
		await user
			.sendEmailVerification()
	}
	const signOut = async () => {
		await firebase.auth().signOut()
	}
	return (
		<AuthContext.Provider value={{ ...auth, resendVerificationEmail, signOut }}>
			{children}
		</AuthContext.Provider>
	)
}

// custom hook
export const useAuth = () => {
	return useContext(AuthContext)
}