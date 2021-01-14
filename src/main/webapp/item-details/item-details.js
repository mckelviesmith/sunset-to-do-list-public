class ItemDetails extends React.Component {

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

    render() {
        return(
            <div className="container">
                <i className="fas fa-cloud fa-3x"></i>
                <a className="btn btn-primary float-right"
                   href="../../item-list/item-list.html">
                    see all
                </a>
                <i className="fas fa-cloud fa-3x"></i>
                <h1>{this.state.item.title}</h1>
                <div id = "description">
                    details: {this.state.item.description}
                </div>
                <div id = "deadline">
                    deadline: {this.state.item.deadline}
                </div>

                <a className="button"
                   href={`/item-editor/item-editor.html?id=${this.state.item.id}`}>
                    modify
                </a>
            </div>
        )
    }
}

ReactDOM.render(
    <ItemDetails/>, document.getElementById("root"))



