// import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between items-center pt-[22px]">
                <img src="/Logo.svg" alt="" />

                <div>
                    <div>
                        <input className="bg-transparent border-2 rounded w-[525px] border-[#D1D5DB] h-10 placeholder:text-[#FFF] placeholder:p-5" type="search" placeholder="what do you want to watch?" 
                            
                        />
                        {/* <img src="/Search.svg" alt="" /> */}
                    </div>
                </div>

                <div className="flex items-center gap-[27px]">
                    <h1 className="cursor-pointer">Sign In</h1>
                    <img className="cursor-pointer" src="/Menu.svg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Navbar