import { Link, useNavigate } from "react-router-dom";

const sogedagLogo = "/logo-sogedag.png";
const heroImage = "/hero-sogedag.jpg";

export default function Blog() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/admin");
  };

  const formatEditor = (command) => {
    document.execCommand(command, false, null);
  };

  const addLinkToEditor = () => {
    const url = prompt("Entrez l'URL du lien :");
    if (!url) return;
    document.execCommand("createLink", false, url);
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
  <Link className="active" to="/admin/blog">Blog</Link>
  <Link to="/admin/multimedia">Multimedia</Link>
  <Link to="/admin/research">Research</Link>
  <Link to="/admin/products">Produits</Link>
</nav>

        <div className="sidebar-card">
          <h3>Éditorial premium</h3>
          <p>Un éditeur plus propre, plus crédible, mieux adapté à une communication corporate.</p>
          <button className="btn btn-light" onClick={logout}>Déconnexion</button>
        </div>
      </aside>

      <main className="main">
        <div className="page-header">
          <h2>Création d’un article blog</h2>
          <p>L’admin peut saisir l’auteur, le titre, l’image, le contenu et insérer des liens directement dans le texte.</p>
        </div>

        <div className="form-card">
          <form id="blogForm">
            <div className="form-grid">
              <div>
                <label htmlFor="authorName">Nom de l’auteur</label>
                <input id="authorName" type="text" placeholder="Nom de l’auteur" />
              </div>

              <div>
                <label htmlFor="blogTitle">Titre de l’article</label>
                <input id="blogTitle" type="text" placeholder="Titre du blog" />
              </div>

              <div className="full">
                <label htmlFor="blogImage">Image de couverture</label>
                <div className="upload-box">
                  <input id="blogImage" type="file" accept="image/*" data-preview-target="blogPreview" />
                  <img id="blogPreview" className="preview-image" alt="Aperçu blog" />
                </div>
              </div>

              <div className="full">
                <label>Contenu du blog</label>

                <div className="editor-toolbar">
                  <button type="button" onClick={() => formatEditor("bold")}>Gras</button>
                  <button type="button" onClick={() => formatEditor("italic")}>Italique</button>
                  <button type="button" onClick={() => formatEditor("underline")}>Souligné</button>
                  <button type="button" onClick={() => formatEditor("insertUnorderedList")}>Liste</button>
                  <button type="button" onClick={addLinkToEditor}>Ajouter un lien</button>
                </div>

                <div id="blogEditor" className="rich-editor" contentEditable suppressContentEditableWarning>
                  Rédigez ici votre contenu éditorial...
                </div>

                <input type="hidden" id="blogContent" name="blogContent" />
              </div>
            </div>

            <div className="actions">
              <button className="btn btn-primary" type="submit">Publier l’article</button>
              <button className="btn btn-outline" type="reset">Réinitialiser</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}