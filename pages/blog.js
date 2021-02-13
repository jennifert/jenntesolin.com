import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE } from '../lib/constants'
import Layout from '../components/layout'

const code = `
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`.trim();

const code2 = `
class HelloWorld {
            public static void main(String[] args) {
                System.out.println("Hello, World!");
            }
        }
`.trim();

export default function Blog() {
    return (
        <Layout>
            <Head>
                <title>Blog Posts - {SITE_TITLE}</title>
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content" className="py-5">Blog Posts</h1>
                <p>posts will be here</p>
                <p>
                    body copy blah blah.
                </p>

                <pre className="line-numbers">
                    <code className="language-js">
                        {code}
                    </code>
                </pre>
                <p>More blah blah blah</p>
                <pre class="language-java" >
                    <code>
                        {code2}
                    </code>
                </pre>
            </section>
        </Layout>
    )
}
