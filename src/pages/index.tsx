import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import {
  faInstagram, faLinkedin, faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { Link } from "gatsby";

// redirects
const redirects = {
  instagram: "https://instagram.com/softwarebuilds",
}

// markup
const IndexPage = () => {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center">
      <title>PLK</title>
      <div className="text-white flex justify-center items-center flex-1 max-w-2xl">
        <div className="p-5">
          <div className="hover:scale-105 hover:rotate-6 transition-transform mx-auto border-red-800 border-8 m-10 h-32 w-32 md:h-32 md:w-32 overflow-hidden rounded-full align-middle">
            <img className="w-full" src={'./static/logo.png'} alt="" />
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <h1 className="flex items-center font-bold">Software Builds</h1>
            <a href={redirects.instagram} target="_blank">
                <FontAwesomeIcon 
                  icon={faInstagram as IconProp} 
                  size="2x" 
                  className="transition-transform hover:scale-125 hover:text-pink-500" 
                />
              </a>
          </div>
          <hr className="my-4" />
          <ul className="font-mono text-xs md:text-base">
            <li>
              👋 Hi, I’m <a href="https://github.com/software-builds" target="_blank" className="text-blue-300">
                @software-builds
              </a> and i’m...
            </li>
            <li>👀 interested in programming languages and techonolgies.</li>
            <li>🌱 learning terraforming, java and php constructions.</li>
            <li>💞️ looking to collaborate on huge, small and own projects.</li>
          </ul>
            <div className="flex justify-around">
              {/* <Link className="hover:text-red-400" to="impressum">Impressum</Link> */}
              {/* <Link className="hover:text-red-400" to="datenschutz">Datenschutz</Link> */}
            </div>
          <hr className="my-4" />
        </div>
      </div>
      <div className="w-full flex h-2">
        <div className="bg-red-600 flex-1"></div>
        <div className="bg-yellow-600 flex-1"></div>
        <div className="bg-yellow-400 flex-1"></div>
        <div className="bg-green-600 flex-1"></div>
        <div className="bg-blue-600 flex-1"></div>
        <div className="bg-purple-600 flex-1"></div>
      </div>
    </main>
  )
}

export default IndexPage
