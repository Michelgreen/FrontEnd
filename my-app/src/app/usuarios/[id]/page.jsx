import axios from "axios";

async function getUsuario(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const usuario = await axios.get(url);
  return usuario.data;
}

export default async function Usuario({ params }) {
  const { id } = params;
  const usuario = await getUsuario(id);

  return (
    <div>
      <h1>Información del Usuario</h1>
      <div>
        <h2>Detalles del Usuario</h2>
        <p><strong>ID:</strong> {usuario.id}</p>
        <p><strong>Nombre:</strong> {usuario.name}</p>
        <p><strong>Usuario:</strong> {usuario.username}</p>
        <p><strong>Correo:</strong> {usuario.email}</p>
        <p><strong>Teléfono:</strong> {usuario.phone}</p>
        <p><strong>Website:</strong> {usuario.website}</p>
      </div>
      <div>
        <h2>Dirección</h2>
        <p><strong>Calle:</strong> {usuario.address.street}</p>
        <p><strong>Suite:</strong> {usuario.address.suite}</p>
        <p><strong>Ciudad:</strong> {usuario.address.city}</p>
        <p><strong>Código Postal:</strong> {usuario.address.zipcode}</p>
        <p><strong>Geo:</strong> Latitud: {usuario.address.geo.lat}, Longitud: {usuario.address.geo.lng}</p>
      </div>
      <div>
        <h2>Compañía</h2>
        <p><strong>Nombre:</strong> {usuario.company.name}</p>
        <p><strong>Eslogan:</strong> {usuario.company.catchPhrase}</p>
        <p><strong>BS:</strong> {usuario.company.bs}</p>
      </div>
    </div>
  );
}
