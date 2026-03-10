import { Link, useNavigate } from "react-router-dom";

const sogedagLogo = "/logo-sogedag.png";
const heroImage = "/hero-sogedag.jpg";

export default function Multimedia() {
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
          <Link className="active" to="/admin/multimedia">Multimedia</Link>
          <Link to="/admin/research">Research</Link>
          <Link to="/admin/products">Produits</Link>
        </nav>

        <div className="sidebar-card">
          <h3>Bibliothèque corporate</h3>
          <p>Gère les visuels et documents avec une interface plus premium et mieux structurée.</p>
          <button className="btn btn-light" onClick={logout}>
            Déconnexion
          </button>
        </div>
      </aside>

      <main className="main">
        <div className="page-header">
          <h2>Ajout multimedia</h2>
          <p>L’admin peut ajouter une photo, un PDF et un titre dans une interface plus professionnelle.</p>
        </div>

        <div className="form-card">
          <form>
            <div className="form-grid">
              <div className="full">
                <label htmlFor="mediaTitle">Titre</label>
                <input id="mediaTitle" type="text" placeholder="Titre du média" />
              </div>

              <div>
                <label htmlFor="mediaImage">Photo</label>
                <div className="upload-box">
                  <input
                    id="mediaImage"
                    type="file"
                    accept="image/*"
                    data-preview-target="mediaPreview"
                  />
                  <img
                    id="mediaPreview"
                    className="preview-image"
                    alt="Aperçu média"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mediaPdf">PDF</label>
                <div className="upload-box">
                  <input id="mediaPdf" type="file" accept=".pdf" />
                  <div className="note">Importer un document PDF lié au média.</div>
                </div>
              </div>
            </div>

            <div className="actions">
              <button className="btn btn-primary" type="submit">
                Enregistrer
              </button>
              <button className="btn btn-outline" type="reset">
                Annuler
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}