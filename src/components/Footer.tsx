import React from "react";



const Footer: React.FC = () => {
    return (
        <footer className="m-4 rounded-lg shadow" style={{ backgroundColor: '#33587d' }}>
            <div className="w-full max-w-screen-xl p-4 mx-auto md:flex md:items-center md:justify-between">
                <span className="text-sm text-black sm:text-center">© 2024 <a href="" className="text-black hover:underline">Licdo. Jorge Cornejo</a></span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
                    

                </ul>
            </div>
        </footer>
    );
};

export default Footer;
