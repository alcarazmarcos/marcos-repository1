import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/casita2.png" alt="dante" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dolor ducimus magni maxime ipsam esse excepturi expedita debitis, alias sequi vitae quia impedit, natus aliquam doloremque culpa architecto voluptates fugiat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dolor ducimus magni maxime ipsam esse excepturi expedita debitis, alias sequi vitae quia impedit, natus aliquam doloremque culpa architecto voluptates fugiat.</p>

                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span class="cita">Simplemente Excelente</span>
                        <span class="autor">Juan Gomez</span>
                    </div>
                </div>
            </div>
        </main>

    );
}

export default HomePage;