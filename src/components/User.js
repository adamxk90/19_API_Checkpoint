import './User.css'
function User(props) {
  const { id, name, username, email, address } = props
  return (
    <div className="user">
      <small>{id}</small>
      <h1>{name}</h1>
      <h2>Username: {username}</h2>
      <p>{email}</p>
      <p>Adress: Street{address.street}, suite: {address.suite}, city: {address.city}, zip: {address.zipcode} </p>
      <p>Latitude: {address.geo.lat}, longitude: {address.geo.lng}</p>
    </div>
  )
}

export default User
