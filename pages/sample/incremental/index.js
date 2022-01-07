export const getStaticProps = async () => {
    const res = await fetch('https://random-data-api.com/api/users/random_user')
    const data = await res.json()

    return {
        props: { user: data},
        revalidate: 10,
    }
}

export default function Users ({ user}) {
    return( 
    <div>
        <h1> We Got Users</h1>
            <div key={user.id}>
                <pre>{ JSON.stringify(user,undefined,2)}</pre>
            </div>
    </div>
    );
}