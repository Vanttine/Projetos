import Aurora from "../../components/Aurora";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Aurora />

      {/* container full */}
      <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-center text-lg-start">
        <div className="row w-100 text-white">
          <div className="col-12 col-lg-6 mb-5 mb-lg-0 d-flex flex-column align-items-center align-items-lg-start">
            <h1 className="fw-bold">CryptoCoins Dashboard</h1>
            <p className="fs-5">
              Tenha na palma da sua mão o controle total dos seus lucros.
            </p>
          </div>

          <div className="col-12 col-lg-5 offset-lg-1 d-flex justify-content-center">
            <form className="p-4 rounded-4 w-100" style={{ maxWidth: "400px" }}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Senha</label>
                <input type="password" className="form-control" />
              </div>

              <div className="mb-3 form-check text-start d-flex">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label ms-1">Lembrar de mim</label>

                <a href="" className="ms-auto">
                  Não tem uma conta?
                </a>
              </div>

              <button className="btn btn-primary w-100">Continuar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
