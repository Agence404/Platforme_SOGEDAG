import { Link, useNavigate } from "react-router-dom";

const sogedagLogo = "/logo-sogedag.png";
const heroImage = "/hero-sogedag.jpg";

export default function Research() {
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
  <Link to="/admin/categories">Catégories</Link>
  <Link to="/admin/blog">Blog</Link>
  <Link to="/admin/multimedia">Multimedia</Link>
  <Link className="active" to="/admin/research">Research</Link>
  <Link to="/admin/products">Produits</Link>
</nav>

        <div className="sidebar-card">
          <h3>Études & documentation</h3>
          <p>Centralise les rapports, visuels et documents de recherche dans une logique premium.</p>
          <button className="btn btn-light" onClick={logout}>Déconnexion</button>
        </div>
      </aside>

      <main className="main">
        <div className="page-header">
          <h2>Research</h2>
          <p>Page de gestion pour les études, rapports et ressources documentaires.</p>
        </div>

        <div className="form-card">
          <form>
            <div className="form-grid">
              <div>
                <label htmlFor="researchTitle">Titre</label>
                <input id="researchTitle" type="text" placeholder="Titre de la recherche" />
              </div>

              <div>
                <label htmlFor="researchCategory">Catégorie</label>
                <select id="researchCategory">
                  <option>Choisir une catégorie</option>
                  <option>Marché</option>
                  <option>Étude</option>
                  <option>Rapport</option>
                </select>
              </div>

              <div className="full">
                <label htmlFor="researchDescription">Description</label>
                <textarea id="researchDescription" placeholder="Résumé ou contenu de la recherche..."></textarea>
              </div>

              <div>
                <label htmlFor="researchPdf">PDF</label>
                <div className="upload-box">
                  <input id="researchPdf" type="file" accept=".pdf" />
                </div>
              </div>

              <div>
                <label htmlFor="researchImage">Image</label>
                <div className="upload-box">
                  <input id="researchImage" type="file" accept="image/*" data-preview-target="researchPreview" />
                  <img id="researchPreview" className="preview-image" alt="Aperçu research" />
                </div>
              </div>
            </div>

            <div className="actions">
              <button className="btn btn-primary" type="submit">Enregistrer</button>
              <button className="btn btn-outline" type="reset">Annuler</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}