
export default function PaginationRounded() {
    return (
        <div className="w-[215px] h-[35px] relative">
            <div className="w-[35px] h-[35px] left-0 top-0 absolute bg-green-500 rounded" />
            <div className="w-[35px] h-[35px] left-[45px] top-0 absolute rounded border border-neutral-200" />
            <div className="w-[35px] h-[35px] left-[90px] top-0 absolute rounded border border-neutral-200" />
            <div className="w-[35px] h-[35px] left-[135px] top-0 absolute rounded border border-neutral-200" />
            <div className="w-[35px] h-[35px] left-[180px] top-0 absolute rounded border border-neutral-200" />
            <div className="left-[14px] top-[10px] absolute text-white text-lg font-bold font-['Cera Pro'] leading-none">
                1
            </div>
            <div className="left-[58px] top-[9px] absolute text-neutral-700 text-lg font-light font-['Cera Pro'] leading-none">
                2
            </div>
            <div className="left-[102px] top-[9px] absolute text-neutral-700 text-lg font-light font-['Cera Pro'] leading-none">
                3
            </div>
            <div className="left-[148px] top-[9px] absolute text-neutral-700 text-lg font-light font-['Cera Pro'] leading-none">
                4
            </div>
            <div className="w-[18px] h-[18px] py-[3.75px] left-[189px] top-[9px] absolute justify-center items-center inline-flex" />
        </div>
    );
}
