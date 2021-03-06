import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../../../src/components/styles.module.css'

const Code = (p) => <code className={styles.inlineCode} {...p} />

export default function About() {
  const { asPath, route } = useRouter()
  const [path, setPath] = useState()

  // `asPath` is always `/about` in Node.js (server render), because the page is statically generated
  // so we wait for the browser to load, and use the updated `asPath`, which may be a path
  // other than `/about` when using a rewrite. This way we can avoid a content mismatch
  useEffect(() => setPath(asPath), [asPath])

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Path: {path}</h1>
        <hr className={styles.hr} />
        <p>
          {' '}
          This page was rendered by <Code>{`pages${route}.js`}</Code>.
        </p>
            To check the response headers of this page, open the Network tab
          inside your browser inspector.
            <pre>
                {`
                {
                    key: 'x-custom-header',
                    value: 'ini headernya customlho',
                },
                {
                    key: 'x-another-custom-header',
                    value: 'yss lambada',
                }`
                },
            </pre>
      </div>
    </div>
  )
}