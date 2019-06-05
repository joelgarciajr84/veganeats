
import React, {PureComponent} from 'react';

class FooterComponent extends PureComponent {
  render() {
    return (
      <footer className="footer">
        <div className="section">
          <div className="container">
            <p><strong>veganeats</strong> by <a href="https://www.instagram.com/vegangirlthatcodes" target="_new">@vegangirlthatcodes</a>.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
