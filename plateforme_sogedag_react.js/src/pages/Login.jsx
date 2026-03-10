import { Link, useNavigate } from "react-router-dom";
const agencyLogo = "/Agence 404 new logo (1).gif";
const sogedagLogo = "/logo-sogedag.png";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin/verify");
  };

  return (
    <section className="auth-shell">
      <div className="auth-card">
        <div className="auth-login-layout">
          <div className="auth-login-left">
            <div className="auth-brand-block">
              <img src={agencyLogo} alt="Agence 404" />
            </div>
          </div>

          <div className="auth-login-divider" />

          <div className="auth-login-right">
            <div className="auth-login-box">
              <div className="logo-wrap">
                <img src={sogedagLogo} alt="Logo agence" />
              </div>

              <h1 className="auth-title">Welcome</h1>
              <p className="auth-subtitle">Please login to admin dashboard</p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input id="username" type="text" placeholder="Username" required />
                </div>

                <div className="form-group">
                  <div className="password-row">
                    <label htmlFor="password">Password</label>
                    <Link to="#" className="small-link">
                      Forgot password?
                    </Link>
                  </div>
                  <input id="password" type="password" placeholder="Password" required />
                </div>

                <div className="auth-actions">
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}