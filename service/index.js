import axios from 'axios';

export const SignInAPI = async (data) => {
    try {
        const response = await axios.post("https://cinestar.onrender.com/auth/signup", {
            ...data
        })
        return response.data
    } catch (error) {
        console.log(error)
    }

}


export const ReadMovies = async () => {
    try {
        const response = await axios.get("https://cinestar.onrender.com/movie/allMovies")
        // console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }

}

export const ShowOfMovie = async (movieId) => {
    try {
        console.log({ movieId })
        const response = await axios.post("https://cinestar.onrender.com/movie/showsOfMovie", {
            movieId
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const SeatOfShow = async (showId) => {
    try {
        const response = await axios.post("https://cinestar.onrender.com/seat/allSeats", {
            Show_ref: showId
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const LoginAPI = async ({ Username, Password }) => {
    try {
        const response = await axios.post("https://cinestar.onrender.com/auth/login", {
            Username, Password
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const PaymentAPI = async ({ User_ID, Seat_IDs }) => {
    try {
        const response = await axios.post("https://cinestar.onrender.com/ticket/addTicket", {
            User_ID, Seat_IDs
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const GetAllTicketsAPI = async ({ User_ID }) => {
    try {
        const response = await axios.post("https://cinestar.onrender.com/ticket/allTickets", {
            User_ID
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

