interface IDecode {
  user: {
    id: number,
    username: string,
    role: string,
    email: string,
    iat: number,
    exp: number
  }
}

export default IDecode;
