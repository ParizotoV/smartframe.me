import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/Layout'
import { useAuth } from '../lib/AuthContext'

const CreateScene = () => {
	const auth = useAuth()
	return (
		<div>
			<h1>Create Scenes</h1>
			<pre>{JSON.stringify(auth)}</pre>
		</div>
	)
}

const Scene = () => {
	return <h1>Scene</h1>
}

const ShowEmailNotification = () => {
	const auth = useAuth()
	const resendEmailVerification = async() => {
		try {
			await auth.resendVerificationEmail()
			//
		} catch(err) {
			//
		}
	}
	if (!auth.emailVerified) {
		return (
			<div class="items-center bg-orange-400 text-white text-sm font-bold px-4 py-3" role="alert">
				<div className='container mx-auto text-center'>
					<p>
						Please, confirm your email address ({auth.email}).
					</p>
					<button
						onClick={resendEmailVerification}
					>
						Click here to resend email confirmation.
					</button>
				</div>
			</div>
		)
	}
	return null
}

const App = () => {
	return (
		<Layout>
			<ShowEmailNotification />
			<h1>app</h1>
			<Router basepath='/app'>
				<CreateScene path='/create-scene' />
				<Scene path='/scenes' />
			</Router>
		</Layout>
	)
}

export default App