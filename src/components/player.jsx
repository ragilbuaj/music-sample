import "../App.css";
import React from "react";
import Youtube from "react-youtube";

function Player() {
	return (
		<section className='w-full my-3 flex flex-col gap-5 items-center justify-center'>
			<Youtube
				className='w-full flex items-center justify-center'
				iframeClassName='w-11/12 h-[250px] rounded-xl shadow-sm shadow-slate-500'
				videoId='7maJOI3QMu0'
			/>
			<button className='w-11/12 flex items-center justify-center border border-slate-500 rounded py-1'>
				<svg
					fill='#ffff'
					width='25px'
					height='25px'
					viewBox='0 0 32 32'
					version='1.1'
					xmlns='http://www.w3.org/2000/svg'
					// stroke='#8a8a8a'
				>
					<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
					<g
						id='SVGRepo_tracerCarrier'
						strokeLinecap='round'
						strokeLinejoin='round'
					></g>
					<g id='SVGRepo_iconCarrier'>
						{" "}
						<title>random</title>{" "}
						<path d='M0 24q0 0.832 0.576 1.44t1.44 0.576h1.984q2.048 0 3.904-0.8t3.168-2.144 2.144-3.2 0.8-3.872q0-2.464 1.728-4.224t4.256-1.76h4v1.984q0 0.672 0.384 1.152t0.864 0.704 1.12 0.128 1.056-0.544l4-4q0.608-0.64 0.576-1.44t-0.576-1.408l-4-4q-0.48-0.448-1.088-0.544t-1.12 0.128-0.864 0.704-0.352 1.12v2.016h-4q-2.016 0-3.872 0.8t-3.2 2.112-2.144 3.2-0.768 3.872q0 2.496-1.76 4.256t-4.256 1.76h-1.984q-0.832 0-1.44 0.576t-0.576 1.408zM0 8.032q0 0.832 0.576 1.408t1.44 0.576h1.984q1.408 0 2.592 0.608t2.080 1.664q0.672-2.048 1.984-3.68-2.912-2.592-6.656-2.592h-1.984q-0.832 0-1.44 0.608t-0.576 1.408zM13.376 23.456q2.848 2.56 6.624 2.56h4v2.016q0 0.64 0.384 1.152t0.864 0.704 1.12 0.096 1.056-0.544l4-4q0.608-0.608 0.576-1.44t-0.576-1.376l-4-4q-0.48-0.48-1.088-0.576t-1.12 0.128-0.864 0.736-0.352 1.12v1.984h-4q-1.376 0-2.592-0.576t-2.048-1.664q-0.704 2.048-1.984 3.68z'></path>{" "}
					</g>
				</svg>
			</button>
		</section>
	);
}

export default Player;
