export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: { users: data}
    }
}

export default function Users ({ users}) {
    return( 
    <div>
        <h1> List Users</h1>
        {users.map(user => (
            <div key={user.id}>
                <li>{ user.name}</li>
            </div>
        ))}
    </div>
    );
}