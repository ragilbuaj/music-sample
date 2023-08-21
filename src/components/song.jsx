import "../App.css";

function Song() {
	return (
		<section className='w-full flex flex-col items-center justify-center text-white font-poppins'>
			<div className='w-11/12 border border-slate-800 rounded p-3 flex items-center justify-start'>
				<img src='https://placehold.co/40x40' alt='' />
				<div className='w-full flex flex-col items-start justify-center text-left ml-5'>
					<h2 className='text-[12px] w-1/2'>Judul Lagu</h2>
					<p className='text-[10px] text-slate-400 text-left'>Penyanyi</p>
				</div>
				<p className='text-[10px] text-slate-400'>1945</p>
			</div>
		</section>
	);
}

export default Song;
