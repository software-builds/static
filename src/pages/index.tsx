import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import {
  faInstagram, faLinkedin, faTwitter
} from '@fortawesome/free-brands-svg-icons';

// redirects
const redirects = {
  twitter: "https://twitter.com/lamacode0",
  instagram: "https://instagram.com/philleonkersting",
  linkedin: "https://www.linkedin.com/in/phil-leon-kersting-ba6866220/"
}

// markup
const IndexPage = () => {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center">
      <title>PLK</title>
      <div className="text-white flex justify-center items-center flex-1 max-w-2xl">
        <div className="p-5">
          <div className="hover:scale-105 hover:rotate-6 transition-transform mx-auto border-red-800 border-8 m-10 h-52 w-52 overflow-hidden rounded-full align-middle">
            <img className="w-full" src={'./static/logo.jpg'} alt="" />
          </div>
          <h1 className="font-bold">Phil Leon Kersting</h1>
          <hr className="my-4" />
          <ul className="font-mono text-sm md:text-lg">
            <li>
              👋 Hi, I’m <a href="https://github.com/lamacode" target="_blank" className="text-blue-300">
                @lamacode
              </a> and i’m...
            </li>
            <li>👀 interested in programming languages and techonolgies.</li>
            <li>🌱 learning terraforming, java and php constructions.</li>
            <li>💞️ looking to collaborate on huge, small and own projects.</li>
          </ul>
          <hr className="my-4" />
          <ul className="flex">
            <li className="flex-1">
              <a href={redirects.instagram} target="_blank">
                <FontAwesomeIcon 
                  icon={faInstagram as IconProp} 
                  size="2x" 
                  className="transition-transform hover:scale-125 hover:text-pink-500" 
                />
              </a>
            </li>
            <li className="text-center flex-1">
              <a href={redirects.linkedin} target="_blank">
                <FontAwesomeIcon 
                  icon={faLinkedin as IconProp}
                  className="transition-transform hover:scale-125 hover:text-blue-500" 
                  size="2x" 
                />
              </a>
            </li>
            <li className="text-right flex-1">
              <a href={redirects.twitter} target="_blank">
                <FontAwesomeIcon 
                  icon={faTwitter as IconProp} 
                  className="transition-transform hover:scale-125 hover:text-blue-500" 
                  size="2x" 
                  />
              </a>
            </li>
          </ul>
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
