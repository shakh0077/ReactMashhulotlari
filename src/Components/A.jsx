import React, { useContext } from 'react'
import { GlobalContext } from '../App'

const A = () => {

  function onDelete(id) {
    let res = data.filter(v=>v.id !== id)
  }
    let {data,setData} = useContext(GlobalContext)
  return (
    <>
    <div className='container_nav flex flex-col gap-2 max-w-sm mx-0'>
      {
        data.map(v=>
          <div key={v.id} className='bg-cyan-400 flex justify-between items-center  p-2.5 rounded-2xl text-white'>
            {v.id} {v.name} <span onClick={()=>setData(v.id)}>close</span>
          </div>
        )
      }
    </div>
    </>
  )
}

export default A