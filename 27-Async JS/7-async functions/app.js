// async function hello() {}

// const sing = async () => {
//   throw new Error("UH oh");
//   return "LALALA";
// };

// sing()
//   .then((data) => {
//     console.log("promise resolved with", data);
//   })
//   .catch((err) => console.log("Promise rejected", err));

const login = async (username, password) => {
  if (!username || !password) throw "missing credentials";
  if (password == "pass") return "Welcome!";
  throw "Invalid Password";
};

login("asdaa", "pass")
  .then((msg) => {
    console.log("Logged In", msg);
  })
  .catch((err) => {
    console.log("Error", err);
  });
