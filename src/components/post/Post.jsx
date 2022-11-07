import { Link } from "react-router-dom"
import "./post.css"

export default function Post({img}) {
  return (
    <div className="post">
      <img 
        className="postImg"
        src={img}
        alt=""
      />
    <div className="postInfo">
      <div className="postCategories">
        <span className="postCategory">
          <Link className="link" to="/posts?cat=music">
            Music
          </Link>
        </span>
        <span className="postCategory">
          <Link className="link" to="/posts?cat=life">
            Life
          </Link>
        </span>
      </div>
      <span className="postTitle">
        <Link to="/post/abc" className="link">
          Lorem ipsum dolor sit amet
        </Link>
      </span>
      <hr />
      <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDescription">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
      officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
      fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
      atque, exercitationem quibusdam, reiciendis odio laboriosam?
    </p>
    </div>
  )
}
