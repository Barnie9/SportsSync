import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";

// Pages
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import EmailConfirmation from "./pages/EmailConfirmation/EmailConfirmation";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Profile from "./pages/Profile/Profile";

interface Props {
	setUsername: (username: string) => void;
}

function PrivateRoute({ setUsername }: Props) {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							onChangeUsername={(value) => setUsername(value)}
						/>
					}
				/>

				<Route
					path="/events"
					element={
						<Events
							onChangeUsername={(value) => setUsername(value)}
						/>
					}
				/>

				<Route path="/login" element={<Navigate to="/" />} />

				<Route path="/register" element={<Navigate to="/" />} />

				<Route
					path="/confirm-email/:token"
					element={<Navigate to="/" />}
				/>

				<Route
					path="/profile"
					element={
						<Profile
							onChangeUsername={(value) => setUsername(value)}
						/>
					}
				/>

				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Router>
	);
}

function PublicRoute({ setUsername }: Props) {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							onChangeUsername={(value) => setUsername(value)}
						/>
					}
				/>

				<Route
					path="/events"
					element={
						<Events
							onChangeUsername={(value) => setUsername(value)}
						/>
					}
				/>

				<Route
					path="/login"
					element={
						<Login
							onChangeUsername={(value) => setUsername(value)}
						/>
					}
				/>

				<Route
					path="/register"
					element={
						<Register
							onChangeUsername={(value) => setUsername(value)}
						/>
					}
				/>

				<Route
					path="/confirm-email/:token"
					element={
						<EmailConfirmation
							onChangeUsername={(value) => setUsername(value)}
						/>
					}
				/>

				<Route path="/profile" element={<Navigate to="/" />} />

				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Router>
	);
}

function App() {
	const [username, setUsername] = useState("");

	console.log(username);

	if (!!username) {
		return <PrivateRoute setUsername={setUsername} />;
	} else {
		return <PublicRoute setUsername={setUsername} />;
	}
}

export default App;
