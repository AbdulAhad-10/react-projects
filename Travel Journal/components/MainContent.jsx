import Card from "./Card"
import data from "./data"

const MainContent = () => {
    const cardContent = data.map((item) => {
        return <Card 
        key={item.id}
        img={item.img}
        country={item.country}
        place={item.place}
        description={item.description}
        date={item.date}
        />
    })
  return (
    <main className="main">
        {cardContent}
    </main>
  )
}

export default MainContent