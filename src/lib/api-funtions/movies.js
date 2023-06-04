import connect from "../Connect";

export const getAllMovies=async()=>await connect.request("/Movis")
//treandingnow
export const treandingMovies = async () => await connect.get("/trendingnow");
//upcomming
export const upcommingMovies = async () => await connect.get("/upComing");
//toprated
export const topratedMovies = async () => await connect.get("/topRated");
//popular
export const popularMovies = async () => await connect.get("/popular");