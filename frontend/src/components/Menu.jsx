import React from 'react'
import {data} from '../restApi.json'

const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p> Come and Enjoy with Us. </p>
            </div>
            <div className="dishes_container">
                {
                    data[0].breakfast.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                    
                }
                {
                    data[0].lunch.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                    
                }     
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu
