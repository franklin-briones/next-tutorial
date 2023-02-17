import User from "../../components/user"

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {
        props : {
            users: data
        }
    }
}

export default function UserList({ users }) {
    return (
        <>
            <h1>List of Users</h1>
            {
                users.map((user) => {
                    return (
                        <div key = {user.id}>
                            <User user={user}/>
                        </div>
                    )
                })
            }
        </>
        
    )
}