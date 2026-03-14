import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Chart from "chart.js/auto";


const agencyLogo = "/Agence 404 new logo (1).gif";
const sogedagLogo = "/logo-sogedag.png";
const heroImage = "/hero-sogedag.jpg";

export default function Dashboard() {
  const navigate = useNavigate();
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: ["Jan", "Fev", "Mar", "Avr", "Mai", "Juin", "Juil", "Aou"],
        datasets: [
          {
            label: "Sessions",
            data: [14, 18, 22, 21, 29, 34, 39, 44],
            borderColor: "#2f8448",
            backgroundColor: "rgba(74, 155, 80, 0.16)",
            fill: true,
            tension: 0.35,
            borderWidth: 3,
            pointBackgroundColor: "#cfe86f",
            pointBorderColor: "#2f8448",
            pointBorderWidth: 2,
            pointRadius: 4,
          },
          {
            label: "Leads",
            data: [6, 8, 10, 11, 15, 19, 22, 27],
            borderColor: "#8d6a2d",
            backgroundColor: "rgba(141,106,45,0.08)",
            fill: false,
            tension: 0.35,
            borderWidth: 2,
            pointBackgroundColor: "#f1ddb0",
            pointBorderColor: "#8d6a2d",
            pointRadius: 3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  const logout = () => {
    navigate("/admin");
  };

  return (
    <div className="app-shell">
      <aside
  className="sidebar"
  style={{
    backgroundImage: `linear-gradient(180deg, rgba(17, 58, 31, 0.95), rgba(42, 110, 57, 0.94)), url(${heroImage})`,
  }}
>
        <div className="brand">
          <div className="brand-mark">
            <img src={sogedagLogo} alt="SOGEDAG" />
          </div>
          <div>
            <h1>SOGEDAG</h1>
            <p>Administration premium</p>
          </div>
        </div>

        <div className="nav-title">Navigation</div>
        <nav className="nav">
  <Link className="active" to="/admin/dashboard">Dashboard exécutif</Link>
  <Link to="/admin/categories">Catégories</Link>
  <Link to="/admin/blog">Blog</Link>
  <Link to="/admin/multimedia">Multimedia</Link>
  <Link to="/admin/research">Research</Link>
  <Link to="/admin/products">Produits</Link>
</nav>

        <div className="sidebar-card">
          <h3>Expérience corporate</h3>
          <p>
            Un design premium aligné sur une grande entreprise, avec impact visuel fort et hiérarchie haut de gamme.
          </p>
          <button className="btn btn-light" onClick={logout}>
            Déconnexion
          </button>
        </div>
      </aside>

      <main className="main">
        <div className="topbar">
          <div className="search">
            <span>⌕</span>
            <input type="text" placeholder="Rechercher un produit, une catégorie, un article..." />
          </div>
          
        </div>

        <section
  className="hero"
  style={{
    backgroundImage: `linear-gradient(120deg, rgba(22, 63, 31, 0.82), rgba(58, 118, 50, 0.28)), url(${heroImage})`,
  }}
>
          <div className="hero-content">
            <div className="eyebrow">SOGEDAG • Interface de direction</div>
            <h2>Un dashboard à la hauteur d’une grande entreprise.</h2>
            <p>
              Une expérience premium inspirée du site corporate : image forte, analytics élégants, gestion centralisée
              du contenu et design sur mesure.
            </p>
            
          </div>

          <div className="hero-float">
            <div className="floating-panel">
              <div className="mini-media">
                <img src={heroImage} alt="SOGEDAG" />
              </div>
              <h3>Approche durable & pilotage premium</h3>
              <p>
                Une interface claire, élégante et stratégique pour accompagner la croissance d’une entreprise
                d’envergure.
              </p>
            </div>
          </div>
        </section>

        <section className="stats-grid">
          <article className="stat-card">
            <div className="stat-head">
              <div>
                <h4>Sessions globales</h4>
                <div className="value">124K</div>
              </div>
              <div className="icon-badge"></div>
            </div>
            <div className="delta">↗ +18.6% sur 30 jours</div>
          </article>

          <article className="stat-card">
            <div className="stat-head">
              <div>
                <h4>Leads qualifiés</h4>
                <div className="value">3 284</div>
              </div>
              <div className="icon-badge"></div>
            </div>
            <div className="delta">↗ +9.4% conversion</div>
          </article>

          <article className="stat-card">
            <div className="stat-head">
              <div>
                <h4>Catalogues PDF</h4>
                <div className="value">186</div>
              </div>
              <div className="icon-badge"></div>
            </div>
            <div className="delta">↗ 24 nouveaux documents</div>
          </article>

          <article className="stat-card">
            <div className="stat-head">
              <div>
                <h4>Articles publiés</h4>
                <div className="value">92</div>
              </div>
              <div className="icon-badge"></div>
            </div>
            <div className="delta">↗ Editorial actif</div>
          </article>
        </section>

        <section className="grid-2">
          <article className="panel">
            <div className="panel-top">
              <h3>Google Analytics — performance</h3>
              <span className="chip">Live overview</span>
            </div>
            <div className="chart-box">
              <canvas ref={chartRef}></canvas>
            </div>
          </article>

          <article className="panel">
            <div className="panel-top">
              <h3>Activité récente</h3>
              <span className="chip">Aujourd’hui</span>
            </div>

            <div className="list">
              <div className="list-item">
                <div className="thumb"></div>
                <div>
                  <strong>Nouveau produit ajouté</strong>
                  <span>Brochure PDF, image produit et nouvelle catégorie associée.</span>
                </div>
                <div className="status">Il y a 42 min</div>
              </div>

              <div className="list-item">
                <div className="thumb"></div>
                <div>
                  <strong>Article blog publié</strong>
                  <span>Contenu enrichi avec liens intégrés et image de couverture.</span>
                </div>
                <div className="status">Il y a 2 h</div>
              </div>

              <div className="list-item">
                <div className="thumb"></div>
                <div>
                  <strong>Nouveau média uploadé</strong>
                  <span>Photo terrain et PDF technique ajoutés dans multimedia.</span>
                </div>
                <div className="status">Aujourd’hui</div>
              </div>
            </div>
          </article>
        </section>

        <section className="grid-2b">
          <article className="panel">
            <div className="panel-top">
              <h3>Canaux d’acquisition</h3>
              <span className="chip">30 derniers jours</span>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Canal</th>
                  <th>Sessions</th>
                  <th>Évolution</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Organique</td><td>48 220</td><td>+14%</td></tr>
                <tr><td>Direct</td><td>26 140</td><td>+8%</td></tr>
                <tr><td>Social</td><td>18 390</td><td>+22%</td></tr>
                <tr><td>Référents</td><td>11 280</td><td>+6%</td></tr>
              </tbody>
            </table>
          </article>

          <article className="panel">
            <div className="panel-top">
              <h3>Pages stratégiques</h3>
              <span className="chip">Top contenus</span>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Page</th>
                  <th>Vues</th>
                  <th>Engagement</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Accueil corporate</td><td>22 904</td><td>68%</td></tr>
                <tr><td>Solutions agricoles</td><td>18 130</td><td>61%</td></tr>
                <tr><td>Catalogue produits</td><td>12 844</td><td>73%</td></tr>
                <tr><td>Actualités / Blog</td><td>9 210</td><td>58%</td></tr>
              </tbody>
            </table>
          </article>
        </section>
      </main>
    </div>
  );
}