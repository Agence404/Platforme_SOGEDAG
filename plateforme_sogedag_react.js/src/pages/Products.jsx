import { Link, useNavigate } from "react-router-dom";

const sogedagLogo = "/logo-sogedag.png";
const heroImage = "/hero-sogedag.jpg";

export default function Products() {
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
          <h3>Gestion catalogue</h3>
          <p>Ajoute les produits avec image, description, PDF et catégorisation dans une présentation premium.</p>
          <button className="btn btn-light" onClick={logout}>Déconnexion</button>
        </div>
      </aside>

      <main className="main">
        <div className="page-header">
          <h2>Ajout de produit</h2>
          <p>L’admin peut saisir un titre, une description, une image, un PDF et choisir une catégorie.</p>
        </div>

        <div className="form-card">
          <form>
            <div className="form-grid">
              <div>
                <label htmlFor="productTitle">Titre du produit</label>
                <input id="productTitle" type="text" placeholder="Nom du produit" />
              </div>

              <div>
                <label htmlFor="productCategory">Catégorie</label>
                <select id="productCategory">
                  <option>Choisir une catégorie</option>
                  <option>Produits</option>
                  <option>Agriculture</option>
                  <option>Industrie</option>
                  <option>Équipement</option>
                </select>
              </div>

              <div className="full">
                <label htmlFor="productDescription">Description</label>
                <textarea id="productDescription" placeholder="Décrivez le produit..."></textarea>
              </div>

              <div>
                <label htmlFor="productImage">Image du produit</label>
                <div className="upload-box">
                  <input id="productImage" type="file" accept="image/*" data-preview-target="productPreview" />
                  <img id="productPreview" className="preview-image" alt="Aperçu produit" />
                </div>
              </div>

              <div>
                <label htmlFor="productPdf">PDF du produit</label>
                <div className="upload-box">
                  <input id="productPdf" type="file" accept=".pdf" />
                  <div className="note">Importer la brochure ou la fiche technique.</div>
                </div>
              </div>
            </div>

            <div className="actions">
              <button className="btn btn-primary" type="submit">Publier le produit</button>
              <button className="btn btn-outline" type="reset">Annuler</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}