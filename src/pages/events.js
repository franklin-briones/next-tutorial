import { useState } from "react"

export default function EventList({ eventList }) {

    const [events, setEvents] = useState(eventList)

    const fetchSportsEvents = async() => {
        const res = await fetch('http://localhost:4000/events?category=sports')
        const data = await res.json()
        setEvents(data)
    }

    return (
        <div>
            <button onClick={fetchSportsEvents}>Sports Events</button>
            <h1>List of Events</h1>
            {events.map((event) => {
                return (
                    <div key= {event.id}>
                        <h2>{event.id} {event.title} {event.date} | {event.category}</h2>
                        <p>{event.description}</p>
                        <hr />
                    </div>
                    )
            })}
        </div>
    )

}



export async function getServerSideProps() {
    const res = await fetch('http://localhost:4000/events')
    const data = await res.json()
    
    return {
        props: {
            eventList: data
        }
    }
}