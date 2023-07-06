import React from 'react'

function Pagination(props) {

    let {pageNumProp, onNextProp , onPrevProp} = props;
  return (
    <div className='flex justify-center my-4'>

        <div onClick={onPrevProp} className='border-2 broder-r-0 p2 rounded-l-xl border-blue-400'>
            Previous
        </div>


        <div className='border-2 border-blue-400 broder-r-0 '>
            {pageNumProp}
        </div>



        <div onClick={onNextProp} className='border-2 p2 rounded-r-xl border-blue-400'>
            Next
        </div>
    </div>
  )
}

export default Pagination