document.addEventListener("DOMContentLoaded", async () => {
    const userList = document.getElementById("user-list");

    try {
        const response = await fetch("http://localhost:3000/users"); // 🔹 Asegúrate que esta URL es correcta
        const users = await response.json();

        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(li);
        });
    } catch (error) {
        console.error("Error al obtener usuarios", error);
    }
});
