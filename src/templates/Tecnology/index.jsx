import { useState } from "react"
import data from "../starter-code/data.json"
import './main.sass'

export default function Technology() {
  const [technology] = useState(data.technology)
  const [value, setValue] = useState(0)

  const { name, images, description } = technology[value]

  return (
    <>
      <section className="home_technology">
        <div className="main_container">
          <article className="tech-content">
            <h2 className="tech-page-title">
              <span>03</span><p>Space Launch 101</p>
            </h2>

            <div className="TechDetails">
              <article className="tech-button-container">
                <ul
                  className="hola"
                  start="1"
                >
                  {technology.map((item, index) => (
                    <li key={index} className="tech-btn-container">
                      <button
                        onClick={() => setValue(index)}
                        className="tech-btn"
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="Hola mundo">
                <h3 className="tech-title">
                  The terminology...
                </h3>

                <h2 className="tech-name">
                  {name}
                </h2>

                <p className="tech-description">{description}</p>
              </article>
            </div>
          </article>

          <article className="tech-image-container">
            <img
              src={images.portrait}
              alt={name}
              title={name}
              className="tech-image"
            />
          </article>
        </div>
      </section>
    </>
  )
}