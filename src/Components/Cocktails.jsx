import { cocktailLists } from "../../constants";

function Cocktails() {  
    return (
        <section id="cocktails" className="noisy">
            <div className="list">
                <div className="popular">
                    <h2>Most popular cocktails</h2>
                    <ul>
                        {cocktailLists.map(({name, country, detail, price}) => (
                            <li key={name}>
                                <div className="md:me-28">
                                    <h3>{name}</h3>
                                    <p>{country}</p> | {detail}
                                </div>
                                <span>{price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                </div>

        </section>
    )
}

export default Cocktails;