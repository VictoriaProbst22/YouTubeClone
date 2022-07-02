

const CommentsPage = (props) => {
    console.log(props.allCommentsProps);

    

    return ( <div>
        <table>
            <thead>
                <tr>
                    <th>Comments</th>
                </tr>
            </thead>
        </table>
        <p>
            {props.allCommentsProps.map((user)=>{
                return(
                    <tr>
                        <td>{user.text}</td>
                        <td>{user.text}</td>
                    </tr>
                )
            })}
        </p>
    </div> );
}
 
export default CommentsPage;