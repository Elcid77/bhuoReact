import ItemCount from "./itemCount";

function ItemDetail({ detail }) {

    return (
        <div>
            <h2>{detail?.name}</h2>
            <img src={detail?.imagen} />
            <p>{detail?.descripcion}</p>
            <ItemCount detail={detail}/>
        </div>

    )
}
export default ItemDetail;