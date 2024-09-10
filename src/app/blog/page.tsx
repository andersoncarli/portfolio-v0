import Link from 'next/link'

export default function Blog() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        <li>
          <Link href="/blog/sample-post">Sample Blog Post</Link>
        </li>
      </ul>
    </div>
  )
}
