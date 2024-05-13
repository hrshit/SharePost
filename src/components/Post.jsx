import classes  from "./Post.module.css"

function Post(props){
    return(
        <div className={classes.Post}>
            <h1 className={classes.author}>{props.author}</h1>
            <p className={classes.text}>{props.body}</p>
        </div>
    )
}
export default Post;