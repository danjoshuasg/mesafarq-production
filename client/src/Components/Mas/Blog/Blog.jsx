import React from 'react'
import './Blog.css'

const Blog = () => {
  return (
    <div className="blog">
        <h1>Obtén nuestras notas en el correo electrónico</h1>
        <p>Suscríbete a nuestro blog y mantente actualizado</p>
        <div>
            <input type="email" placeholder='Ingrese su email' name="blog-email" id="" />
            <button>Suscríbete</button>
        </div>
    </div>
  )
}

export default Blog