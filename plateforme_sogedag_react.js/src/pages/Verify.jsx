import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

const agencyLogo = "/Agence 404 new logo (1).gif";
const sogedagLogo = "/logo-sogedag.png";

export default function Verify() {
  const navigate = useNavigate();
  const inputsRef = useRef([]);

  const handleChange = (index, value) => {
    const clean = value.replace(/\D/g, "").slice(0, 1);
    inputsRef.current[index].value = clean;

    if (clean && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !inputsRef.current[index].value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;

    e.preventDefault();

    pasted.split("").forEach((char, i) => {
      if (inputsRef.current[i]) {
        inputsRef.current[i].value = char;
      }
    });

    const nextIndex = Math.min(pasted.length, inputsRef.current.length - 1);
    inputsRef.current[nextIndex]?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin/dashboard");
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

              <h1 className="auth-title">Verification</h1>
              <p className="auth-subtitle">Please enter your verification code</p>

              <form onSubmit={handleSubmit} id="verifyForm">
                <div className="otp-grid" onPaste={handlePaste}>
                  {[...Array(6)].map((_, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputsRef.current[index] = el)}
                      className="otp-input"
                      type="text"
                      maxLength={1}
                      inputMode="numeric"
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                    />
                  ))}
                </div>

                <div className="auth-actions">
                  <button className="btn btn-primary" type="submit">
                    Verify
                  </button>
                </div>
              </form>

              <div className="auth-footer">
                <Link to="/admin">Back to login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}