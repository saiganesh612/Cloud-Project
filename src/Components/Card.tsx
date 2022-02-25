import type { Data } from "../Types/dataType"
import "./Card.css"

type Props = {
    info: Data
}

const Card: React.FC<Props> = ({ info }) => {
    return (
        <div className="card" >
            <img src={info.download_url} className="card-img-top" alt="pic" />
            <div className="card-body">
                <p className="card-text">Author~ <i>{info.author}</i></p>
            </div>
        </div>
    )
}

export default Card
