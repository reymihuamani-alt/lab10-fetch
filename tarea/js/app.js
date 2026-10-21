async function mostrarPosts() {
  const lista = document.querySelector("#posts");
  try {
    // 1. Fetch a las publicaciones del usuario 1
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");

    // 2. Convertir la respuesta a JSON
    const posts = await res.json();

    // 3. Mostrar los títulos con map, join e innerHTML
    lista.innerHTML = posts
      .map(p => `<li>${p.title}</li>`)
      .join("");
  } catch (error) {
    // 4. Mensaje de error
    lista.innerHTML = "<li>No se pudo cargar la información</li>";
  }
}

mostrarPosts();