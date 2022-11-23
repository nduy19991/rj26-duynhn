import React from 'react'
import home from '../../images/home.png'

function Home() {
  return (
    <div>
        <div className="content">
        <h1 className="head">The Pulpit Rock</h1>
        <div className="row">
            <div className="col-3 left">
                <ol>
                    <li>The Drive</li>
                    <hr />
                    <li>The Walk</li>
                    <hr />
                    <li>The Return</li>
                    <hr />
                    <li>The End</li>
                </ol>
            </div>

            <div className="col-6 main">
                <div className="center">
                    <h1>The Walk</h1>
                    <p>
                        The walk to the Pulpit Rock will take you approximately two
                        hours, give or take an hour depending on the weather conditions
                        and your physical shape.
                    </p>
                    <img className='imghome' src={home}/>
                </div>
            </div>

            <div className="col-3 right">
                <h1>What?</h1>
                <p>
                    The Pulpit Rock is a part of a mountain that looks like a pulpit.
                </p>
                <h1>Where?</h1>
                <p>The Pulpit Rock is in Norway</p>
                <h1>Price</h1>
                <p>The walk is free!</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home