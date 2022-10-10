import React from 'react'

const Footer = () => {
  return (
<>
  {/* Footer */}
  <footer className="nilsbrown-footer-section">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h5>Get in touch</h5>
          <p>developerexcela@gmail.com</p>
        </div>
        <div className="col-md-4">
          <h5>Locations</h5>
          <p>Rivers State — Nigeria</p>
        </div>
        <div className="col-md-4">
          <ul className="nilsbrown-footer-social-link">
            <li>
              <a href="https://www.youtube.com/channel/UCRDn5khfFXbwnn2st1-OdxA" 
              target="_blank"
              rel='noreferrer'>
                <i className="ti-youtube" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/_Akar_Excel"
              target="_blank"
              rel='noreferrer'>
                <i className="ti-twitter" />
              </a>
            </li>
            <li>
              <a href="https://github.com/AkarExcel/"
              target="_blank"
              rel='noreferrer'>
                <i className="ti-github" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/excel-akar-a976b7232"
              target="_blank"
              rel='noreferrer'>
                <i className="ti-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</>

  )
}

export default Footer