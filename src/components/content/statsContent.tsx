export default function StatsContent(){
    return(
        <aside className="right-section">
          <div className="separator" id="first">
            <h4>Estadisticas</h4>
          </div>

          <div className="stats">
            <div className="item">
              <div className="top">
                <p>Clientes </p>
                <p>el dia de hoy</p>
              </div>
              <div className="bottom">
                <div className="line"></div>
                <h3>105</h3>
              </div>
            </div>
            
            <div className="item">
              <div className="top">
                <p>Gancias</p>
                <p>el dia de hoy</p>
              </div>
              <div className="bottom">
                <div className="line"></div>
                <h3>$5.680.500</h3>
              </div>
            </div>
          </div>

          <div className="separator">
            <h4>Mesas ocupadas</h4>
          </div>

          <div className="weekly">
            <div className="title">
              <div className="line"></div>
              <h5>ocupadas / total</h5>
            </div>
            <div
              className="progress-bar"
            ></div>
          </div>
        </aside>
    )
}