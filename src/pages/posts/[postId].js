export default function Post({ post }) {
    return (
        <>
            <h2>{post.id} {post.title}</h2>
            <p></p>
        </>
    )
}

export async function getStaticProps(context) {
    const { params } = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await res.json()
    return {
        props: {
            post: data
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    const paths = data.map(post => {
        return {
            params: { postId: `${post.id}` }
        }
    })

    return {
        paths: paths.slice(0,3),
        fallback: false
    }
}