const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkRlbGl2ZXJ5IEFwcCBBZG1pbiIsImVtYWlsIjoiYWRtQGRlbGl2ZXJ5YXBwLmNvbSIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwiaWF0IjoxNjY0ODQ3MDIzLCJleHAiOjE2OTYzODMwMjN9.7ljC5g3TgMsBs4hUsAbqMvJMC6RZqWmJh52Mt2v3zHU";

const newUser = {
  name: 'newUserCreate',
  email: 'newEmail@email.com',
  password: 'newPassword',
  role: 'customer',
};

const deletedUser = {
  name: 'newUserCreate',
  email: 'newEmail@email.com',
  password: '14a88b9d2f52c55b5fbcf9c5d9c11875',
  role: 'customer',
  status: "Deleted Sucessfully",
}

module.exports = { token, newUser, deletedUser };