// editor page
class ItemEditor extends React.Component {
    state = {
        item: {}
    }

    // finds item by its id
    findItemById = (id) =>
        findItemById(id)
            .then(item => this.setState({item}))

    componentDidMount = () => {
        const id = window.location.search.split("=")[1]
        this.findItemById(id)
    }

    // saves the updated item
    saveItem = () =>
        updateThisItem(this.state.item)

// shows an editing form
    render() {
        return(
            <div className="container">
                <div id = "all">
                    <a href="../../item-list/item-list.html">
                        see all
                    </a>
                </div>
                <div id = "back">
                    <a href={`/item-details/item-details.html?id=${this.state.item.id}`}
                       className="fas fa-arrow-left fa-4x"></a>
                </div>
                <h1>modifying: {this.state.item.title}</h1>
                <div className="form-group">
                    <label for="title"> item title </label>
                    <input
                        onChange={(event) => this.setState({
                            item: {
                                ...this.state.item,
                                title: event.target.value
                            }
                        })}
                        className="form-control form-control-lg"
                        type = "text"
                        id = "title"
                        placeholder="item"
                        value={this.state.item.title}/>

                    <label htmlfor="details"> details </label>
                    <input
                        onChange={(event) => this.setState({
                            item: {
                                ...this.state.item,
                                description: event.target.value
                            }
                        })}
                        className="form-control form-control-lg"
                        type = "text"
                        id = "details"
                        placeholder="nothing to add"
                        value={this.state.item.description}/>

                    <label htmlfor="deadline"> deadline </label>
                    <input
                        onChange={(event) => this.setState({
                            item: {
                                ...this.state.item,
                                deadline: event.target.value
                            }
                        })}
                        className="form-control form-control-lg"
                        type = "text"
                        id = "deadline"
                        placeholder="no rush"
                        value={this.state.item.deadline}/>

                </div>
                <button onClick={this.saveItem}>
                    save
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <ItemEditor/>, document.getElementById("root"))

