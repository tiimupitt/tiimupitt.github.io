export default function Sidebar() {
    return (
        <div className="bg-lime-900 p-12 flex flex-col gap-8 h-full w-sm justify-center">
            <div className="flex flex-col gap-2">
                <h1 className="font-mono text-5xl whitespace-nowrap font-black text-shadow-lg">Tiimu Pitt</h1>
                <span className="font-mono text-2xl whitespace-nowrap font-bold">Software Engineer</span>
            </div>
            <p className="font-mono text-sm">I am a technically minded creative professional with a broad spectrum of skills in computing. I coded audio software at university and have been working professionally as a software engineer since with a focus on frontend.</p>
            <div className="flex flex-col gap-2 text-sm">
                <span className="font-mono font-bold">tiimupitt@gmail.com</span>
                <span className="font-mono">Brighton, East Sussex</span>
            </div>
            <div className="bg-white shadow-md rounded-md p-6 pb-16 w-60 mx-auto rotate-2">
                <div className="aspect-square h-full rounded-sm bg-gray-300 inset-shadow-sm"></div>
            </div>
        </div>
    )
}