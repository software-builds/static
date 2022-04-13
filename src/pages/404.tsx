import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import * as React from "react"

import {
  faHome
} from '@fortawesome/free-solid-svg-icons';

// markup
const NotFoundPage = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <title>Not found</title>

      <div className="text-center font-bold text-4xl uppercase">
        <h1 className="my-5">
          Not found
        </h1>
        <Link to="/">
          <FontAwesomeIcon className="transition-transform hover:text-green-400 hover:scale-125" icon={faHome} />
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
