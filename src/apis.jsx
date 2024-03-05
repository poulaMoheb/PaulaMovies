import axios from "axios";

let mainURL = process.env.REACT_APP_MAIN_URL;
let AuthKey = process.env.REACT_APP_API_KEY;
console.log("main url :", mainURL)

// this is the main url :: https://api.themoviedb.org/3/
//https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>
export const getMovies = (condition, page, onSucceess, onError, onFinally) => {
    axios.get(`${mainURL}/movie/${condition}${AuthKey}&page=${page}`)
        .then((res) => {
            onSucceess(res)
        })
        .catch((err) => {
            onError(err)
        })
        .finally(() => {
            onFinally()
        })
}
// export const getMoreMovies = (condition, , onSucceess, onError, onFinally) => {
//     axios.get(`${mainURL}/movie/${condition}${AuthKey}`)
//         .then((res) => {
//             onSucceess(res)
//         })
//         .catch((err) => {
//             onError(err)
//         })
//         .finally(() => {
//             onFinally()
//         })
// }
// https://api.themoviedb.org/3/genre/movie/list?api_key=cb062bf85f5cc582b3f7cb04406a3fad&language=en-US
export const getGenre = (onSucceess, onError, onFinally) => {
    axios.get(`${mainURL}/genre/movie/list${AuthKey}&language=en-US`)
        .then((res) => onSucceess(res))
        .catch((err) => onError(err))
        .finally(() => onFinally())
}
export const getGenreMov = (genreId, onSucceess, onError, onFinally) => {
    axios.get(`${mainURL}/discover/movie${AuthKey}&language=en-US&with_genres=${genreId}`)
        .then((res) => onSucceess(res))
        .catch((err) => onError(err))
        .finally(() => onFinally())
}
export const searchRequest = (searchString, onSucceess, onError, onFinally) => {
    axios.get(`${mainURL}search/movie${AuthKey}&query=${searchString}`)
        .then((res) =>
            onSucceess(res))
        .catch((err) => {
            onError(err)
        })
        .finally(() => {
            onFinally()
            console.log("finally")
        })

}
//https://api.themoviedb.org/3/movie/631842?api_key=cb062bf85f5cc582b3f7cb04406a3fad
export const singleRequest = (id, onSucceess, onError, onFinally) => {
    axios.get(`${mainURL}movie/${id}${AuthKey}`)
        .then((res) =>
            onSucceess(res))
        .catch((err) => {
            onError(err)
        })
        .finally(() => {
            onFinally()
        })

}