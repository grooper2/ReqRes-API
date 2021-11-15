export const regresRepository = {
  registerRequest: async ({ email, password }) => {
    const requestBody = {
      email: email,
      password: password,
    };
    const response = fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    console.log("response: " + response);
    return response;
  },

  loginRequest: async ({ email, password }) => {
    const requestBody = {
      email: email,
      password: password,
    };
    const response = fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    return response;
  },

  listOfUsers: async () => {
    const response = await fetch("https://reqres.in/api/users?page=1", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data;
  },

  deleteUser: async ({ usersId }) => {
    const response = await fetch(
      "https://reqres.in/api/users/" + `${usersId}`,
      {
        method: "delete",
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log("data response:", response.status);
    return response.status;
  },
};

export default regresRepository;
