import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Profile() {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/todos/1', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {JSON.stringify(data)}!</div>
}