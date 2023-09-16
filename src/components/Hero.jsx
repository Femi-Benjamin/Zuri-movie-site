// import React from 'react'
import Navbar from "../layout/Navbar";
import Movie from "../components/Movie";
const Hero = () => {
	return (
		<div className="">
			<div className="h-[600px] px-[95px] bg-[url('/public/poster.svg')] text-white">
				<Navbar />

				<div className="mt-16 font-sans">
					<h1 className="not-italic text-[#FFF] font-bold text-6xl leading-[70px] mb-7">John Wick 3 : <br /> Parabellum</h1>

					<div className="flex gap-[34px] pb-5">
						<img src="IMDB.svg" alt="" />
						<img src="Rotten Tomatoes.svg" alt="" />
					</div>

					<p className="text-[#FFF] text-[20px] font-medium pb-9">John Wick is on the run after killing a member <br /> of the international assassins guild, and with <br /> a $14 million price tag on his head, he is the target of the <br /> hit men and women everywhere.</p>
				</div>

				<button className="bg-[#BE123C] flex items-center w-[180px] h-[40px] p-6 justify-between rounded-[6px]">
					<img src="/Play.svg" alt="" />
					<h1>Watch trailer</h1>
				</button>
			</div>
			<Movie />
		</div>
	);
};

export default Hero;
