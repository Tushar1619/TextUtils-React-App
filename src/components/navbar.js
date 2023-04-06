import React,{useState} from 'react'
import PropTypes from 'prop-types';
export default function Navbar({title,mode,toggle}) {
  // const[navColor,chngNavColor]  = useState('')
  // const[navTxtColor,chngNavTxtColor]  = useState({color:'black'})
  // const[tglTxt,chngTglTxt] = useState('Dark mode')
  // const changeTheme = ()=>{
  //   if(mode === false){
  //     chngNavColor('navbar navbar-expand-lg bg-dark')
  //     chngNavTxtColor({color:'white'})
  //     chngTglTxt('Light Mode')
  //     mode = true;
  //   }
  //   else{
  //     chngNavColor('navbar navbar-expand-lg bg-light')
  //     chngNavTxtColor({color:'black'})
  //     chngTglTxt('Dark Mode')
  //     mode=false;
  //   }
  // }
    return (
      <nav className={`navbar navbar-expand-lg bg-${mode}`}>
      <div className="container-fluid" >
        <a className={`navbar-brand text-${mode==='light'?'dark':'light'}`}  href="/">{title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link active text-${mode==='light'?'dark':'light'}`}  aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-${mode==='light'?'dark':'light'}`} href="/">Link</a>
            </li>
            
            <li className="nav-item">
              <a className={`nav-link disabled text-${mode==='light'?'dark':'light'}`} href="/">Disabled</a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-primary" type="submit">Search</button> */}
            <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" onClick={toggle}  id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Dark mode</label>
</div>
          {/* </form> */}
        </div>
      </div>
    </nav>
    );
  }

  Navbar.propTypes = {
    title: PropTypes.string
  };
  Navbar.defaultProps = {
    title: 'Stranger'
  };
