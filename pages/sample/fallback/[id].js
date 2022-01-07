import { useRouter } from 'next/router'

export default function User({ users }) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

    return(
    <div>
        <h1> Test StaticPath</h1>
        <pre> {JSON.stringify(users,undefined,2)}</pre>
        <p>
          If the page is not yet generated, the "Loading...." page will be displayed
          initially until getStaticProps() finishes running
        </p>
        <p>
          The PreCompiled Pages from getStaticPaths only id 1 and 2 
          ( <a href="/sample/fallback/1">/sample/fallback/1</a> & <a href="/sample/fallback/2">/sample/fallback/2</a> will fast as static file
          but not for 3-10) for more info please check \`sample/fallback/[id].js\`
        </p>
    </div>
    
    );
}

// This function gets called at build time
export async function getStaticPaths() {
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch('https://jsonplaceholder.typicode.com/users/'+ params.id)
  const users = await res.json()

  // Pass post data to the page via props
  return {
    props: { users },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  }
}