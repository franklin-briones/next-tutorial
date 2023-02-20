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


    if (!data.id) {
        return {
            notFound: true
        }
    }

    // console.log(`Generate page for /posts/${params.postId}`)
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
        paths,
        fallback: 'blocking'
    }
}