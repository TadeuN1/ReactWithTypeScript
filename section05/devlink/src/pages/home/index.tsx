import { Social } from "../../components/Social"
import { FaFacebook, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa"


export function Home(){

    return(
        <div className="flex flex-col w-full py-4 items-center justify-center" >
            <h1 
            className=" md:text-4xl text-3xl font-bold text-white mt-20">
            MrNeres.</h1>
            <span className="text-gray-50 mb-5 mt-3"> Veja meus links 👇 </span>

            <main className="flex flex-col w-11/12 text-center">
                    <section className="bg-white mb-4 w-full py-2 rounded-lg select-none
                    transition-transform hover:scale-105 cursor-pointer">
                        <a>
                            <p className="text-base md:text-lg">
                                Canal no Youtube
                            </p>
                        </a>
                        
                    </section>

                    <section className="bg-white mb-4 w-full py-2 rounded-lg select-none
                    transition-transform hover:scale-105 cursor-pointer">
                        <a>
                            <p className="text-base md:text-lg">
                                Nosso Blog
                            </p>
                        </a>
                        
                    </section>

                    <footer className="flex justify-center gap-3 my-4">
                            <Social url="/">
                                <FaFacebook size={35} color="#FFF"/>
                            </Social>
                            <Social url="/">
                                <FaInstagram size={35} color="#FFF"/>
                            </Social>
                            <Social url="/">
                                <FaYoutube size={35} color="#FFF"/>
                            </Social>
                            <Social url="/">
                                <FaGithub size={35} color="#FFF"/>
                            </Social>
                    </footer>
            </main>
        </div>
    )
}