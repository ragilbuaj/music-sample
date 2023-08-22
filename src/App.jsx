import "./App.css";
import React, {useState, useEffect} from "react";
import axios from "axios";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Player from "./components/player";
import Song from "./components/song";
import Input from "./components/input";

function App() {
	const [isShow, setIsShowing] = useState(false);
	const [genre, setGenre] = useState("Classical");
	const [year, setYear] = useState(1950);
	const [accessToken, setAccessToken] = useState("");
	const [songsData, setSongsData] = useState([]);
	const [songs, setSongs] = useState([]);
	const rangeYear = year + 20;

	const handleClick = (display) => {
		setIsShowing(display);
	};

	const handleClose = (active) => {
		setIsShowing(active);
	};

	useEffect(() => {
		async function getAccessToken(clientId, clientSecret) {
			const data = await axios.post(
				"https://accounts.spotify.com/api/token",
				null,
				{
					params: {
						grant_type: "client_credentials",
					},
					auth: {
						username: clientId,
						password: clientSecret,
					},
				}
			);

			return data.data.access_token;
		}

		const clientId = "97d4afb8b0444284a2c618f1f6cb4feb";
		const clientSecret = "c0fd59f9d9ac4383ad54885c0b827376";

		getAccessToken(clientId, clientSecret)
			.then((token) => {
				setAccessToken(token);
			})
			.catch((error) => {
				console.log("Error: ", error);
			});

		async function getSongs() {
			try {
				const response = await axios.get("https://api.spotify.com/v1/search?", {
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
					params: {
						q: `genre:${genre}`,
						type: "track",
						limit: 50,
					},
				});

				setSongsData(response.data.tracks.items);
			} catch (error) {
				console.error("Error: ", error);
			}
		}

		getSongs();
	}, [genre]);

	setTimeout(() => {
		const data = songsData.filter((song) => {
			const yearOfSong = song.album.release_date.substring(0, 4);
			return yearOfSong >= year && yearOfSong <= rangeYear;
		});

		const songs = data.map((song) => ({
			title: song.name,
			artist: song.artists[0].name,
			album: song.album.name,
			image: song.album.images,
			year: song.album.release_date.substring(0, 4),
		}));

		setSongs(songs);
	}, 500);

	return (
		<main className='h-screen w-full relative z-[99]'>
			{/* <Sidebar /> */}
			<Header setVisible={handleClick} />
			<Player />
			<Song playlist={songs} />
			{isShow ? (
				<>
					<Input activeState={handleClose} />
				</>
			) : null}
		</main>
	);
}

export default App;
