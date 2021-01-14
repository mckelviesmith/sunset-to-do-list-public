// URLs
const FIND_ALL_ITEMS = "https://sunset-to-do-list.herokuapp.com//findAllItems"
const FIND_ITEM_BY_ID = "https://sunset-to-do-list.herokuapp.com//findItemById"
const CREATE_ITEM_URL = "https://sunset-to-do-list.herokuapp.com//createItem"
const DELETE_ITEM_URL = "https://sunset-to-do-list.herokuapp.com//deleteItem"
const UPDATE_ITEM = "https://sunset-to-do-list.herokuapp.com//updateThisItem"

/* if hosted locally
const FIND_ALL_ITEMS = "http://localhost:8080/findAllItems"
const FIND_ITEM_BY_ID = "http://localhost:8080/findItemById"
const CREATE_ITEM_URL = "http://localhost:8080/createItem"
const DELETE_ITEM_URL = "http://localhost:8080/deleteItem"
const RENAME_ITEM = "http://localhost:8080/renameItem" */

// finds all items
const findAllItems = () =>
    fetch(`${FIND_ALL_ITEMS}`)
        .then(response => response.json())

// finds item by id
const findItemById = (id) =>
    fetch(`${FIND_ITEM_BY_ID}/${id}`)
        .then(response => response.json())

// creates new item with default values
const createItem = () =>
    fetch(`${CREATE_ITEM_URL}`)
        .then(response => response.json())

// deletes item given id
const deleteItem = (id) =>
    fetch(`${DELETE_ITEM_URL}/${id}`)

// updates item's title, description, deadline, given id
const updateThisItem = (item) =>
    fetch(`${UPDATE_ITEM}/${item.id}/${item.title}/${item.description}/${item.deadline}`)
        .then(response => response.json())
