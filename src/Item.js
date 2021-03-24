const Item = ({item, id}) => {
    return (
        <ul>
            <li>{item.name}</li>
            <li>{id}</li>
        </ul>
    )

}

export default Item