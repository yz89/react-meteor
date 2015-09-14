MainLayout = React.createClass({
  render() {
    return  <div className="container">
              <header className="navbar navbar-default" role="navigation">
                <div className="navbar-header">
                  <a className="navbar-brand" href="/">main</a>
                  <a className="navbar-brand" href="/app1">app1</a>
                  <a className="navbar-brand" href="/app2">app2</a>
                  <a className="navbar-brand" href="/app3">app3</a>
                  <a className="navbar-brand" href="/app4">app4</a>
                  <a className="navbar-brand" href="/app5">app5</a>
                </div>
              </header>
              <div id="main" className="row-fluid">
                {this.props.content}
              </div>
            </div>
  }
});