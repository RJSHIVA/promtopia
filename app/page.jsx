import React from 'react'
import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className=" w-full flex-center flex-col ">
        <h1 className="head_text text-center">Discover and share
        <br  />
        <span className="orange_gradient text-center " >
            AI-Powered Promts
        </span>
        </h1>
        <p className='desc text-center'>
            Promptopia is an open-source AI-prompting tool for modern world to discover, create and share Creatie prompts.
        </p>

        <Feed />
    </section>
  )
}

export default Home