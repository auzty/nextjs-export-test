import { useRouter } from 'next/router'

const Post2 = () => {
  const router = useRouter()
  const {comment}  = router.query

  return <p>Dynamic Route with Link : {comment}</p>
}

export default Post2