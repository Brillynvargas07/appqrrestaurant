export default function StatsContent(){
    return(
        <aside class="right-section">
          <div class="separator" id="first">
            <h4>Estadisticas</h4>
          </div>

          <div class="stats">
            <div class="item">
              <div class="top">
                <p>Clientes </p>
                <p>el dia de hoy</p>
              </div>
              <div class="bottom">
                <div class="line"></div>
                <h3>105</h3>
              </div>
            </div>
            
            <div class="item">
              <div class="top">
                <p>Gancias</p>
                <p>el dia de hoy</p>
              </div>
              <div class="bottom">
                <div class="line"></div>
                <h3>$5.680.500</h3>
              </div>
            </div>
          </div>

          <div class="separator">
            <h4>Mesas ocupadas</h4>
          </div>

          <div class="weekly">
            <div class="title">
              <div class="line"></div>
              <h5>ocupadas / total</h5>
            </div>
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </aside>
    )
}