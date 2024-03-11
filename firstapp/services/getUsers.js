export const getUsers = async () => {
    let users = await fetch("https://jsonplaceholder.typicode.com/users")
    return users.json()
}