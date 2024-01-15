import React from 'react'
import UxDevProjects from '../../components/works/UxDevProjects'

const Works = () => {
  return (
    <div className='flex flex-col w-full px-5 pt-10 sm:px-7 md:px-16 lg:px-24 xl:px-36 2xl:px-60'>
      <h1 className='text-[32px] font-semibold text-white'><span className='text-[#59F268]'>/</span>projects</h1>
      <p className='text-white'>List of my projects</p>
      <UxDevProjects />
    </div>
  )
}

export default Works