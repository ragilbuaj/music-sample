import "../App.css";
import React, {useState} from "react";

function Input({activeState}) {
	const [isShow, setIsShow] = useState(true);

	const handleClose = (display) => {
		setIsShow(display);
		activeState(display);
	};

	return (
		<article
			className={`${
				isShow ? "block" : "hidden"
			} absolute w-10/12 h-1/2 top-32 left-[34.5px] text-white font-poppins bg-bgblack rounded-xl shadow shadow-slate-800 flex flex-col items-start justify-start p-5`}
		>
			<section className='w-full flex items-center justify-between'>
				<h3 className='font-anton tracking-wider text-xl'>Filters</h3>
				<button onClick={() => handleClose(!isShow)}>
					<svg
						width='30px'
						height='30px'
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
			<div className='w-full flex flex-col gap-1'>
				<label htmlFor='genre'>Genre</label>
				<select
					className='text-black w-full h-[35px] rounded'
					name='genre'
					id='genre'
				>
					<option value=''>Pop</option>
					<option value=''>Rock</option>
					<option value=''>Metal</option>
					<option value=''>Jazz</option>
					<option value=''>Instrumental</option>
					<option value=''>Punk</option>
					<option value=''>R&B</option>
					<option value=''>Hip-Hop</option>
					<option value=''>Rap</option>
					<option value=''>Country</option>
					<option value=''>Indie</option>
					<option value=''>Folk</option>
					<option value=''>Blues</option>
					<option value=''>Classical</option>
				</select>
			</div>
			<div className='w-full flex flex-col gap-1 mt-2'>
				<label htmlFor='year'>Year</label>
				<input
					className='rounded text-black h-[35px]'
					type='number'
					name='year'
					id='year'
					required
				/>
			</div>
			<button className='bg-slate-500 self-center mt-10 w-1/3 h-10 rounded-md'>
				Save
			</button>
		</article>
	);
}

export default Input;
