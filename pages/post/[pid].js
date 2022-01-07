import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const {pid}  = router.query

  return <p>Dynamic Route : {pid}</p>
}

export default Post