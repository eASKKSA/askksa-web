

export default function Navbar() {
    const nav_links = {
        "Notícias": "/",
        "Quem Somos": "quem_somos",
        "No Dojo": "dojo",
        "História": "historia",
        "Filosofia": "filosofia",
        "Shotokan SKI": "shotokan_ski",
    };

    const linksArray = Object.entries(nav_links);
    const middleIndex = Math.floor(linksArray.length / 2);

    return (
        <nav className="fixed top-0 left-0 w-full flex justify-center" style={{
            backgroundImage: "radial-gradient(circle at center, rgba(0, 0, 0) 32em, transparent 55em)"
        }}>
            <div className="flex items-center text-white text-lg font-semibold gap-8 container justify-center ">
                {linksArray.map(([name, url], index) => (
                    <>
                        {/* Insert logo at the middle index */}
                        {index === middleIndex && (
                            <img src={"askksa_logo.svg"} alt="askksa logo" className="h-52 py-5 z-30"/>
                        )}
                        <a href={"" + url} className="font-bold p-4 hover:text-gray-300 text-[#A4262C]">{name}</a>
                    </>
                ))}
            </div>
        </nav>
    );
}