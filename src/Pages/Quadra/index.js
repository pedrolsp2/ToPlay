import './style-quadra.css';

function Quadra(){
    return(
        <div className='crt'>
            <section className='court'>
                <div className='timer'>
                    <article>
                    <h1>Disponivel</h1>
                    <h2>Proxima Partida em</h2>
                    </article>
                    <span>00:00:00:00</span>
                </div>
            </section>
        </div>
    )
}

export default Quadra;