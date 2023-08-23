import "./App.css";
import React, {useState, useEffect} from "react";
import axios from "axios";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Player from "./components/player";
import Song from "./components/song";
import Input from "./components/input";
import {data} from "autoprefixer";

const clientId = "97d4afb8b0444284a2c618f1f6cb4feb";
const clientSecret = "c0fd59f9d9ac4383ad54885c0b827376";

function App() {
	const [isShow, setIsShowing] = useState(false);
	const [genre, setGenre] = useState("");
	const [year, setYear] = useState(null);
	const [accessToken, setAccessToken] = useState("");
	const [handleRandom, setHandleRandom] = useState(false);
	const [videos, setVideos] = useState("FKGy14ylwMk");
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
	let query = "";

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

			query = "";

			for (let title = 0; title < songs[0].title.length; title++) {
				if (songs[0].title[title] === " ") {
					query += "%20";
				} else {
					query += songs[0].title[title];
				}
			}
			for (let artist = 0; artist < songs[0].artist.length; artist++) {
				if (songs[0].artist[artist] === " ") {
					query += "%20";
				} else {
					query += songs[0].artist[artist];
				}
			}

			async function searchYoutube() {
				const options = {
					method: "GET",
					headers: {
						"X-RapidAPI-Key":
							"c1f6b76c1cmshab8c206e0c38c92p189ba5jsnc9f59dc6582f",
						"X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
					},
				};

				const url = `https://youtube-search-and-download.p.rapidapi.com/search?query=${query}&type=v&sort=r`;
				const response = await fetch(url, options);
				const data = await response.json();
				setVideos(data.contents[0].video.videoId);
			}

			searchYoutube();
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
			<Player handleClick={handleButton} videoId={videos} />
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
