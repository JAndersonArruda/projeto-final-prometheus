// import React from 'react'

import "./viewEvent.css"

export default function ViewEvent() {
    return (
        <>
            <div id="container-page" className="container-view-event">
                <div className="content-image">
                    <img src="" alt="imagem do evento" />
                </div>
                <div className="content-title">
                    <h2>Título da Imagem</h2>
                </div>
                <div className="content-data">
                    <p className="location">Local</p>
                    <p className="date-event">Data<span className="time-event">Hora</span></p>
                </div>
                <div className="content-description">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio cumque itaque velit a impedit aliquid, deleniti veritatis perferendis repellendus beatae rerum rem molestiae nobis, iure vero molestias dolorem illo maiores.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corporis ad officia. Sint ratione omnis voluptate modi repellendus excepturi, enim sed aliquid rerum fugiat voluptatum qui saepe? Recusandae, natus illo?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolor doloremque earum voluptas sed quis necessitatibus laudantium doloribus minima aut, debitis accusamus atque optio, eum voluptatum sequi sapiente animi ab.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nesciunt adipisci corrupti impedit amet iure ex error animi blanditiis qui, perspiciatis rerum nulla! Aspernatur sint porro veniam ipsam, eaque suscipit!</p>
                </div>
                <button className="button-ticket">Realizar Inscrição</button>
            </div>
        </>
    )
}

