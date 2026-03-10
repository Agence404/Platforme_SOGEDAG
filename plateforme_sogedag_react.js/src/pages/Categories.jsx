import { Link, useNavigate } from "react-router-dom";

const sogedagLogo = "/logo-sogedag.png";
const heroImage = "/hero-sogedag.jpg";

export default function Categories() {
  const navigate = useNavigate();

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
  <Link to="/admin/dashboard">Dashboard exécutif</Link>
  <Link className="active" to="/admin/categories">Catégories</Link>
  <Link to="/admin/blog">Blog</Link>
  <Link to="/admin/multimedia">Multimedia</Link>
  <Link to="/admin/research">Research</Link>
  <Link to="/admin/products">Produits</Link>
</nav>

        <div className="sidebar-card">
          <h3>Structuration du contenu</h3>
          <p>Organise l’ensemble des rubriques utilisées dans les produits, articles et contenus multimédias.</p>
          <button className="btn btn-light" onClick={logout}>Déconnexion</button>
        </div>
      </aside>

      <main className="main">
        <div className="page-header">
          <h2>Gestion des catégories</h2>
          <p>Créer, structurer et préparer les catégories utilisées dans tout l’écosystème éditorial.</p>
        </div>

        <section className="form-shell">
          <div className="form-card">
            <form>
              <div className="form-grid">
                <div>
                  <label htmlFor="categoryName">Nom de la catégorie</label>
                  <input id="categoryName" type="text" placeholder="Ex : Agriculture, Innovation, Produits..." />
                </div>

                <div>
                  <label htmlFor="categorySlug">Slug</label>
                  <input id="categorySlug" type="text" placeholder="agriculture-innovation" />
                </div>

                <div className="full">
                  <label htmlFor="categoryDescription">Description</label>
                  <textarea id="categoryDescription" placeholder="Décrivez le rôle de cette catégorie..."></textarea>
                </div>
              </div>

              <div className="actions">
                <button className="btn btn-primary" type="submit">Enregistrer la catégorie</button>
                <button className="btn btn-outline" type="reset">Réinitialiser</button>
              </div>
            </form>
          </div>

          <div className="form-card">
            <div className="panel-top">
              <h3>Catégories existantes</h3>
              <span className="chip">Organisation</span>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Slug</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Produits</td>
                  <td>produits</td>
                  <td>Rubrique principale destinée aux fiches produit et documents PDF.</td>
                </tr>
                <tr>
                  <td>Actualités</td>
                  <td>actualites</td>
                  <td>Contenus éditoriaux, articles de blog et informations d’entreprise.</td>
                </tr>
                <tr>
                  <td>Multimedia</td>
                  <td>multimedia</td>
                  <td>Images terrain, médias visuels et ressources documentaires.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}