function CommentSection({user, commentTo, id, thisClass}){
  return (
    <div className={`comment ${thisClass}`} key = {id}>
      <h3>{user}</h3>
      <p>{commentTo}</p>
      <hr />
    </div>
  )
}

export default CommentSection;