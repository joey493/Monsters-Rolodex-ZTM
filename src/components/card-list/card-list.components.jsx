import './card-list.styles.css'
import Card from '../card/card.component'

const CardList = (props) => {
    return (
        <div className="card-list">
            {/*{props.children} */}
            {props.monsters.map((monster) => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    )
}

export default CardList
