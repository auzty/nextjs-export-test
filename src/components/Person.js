import Link from 'next/link'

export default function Person({ person }) {
  return (
    <li>
      <Link href="/sample/api-routes/person/[id]" as={`/sample/api-routes/person/${person.id}`}>
        <a>{person.name}</a>
      </Link>
    </li>
  )
}