import { Link } from "react-router-dom";
import classes  from "./Post.module.css"

function Post({id, author, body}){
    return(
        <li className={classes.post}>
            <Link to={id}>
                <h1 className={classes.author}>{author}</h1>
                <p className={classes.text}>{body}</p> 
            </Link>
        </li>
    )
}
export default Post;