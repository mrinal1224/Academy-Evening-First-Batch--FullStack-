import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[60vh] bg-center bg-no-repeat flex items-end'
    style={{
        backgroundImage : `url(https://assets-in.bmscdn.com/discovery-catalog/events/et00311714-ewdhvajezf-landscape.jpg)`
    }}>


        <div className='text-xl md:text-3xl bg-gray-900 bg-opacity-60 p-4 text-white text-center w-full'>
            John Wick
        </div>
       


    </div>
  )
}

export default Banner