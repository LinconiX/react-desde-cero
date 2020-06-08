import React from 'react';
import PropTypes from 'prop-types'

const Curso = ({title, image, price, profesor}) =>(
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tr">
            <img src={image} alt={title}/>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{title}</h3>
            <div className="s-main-center">
                {`Prof.: ${profesor}`}
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="#">{`$ ${price}`}</a>
            </div>
        </div>
    </article>
)
//que tipo de dato queremos que nos llege en cada propiedad
Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    profesor: PropTypes.string
}

Curso.defaultProps = {
    title: "No se encontro titulo",
    image: "data:image/png;base64,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",
    price:"--",
    profesor: "" 
}

export default Curso

