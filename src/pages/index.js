import Link from "next/link"

function Home() {
    return (
        <div>
            <h1>Next JS Pre-rendering</h1>
            <Link href='/posts'>Posts</Link>
        </div>

    
    )
}

export default Home