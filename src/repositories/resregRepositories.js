export const regresRepository = {
  registerRequest: async ({ email, password }) => {
    const requestBody = {
      email: email,
      password: password,
    };
    try {
      const response = fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
    return (await response).json();
    } catch (error) {
      console.log(error)
      return error;
    }
  },

  loginRequest: async ({ email, password }) => {
    const requestBody = {
      email: email,
      password: password,
    };
    try {
      const response = fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
    return (await response).json();
    } catch (error) {
      console.error(error)
      return error;
    }
  },

  listOfUsers: async () => {
    try {
      const response = await fetch("https://reqres.in/api/users?page=1", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).catch(error => alert(error.message));
    const data = await response.json();
    return data;
    } catch (error) {
      console.error(error)
      return error;
    }
  },

  deleteUser: async ({ usersId }) => {
    const response = await fetch(
      "https://reqres.in/api/users/"+`${usersId}`,
      {
        method: "delete",
        headers: { "Content-Type": "application/json" },
      }
    ).catch(error => alert(error.message));
    console.log("data response:", response.status);
    return response.status;
  },
};

export default regresRepository;
