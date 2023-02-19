import Link from "next/link"

export default function PostList({ posts }) {
    return (
        <>
        <h1>List of all Posts shown here</h1>
        {
            posts.map((post) => {
                return (
                    <div key = {post.id}>
                        <Link href={`posts/${post.id}`} passHref><h2>{post.id} {post.title}</h2></Link>                        
                    </div>
                )
            })
        }
        </>
    )

}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    return {
            props: {
                posts: data
            }
        }
}