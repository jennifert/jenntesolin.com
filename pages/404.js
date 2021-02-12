import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE } from '../lib/constants'
import Layout from '../components/layout'

export default function Custom404() {
    return (
        <Layout>
            <Head>
                <title>404 - {SITE_TITLE}</title>
            </Head>

            <section aria-labelledby="main-content">
                <h1 id="main-content" className="py-5">404 - Page not Found</h1>
                <p>
                    Sorry, the page you are looking for cannot be found. IF you came here from a link, Feel free to <a href="mailto:me@jenntesolin.com">send me an email</a> from the page you arrived from. Please try the search box above
                </p>
            </section>
            
        </Layout>
    )
}
