import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import Header from '../../components/Header'
import Filter from '../../components/Filter'

export default function ProjectsView() {
  return (
    <div className='bg-gray-100'>
      <Header title={"Projects"} />
      <div className='px-8 mx-auto max-w-7xl'>
        {/* <Filter /> */}
        <ProjectCard />
      </div>
    </div>
  )
}
