import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faHome
  } from '@fortawesome/free-solid-svg-icons';
import { Link } from "gatsby";

// markup
const Impressum = () => {
    return (
        <main className="min-h-screen p-5 flex flex-col justify-center items-center text-white bg-gray-900">
            <Link className="m-10" to="/">
                <FontAwesomeIcon className="transition-transform hover:text-green-400 hover:scale-125" icon={faHome} />
            </Link>
            <div className="font-mono">
                <h1 className="font-bold text-lg">Impressum</h1>
                <hr className="my-3" />
                <h2 className="text-lg">📃 Angaben gemäß § 5 TMG</h2>
                <ul className="mx-10 my-4 leading-8">
                    <li>Phil Leon Kersting</li>
                    <li>Lüdinghauser Str. 15</li>
                    <li>59394 Nordkirchen</li>
                </ul>
                <h2 className="text-lg">📃 Kontakt</h2>
                <ul className="mx-10 my-4 leading-8">
                    <li>📞 +4915735500279</li>
                    <li>📧 pl.kersting@t-online.de</li>
                </ul>

                <p className="pt-5 text-xs md:text-lg">Quelle: <a href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a></p>
            </div>
        </main>
    )
}

export default Impressum;