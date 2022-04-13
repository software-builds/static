import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as React from "react"
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import {
  faInstagram, faTwitter, faYoutube
} from '@fortawesome/free-brands-svg-icons';

// markup
const IndexPage = () => {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center">
      <title>PLK</title>
      <div className="text-white flex justify-center items-center flex-1 max-w-2xl">
        <div className="p-5">
          <div className="hover:scale-105 transition-transform mx-auto border-red-800 border-8 m-10 h-52 w-52 overflow-hidden rounded-full align-middle">
            <img className="w-full" src={'./static/logo.jpg'} alt="" />
          </div>

          <h1 className="font-bold">Phil Leon Kersting</h1>
          <hr className="my-4" />

          <ul className="font-mono">
            <li>
              👋 Hi, I’m <a href="https://github.com/lamacode" target="_blank" className="text-blue-300">@lamacode</a> and i’m...
            </li>
            <li>👀 interested in programming languages and techonolgies.</li>
            <li>🌱 learning terraforming, java and php constructions.</li>
            <li>💞️ looking to collaborate on huge, small and own projects.</li>
          </ul>
          <hr className="my-4" />

          <ul className="flex">
            <li className="flex-1">
              <a href="https://instagram.zahlenip.de/" target="_blank">
                <FontAwesomeIcon icon={faInstagram as IconProp} size="2x" />
              </a>
            </li>
            <li className="text-center flex-1">
              <a href="https://youtube.zahlenip.de/" target="_blank">
                <FontAwesomeIcon icon={faYoutube as IconProp} className="hover:text-red-500" size="2x" />
              </a>
            </li>
            <li className="text-right flex-1">
              <a href="https://twitter.zahlenip.de/" target="_blank">
                <FontAwesomeIcon icon={faTwitter as IconProp} className="hover:text-blue-500" size="2x" />
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
