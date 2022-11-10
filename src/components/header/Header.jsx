import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://i.pinimg.com/originals/a1/1f/09/a11f093fa80d637ff42aee2573b5a787.jpg"
        alt=""
      />
    </div>
  )
}