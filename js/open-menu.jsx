const React       = require("react")
const ReactDOM    = require("react-dom")

class OpenMenu extends React.Component {
  constructor() {
    super()
    this.select = this.select.bind(this)
  }

  select(event) {
    let ami = event.target.getAttribute("data-ami")
    this.props.onSelect({ami: ami})
  }
  
  render() {
    return (
      <div className="select-stack">
        <ul className="select-instance"></ul>
        <h3> Select a Stack </h3>
        <div className="stacks">
          <div className="ruby" data-ami="ami-165a0876" onClick={this.select}>
            <img src="./images/icon-ruby.png" />
            <p> Ruby </p>
          </div>
          <div className="javascript" data-ami="ami-165a0876" onClick={this.select}>
            <img src="./images/icon-javascript.png" />
            <p> Node </p>
          </div>
          <div className="tensorflow" data-ami="ami-165a0876" onClick={this.select}>
            <img src="./images/icon-tensorflow.png" />
            <p> Tensorflow </p>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = OpenMenu
