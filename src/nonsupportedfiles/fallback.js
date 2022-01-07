export default function IndexPage() {

  return (
    <div>
      <h2>
        the build will contain error if try to export fallback:true
      </h2>
      <h3>
          Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: <a href="https://nextjs.org/docs/messages/ssg-fallback-true-export">https://nextjs.org/docs/messages/ssg-fallback-true-export</a>
      </h3>
    </div>
  )
}