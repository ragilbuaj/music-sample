import "./App.css";
import React, {useState} from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Player from "./components/player";
import Song from "./components/song";
import Input from "./components/input";

function App() {
	const [isShow, setIsShowing] = useState(false);

	const handleClick = (display) => {
		setIsShowing(display);
	};

	const handleClose = (active) => {
		setIsShowing(active);
	};

	return (
		<main className='h-screen w-full relative z-[99]'>
			{/* <Sidebar /> */}
			<Header setVisible={handleClick} />
			<Player />
			<Song />
			{isShow ? (
				<>
					<Input activeState={handleClose} />
				</>
			) : null}
		</main>
	);
}

export default App;
