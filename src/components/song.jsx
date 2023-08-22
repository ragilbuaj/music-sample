import "../App.css";

function Song({playlist}) {
	return (
		<section className='w-full max-h-[300px] flex flex-col gap-1 items-center text-white font-poppins overflow-y-auto no-scrollbar'>
			{playlist.map((song, index) => (
				<div
					key={("track-", index)}
					className='w-11/12 border border-slate-800 rounded p-3 flex items-center justify-start'
				>
					<img className='w-[40px] h-[40px]' src={song.image[2].url} alt='' />
					<div className='w-full flex flex-col items-start justify-center text-left ml-5'>
						<h2 className='text-[12px] w-1/2'>{song.title}</h2>
						<p className='text-[10px] text-slate-400 text-left'>
							{song.artist}
						</p>
					</div>
					<p className='text-[10px] text-slate-400'>{song.year}</p>
				</div>
			))}
		</section>
	);
}

export default Song;
