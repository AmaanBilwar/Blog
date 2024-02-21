import React from 'react'

const App = () => {
  return (

    <div>
      <div className="main h-screen bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        
        <div className="text">
        <div class="mb-6">
    <label for="default-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center pt-10">Start typing....</label>
    <div className="content"> 
    {/* make the text in the box align center */}
          <h1 className=' pt-20 block w-full mt-10 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Blog away!!'>posts made in the same day show up here</h1>
        </div>
    {/* change width of input and align center */}
    <input type="text" id="default-input" className=" block w-full mt-10 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Blog away!!'></input>
    <div className="button-posts grid place-content-center pt-10">
    <button class=" relative inline-flex items-center justify-center pl-5 pt-2 pb-2 pr-5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
Post</button>
    </div>
</div>
        </div>
      </div>
    </div>
  )
}

export default App
