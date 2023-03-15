import { useReducer } from "react";

export default function Date() {

  const initialLoginState = {
    para: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    para2: 15,
    para3: 5
  }

  function reducer(state: any, action: any) {
    switch (action.type) {
      case "Sun":
        return { ...state, para: "fooBar", para2: 12, para3: 1 };
      case "Mon":
        return { ...state, para: "barfoo", para2: 13, para3: 2 };
      case "Tue":
        return { state, para: "firstUpdated", para2: 14, para3: 3 };
      case "Wed":
        return { state, para: "Lorem ipsum dolor, sit amet consectetur adipisicing.", para2: 15, para3: 5 };
      case "Thu":
        return { state, para: "Lorem ipsum dolor sit amet.", para2: 16, para3: 4 };
      case "Fri":
        return { state, para: "Lorem ipsum dolor sit.", para2: 17, para3: 6 };
      case "Sat":
        return { state, para: "Lorem ipsum dolor sit amet consectetur.", para2: 18, para3: 7 };
      default:
        throw new Error();
    }
  }

  const [states, dispatch] = useReducer(reducer, initialLoginState)


  return (
    <div>
      <div className="text-white mt-2 ml-3 mr-3 p-2 sm:place-items-center">

        <ul className="flex">
          <li className="ml-1 p-0.5 hover:bg-green-100
                hover:text-black focus:outline focus:ring focus:ring-green-300" onClick={() => dispatch({ type: "Sun" })}>Sun</li>
          <li className="ml-2 p-0.5 hover:bg-green-100
                hover:text-black focus:outline focus:ring focus:ring-green-300" onClick={() => dispatch({ type: "Mon" })}>Mon</li>
          <li className="ml-2 p-0.5 hover:bg-green-100
                hover:text-black focus:outline focus:ring focus:ring-green-300" onClick={() => dispatch({ type: "Tue" })}>Tue</li>
          <li className="ml-2 p-0.5 hover:bg-green-100
                hover:text-black focus:outline focus:ring focus:ring-green-300" onClick={() => dispatch({ type: "Wed" })}>Wed</li>
          <li className="ml-2 p-0.5 hover:bg-green-100
                hover:text-black focus:outline focus:ring focus:ring-green-300" onClick={() => dispatch({ type: "Thu" })}>Thu</li>
          <li className="ml-3 p-0.5 hover:bg-green-100
                hover:text-black focus:outline focus:ring focus:ring-green-300" onClick={() => dispatch({ type: "Fri" })}>Fri</li>
          <li className="ml-3 p-0.5 hover:bg-green-100
                hover:text-black " onClick={() => dispatch({ type: "Sat" })}>Sat</li>
        </ul>
        <ul className="flex">
          <li className="ml-2">12</li>
          <li className="ml-6">13</li>
          <li className="ml-6">14</li>
          <li className="ml-6">15</li>
          <li className="ml-6">16</li>
          <li className="ml-6">17</li>
          <li className="ml-4 p-0.5 hover:bg-green-100
                hover:text-black">18</li>
        </ul>

      </div>
      <div className="bg-indigo-200 mt-3 ml-3 mr-3 rounded">

        <div className="flex">
          <button className="bg-white ml-3 p-2 px-4 mt-2 rounded-full shadow text-sm bg-indigo-200 hover:bg-yellow-400 active:bg-red-700 focus:outline-none focus:ring focus:ring-green-300">High</button>
          <span className="ml-44 mt-3 flex items-center justify-center w-6 h-6 bg-zinc-100 rounded-full dark:bg-zinc-100">
            <svg aria-hidden="true" className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>
          </span>
        </div>

        <p className="text-black text-xl mt-1 p-1 ml-3 py-3 sm:place-items-center"> {states.para} </p>
        {/* March Dribble Shots Design, Plan For the month */}

        <div className="flex ml-3 p-1 mt-1">
          <span className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full dark:bg-blue-900">
            <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
          </span>
          <p className="ml-2"> {states.para2} Mar</p>
        </div>


        <div className="flex mt-2 ml-5 pb-3">
          <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile" />

          <span className=" ml-40 mt-1">
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"></path>
            </svg>

          </span>
          <p className="ml-1"> {states.para3} </p>
          <span className="ml-4 mt-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"></path>
            </svg>
          </span>
          <p className="ml-1">16</p>
        </div>

      </div>

      <div className="bg-zinc-500 mt-3 ml-3 mr-3 p-1 rounded">

        <div className="flex">
          <button className="bg-zinc-400 mt-2 ml-3 p-2 rounded-full shadow text-sm">Medium</button>
          <span className="ml-40 mt-3 flex items-center justify-center w-6 h-6 bg-zinc-400 rounded-full dark:bg-zinc-100">
            <svg aria-hidden="true" className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>
          </span>
        </div>

        <p className="text-lg mt-1 p-2 ml-3 mb-3 py-3"> {states.para} Create the "Blog" and "Product" pages for the Fortroom website</p>

        <div className="flex ml-3 p-2 mt-1">
          <span className="flex items-center justify-center w-6 h-6 bg-zinc-400 rounded-full dark:bg-zinc-900">
            <svg aria-hidden="true" className="w-3 h-3 text-zinc-800 dark:text-zinc-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
          </span>
          <p className="ml-2"> {states.para2} Mar - 11:00 PM</p>
        </div>

      </div>

    </div>
  )
}