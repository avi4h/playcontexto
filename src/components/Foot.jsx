import React from "react"

export default function Foot({setIsFaqDetailedOpen, stage}) {
    return (
        <>
        { stage === 0 && <div className="flex flex-col justify-start items-center w-full mb-[40px] sm:mb-[40px] md:mb-[60px] lg:mb-[60px]" onClick={() => setIsFaqDetailedOpen(true)}>
            <p className="text-base font-bold hover:bg-con-600 cursor-pointer px-3 py-[6px] rounded">Read More...</p>
        </div> }
        { stage !== 0 && <div className="w-full mb-[40px] sm:mb-[40px] md:mb-[60px] lg:mb-[60px]"></div>}
        </>
    )
}

