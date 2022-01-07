export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    // generate the paths
    const paths = data.map(user => ({ 
        params: { id: user.id.toString() } // keep in mind if post.id is a number you need to stringify post.id
        })
    );

    return {
        paths,
        fallback: false 
    }   
}

export const getStaticProps = async ( context ) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+ id)
    const data = await res.json()

    return {
        props: { users: data}
    }
}

export default function UsersStatic (users) {
    return( 
    <div>
        <h1> Test StaticPath</h1>
        <pre> {JSON.stringify(users,undefined,2)}</pre>
    </div>
    );
}