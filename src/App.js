import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand fs-4" href="#">Gerador de ID</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-links" aria-controls="navbar-links" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
  
      <div className="collapse navbar-collapse" id="navbar-links">
          <ul className="navbar-nav mx-auto mb-2 mb-md-0 ">
            <li className="nav-item">
              <a className="nav-link" href="#">UUID</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">GUID</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">CUID</a>
            </li>
          </ul>
      </div>
    </div>
  </nav>
  );
}
export default App;
