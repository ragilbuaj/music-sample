import "./App.css";
import React, {useState, useEffect} from "react";
import axios from "axios";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Player from "./components/player";
import Song from "./components/song";
import Input from "./components/input";

const clientId = "97d4afb8b0444284a2c618f1f6cb4feb";
const clientSecret = "c0fd59f9d9ac4383ad54885c0b827376";
const accessYoutube = "AIzaSyBuAftk5Dw-E90OHoPtfMt1I28Q8SYJSQY";

function App() {
	const [isShow, setIsShowing] = useState(false);
	const [genre, setGenre] = useState("");
	const [year, setYear] = useState(null);
	const [accessToken, setAccessToken] = useState("");
	const [handleRandom, setHandleRandom] = useState(false);
	const [randomSongs, setRandomSongs] = useState({
		title: "Ride On Time",
		artist: "Tatsuro Yamashita",
		image: [
			{
				url: "https://i.scdn.co/image/ab67616d0000b273e208bc6b63da331f012e0382",
				height: 640,
				width: 640,
			},
			{
				url: "https://i.scdn.co/image/ab67616d00001e02e208bc6b63da331f012e0382",
				height: 300,
				width: 300,
			},
			{
				url: "https://i.scdn.co/image/ab67616d00004851e208bc6b63da331f012e0382",
				height: 64,
				width: 64,
			},
		],
		year: "1990",
	});
	const [songs, setSongs] = useState([
		{
			title: "Ride On Time",
			artist: "Tatsuro Yamashita",
			image: [
				{
					url: "https://i.scdn.co/image/ab67616d0000b273e208bc6b63da331f012e0382",
					height: 640,
					width: 640,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00001e02e208bc6b63da331f012e0382",
					height: 300,
					width: 300,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00004851e208bc6b63da331f012e0382",
					height: 64,
					width: 64,
				},
			],
			year: "1990",
		},
	]);
	const rangeYear = parseInt(year) + 10;

	useEffect(() => {
		const authParams = {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
		};

		fetch("https://accounts.spotify.com/api/token", authParams)
			.then((response) => response.json())
			.then((data) => setAccessToken(data.access_token));
	}, []);

	useEffect(() => {
		try {
			const qParams = {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken}`,
				},
			};
			async function getData() {
				if (genre !== "") {
					const fetching = await fetch(
						`https://api.spotify.com/v1/search?q=genre%3A${genre}&type=track&limit=50`,
						qParams
					);
					const data = await fetching.json();

					// setSongsData(data.tracks.items);

					const tracks = data.tracks.items.filter((song) => {
						const yearOfSong = parseInt(
							song.album.release_date.substring(0, 4)
						);
						return yearOfSong >= year && yearOfSong <= rangeYear;
					});

					const tracksDetail = tracks.map((track) => ({
						title: track.name,
						artist: track.artists[0].name,
						album: track.album.name,
						image: track.album.images,
						year: track.album.release_date.substring(0, 4),
					}));

					if (tracksDetail.length > 0) {
						const uniqueTracksDetail = tracksDetail.filter((trackDetail) => {
							return !songs.some((song) => song.title === trackDetail.title);
						});

						const randomIndex = Math.floor(
							Math.random() * uniqueTracksDetail.length
						);
						const randomSong = uniqueTracksDetail[randomIndex];

						setRandomSongs(randomSong);

						setSongs((prevSongs) => [randomSong, ...prevSongs]);
					}
				} else {
					null;
				}
			}
			getData();

			async function searchYoutube() {}
		} catch (error) {
			console.log("Error", error);
		}
	}, [genre, accessToken, year, rangeYear, handleRandom]);

	const handleClick = (display) => {
		setIsShowing(display);
	};

	const handleClose = (active, visible) => {
		setIsShowing(visible);
	};

	const handleSubmit = (inputGenre, inputYear, visible) => {
		setGenre(inputGenre);
		setYear(inputYear);
		setIsShowing(visible);
	};

	const handleButton = (params) => {
		setHandleRandom(!params);
	};

	return (
		<main className='h-screen w-full relative'>
			{/* <Sidebar /> */}
			<Header setVisible={handleClick} />
			<Player handleClick={handleButton} />
			<Song playlist={songs} />
			{isShow ? (
				<>
					<Input activeState={handleClose} filters={handleSubmit} />
				</>
			) : null}
		</main>
	);
}

export default App;
