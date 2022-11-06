import "./post.css"

export default function Post() {
  return (
    <div className="post">
    <div className="postInfo">
      <div className="postCategories">
        <span className="postCategory">
          <div className="link">
            Music
          </div>
        </span>
        <span className="postCategory">
          <div className="link">
            Life
          </div>
        </span>
      </div>
      <span className="postTitle">
        <div className="link">
          Lorem ipsum dolor sit amet
        </div>
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
