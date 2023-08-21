import "../App.css";
import React, {useState} from "react";

function Header({setVisible}) {
	const handleClick = (display) => {
		setVisible(display);
	};

	return (
		<header className='text-white font-poppins py-4 px-5 flex items-center justify-between'>
			<h1 className='text-xl font-anton tracking-wide'>
				<a href='#'>MusicSample.</a>
			</h1>
			<button onClick={() => handleClick(true)}>
				<svg
					width='25px'
					height='25px'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
					<g
						id='SVGRepo_tracerCarrier'
						stroke-linecap='round'
						stroke-linejoin='round'
					></g>
					<g id='SVGRepo_iconCarrier'>
						{" "}
						<path
							d='M22 6.5H16'
							stroke='#ffffff'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						></path>{" "}
						<path
							d='M6 6.5H2'
							stroke='#ffffff'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						></path>{" "}
						<path
							d='M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z'
							stroke='#ffffff'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						></path>{" "}
						<path
							d='M22 17.5H18'
							stroke='#ffffff'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						></path>{" "}
						<path
							d='M8 17.5H2'
							stroke='#ffffff'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						></path>{" "}
						<path
							d='M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z'
							stroke='#ffffff'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						></path>{" "}
					</g>
				</svg>
			</button>
		</header>
	);
}

export default Header;
