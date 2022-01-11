import Head from 'next/head'
import ColoredLine from '../src/components/custom-css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Testing Next Export 
        </h1>

        <p className="description">
          Supported Feature Test
        </p>

        <div className="grid">

          <a href="/sample/static/1" className="card">
            <h3>Dynamic Routes &rarr;</h3>
            <p>Example Dynamic Routes with getStaticPaths</p>
          </a>

          <a href="/home" className="card">
            <h3>Prefetching &rarr;</h3>
            <p>Example Prefetching with "next/link"</p>
          </a>

          <a href="/post/dynamic-sample" className="card">
            <h3>Dynamic Import &rarr;</h3>
            <p>Example Dynamic Import with "next/dynamic"</p>
          </a>

          <a href="/post/client-fetch" className="card">
            <h3>Client-side data fetching &rarr;</h3>
            <p>Example Client-side data fetching</p>
          </a>

          <a href="/sample/static/static-props" className="card">
            <h3>getStaticProps &rarr;</h3>
            <p>Example getStaticProps</p>
          </a>

        </div>

        <p className="description">
          Not Supported Feature Test
        </p>

        <div className="grid">
          <a href="/post/testdynamic" className="card">
            <h3>Dynamic Routes &rarr;</h3>
            <p>Example Dynamic Routes.</p>
          </a>
          <a href="/sample/locales" className="card">
            <h3>Localization Routing &rarr;</h3>
            <p>Example Routing with Localization.</p>
          </a>
          <a href="/sample/api-routes" className="card">
            <h3>API Routes &rarr;</h3>
            <p>Example API Routes.</p>
          </a>
          <a href="/sample/rewrites" className="card">
            <h3>Rewrites &rarr;</h3>
            <p>Example Rewrites.</p>
          </a>
          <a href="/sample/redirects" className="card">
            <h3>Redirects &rarr;</h3>
            <p>Example Redirects.</p>
          </a>
          <a href="/sample/headers" className="card">
            <h3>Headers &rarr;</h3>
            <p>Example Headers</p>
          </a>
          <a href="/sample/middleware" className="card">
            <h3>Middleware &rarr;</h3>
            <p>Example Middleware</p>
          </a>
          <a href="/sample/incremental" className="card">
            <h3>Incremental Static Regeneration &rarr;</h3>
            <p>Example Static Regeneration</p>
          </a>
          <a href="sample/fallback/1" className="card">
            <h3> fallback: true &rarr;</h3>
            <p>Example fallback: true.</p>
          </a>
          <a href="/post/testdynamic" className="card">
            <h3> getServerSideProps &rarr;</h3>
            <p>Example getServerSideProps.</p>
          </a>
        </div>

      </main>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
