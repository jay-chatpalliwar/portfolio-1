function Navigation() {
    return (
        <div className = "w-screen h-[52px] text-[18px] flex text-white justify-between items-center px-[12rem] bg-black fixed">
            <div className='cursor-pointer font-semibold text-[19px] text-slate-300 border-dashed border-slate-300 border-b-2'>
                Jay S. Chatpalliwar
            </div>
            <div className = 'flex justify-between items-center text-[17px] gap-8'>
                <div>HOME</div>
                <div>ABOUT</div>
                <div>CONTACT</div>
                <div>RESUME</div>
            </div>
        </div>
    )
}

export default Navigation;