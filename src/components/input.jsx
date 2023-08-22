import "../App.css";
import React, {useState} from "react";

function Input({activeState, filters}) {
	const [isShow, setIsShow] = useState(true);
	const [open, setOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState("");
	const [inputYear, setInputYear] = useState(null);
	const arrGenre = [
		{genre: "Pop"},
		{genre: "Rock"},
		{genre: "Metal"},
		{genre: "Jazz"},
		{genre: "Classical"},
		{genre: "Instrumental"},
		{genre: "Blues"},
		{genre: "Country"},
		{genre: "Folk"},
		{genre: "Indie"},
		{genre: "Rap"},
		{genre: "Hip-Hop"},
		{genre: "R&B"},
		{genre: "Punk"},
	];

	const handleClose = (display, visible) => {
		setIsShow(display);
		activeState(visible);
		setOpen(false);
	};

	const handleClick = (click) => {
		setOpen(click);
	};

	const handleSelected = (item) => {
		setSelectedValue(item);
		setOpen(false);
	};

	const handleSubmit = (genre, year, visible) => {
		filters(genre, year);
		setIsShow(false);
	};

	return (
		<article
			className={`${
				isShow ? "block" : "hidden"
			} absolute w-10/12 h-1/2 top-32 left-[34.5px] text-white font-poppins bg-bgblack rounded-xl shadow shadow-slate-800 flex flex-col items-start justify-start p-5`}
		>
			<section className='w-full flex items-center justify-between'>
				<h3 className='font-anton tracking-wider text-xl'>Filters</h3>
				<button onClick={() => handleClose(!isShow, false)}>
					<svg
						width='30px'
						height='30px'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
						<g
							id='SVGRepo_tracerCarrier'
							strokeLinecap='round'
							strokeLinejoin='round'
						></g>
						<g id='SVGRepo_iconCarrier'>
							{" "}
							<path
								opacity='0.5'
								d='M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
								fill='#ffffff'
							></path>{" "}
							<path
								d='M8.96967 8.96967C9.26256 8.67678 9.73744 8.67678 10.0303 8.96967L12 10.9394L13.9697 8.96969C14.2626 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0304L13.0607 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0304 15.0303C9.73746 15.3232 9.26258 15.3232 8.96969 15.0303C8.6768 14.7374 8.6768 14.2626 8.96969 13.9697L10.9394 12L8.96967 10.0303C8.67678 9.73744 8.67678 9.26256 8.96967 8.96967Z'
								fill='#ffffff'
							></path>{" "}
						</g>
					</svg>
				</button>
			</section>
			<hr className='w-full border-sm border-slate-500 my-4' />
			<div className='w-full flex flex-col gap-1 relative'>
				<label htmlFor='genre'>Genre</label>
				<div
					className='text-black bg-white w-full h-[35px] flex justify-between items-center px-3 py-1 rounded'
					onClick={() => handleClick(!open)}
				>
					{selectedValue ? selectedValue : "Select a genre"}
					<svg
						width='25px'
						height='25px'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
						<g
							id='SVGRepo_tracerCarrier'
							strokeLinecap='round'
							strokeLinejoin='round'
						></g>
						<g id='SVGRepo_iconCarrier'>
							{" "}
							<path
								d='M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z'
								fill='#0F0F0F'
							></path>{" "}
						</g>
					</svg>
				</div>
				<div
					className={`${
						open ? "block" : "hidden"
					} w-full h-[100px] text-black bg-white rounded px-3 py-1 overflow-y-auto top-16 absolute`}
				>
					<ul>
						{arrGenre.map((item, index) => (
							<li
								key={("genre-", index)}
								onClick={() => handleSelected(item.genre)}
							>
								{item.genre}
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='w-full flex flex-col gap-1 mt-2'>
				<label htmlFor='year'>Year</label>
				<input
					className='rounded text-black h-[35px] px-3 py-1'
					type='number'
					name='year'
					id='year'
					onChange={(e) => setInputYear(e.target.value)}
					required
				/>
			</div>
			<button
				className='bg-slate-500 self-center mt-10 w-1/3 h-10 rounded-md'
				onClick={() => handleSubmit(selectedValue, inputYear, !isShow)}
			>
				Save
			</button>
		</article>
	);
}

export default Input;
