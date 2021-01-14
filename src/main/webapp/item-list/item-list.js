// list of items
class ItemList extends React.Component {
    state = {
        items: []
    }

    // finds all items
    findAllItems = () =>
        findAllItems()
            .then(items => this.setState({items}))

    componentDidMount = () =>
        this.findAllItems()

    // creates new item with default values
    createItem = () =>
        createItem()
            .then(this.findAllItems)

    // deletes item given id
    deleteItem = (id) =>
        deleteItem(id)
            .then(this.findAllItems)

    // shows list of item titles
    render() {
        return(
            <div>
                <h1>to do: </h1>
                <table className="center">
                    <tbody>
                    {
                        this.state.items.map(item =>
                            <tr key={item.id}>
                                <td>
                                    <label className="container">
                                        <input type="checkbox" id="complete" onClick={() => this.deleteItem(item.id)} />
                                        <span> <i className="fas fa-cloud fa-2x"></i> </span>
                                    </label>
                                </td>
                                <td>
                                    <a className="btn btn-primary float-right"
                                       href={`/item-details/item-details.html?id=${item.id}`}>
                                        {item.title}
                                    </a>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                &nbsp;
                <label className="createButton">
                    <button onClick={this.createItem}>
                        i have to do something!
                    </button>
                </label>
            </div>
        )
    }
}

ReactDOM.render(
    <ItemList/>, document.getElementById("root"))
