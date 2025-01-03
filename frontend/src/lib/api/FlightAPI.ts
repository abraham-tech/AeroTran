import axios from 'axios';
import {Flight, Booking, Ticket} from "@/types";


// Define the base URL for the API
const BASE_URL = "https://your-spring-boot-app-1093610135410.us-central1.run.app" || "http://localhost:8080";

const API_BASE_URL = BASE_URL + '/api/flights';
const BOOKINGS_BASE_URL = BASE_URL + '/api/bookings';


// Axios instance for API calls
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const bookingsApi = axios.create({
    baseURL: BOOKINGS_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// CRUD functions
export const FlightAPI = {
    // Create a new flight
    createFlight: async (flight: Flight): Promise<Flight> => {
        const response = await api.post('', flight);
        return response.data;
    },

    // Get all flights
    getAllFlights: async (): Promise<Flight[]> => {
        const response = await api.get('');
        return response.data;
    },

    // Get a specific flight by ID
    getFlightById: async (id: string): Promise<Flight> => {
        const response = await api.get(`/${id}`);
        return response.data;
    },

    // Update a flight
    updateFlight: async (id: string, flight: Partial<Flight>): Promise<Flight> => {
        const response = await api.put(`/${id}`, flight);
        return response.data;
    },

    // Delete a flight
    deleteFlight: async (id: string): Promise<void> => {
        await api.delete(`/${id}`);
    },

    // Search flights by departure and destination cities
    searchFlights: async (departureCity: string, destinationCity: string): Promise<Flight[]> => {
        const response = await api.get(`/search`, {
            params: { departureCity, destinationCity },
        });
        return response.data;
    },
};

export const BookingAPI = {
    // Create a new booking
    createBooking: async (booking: Booking): Promise<Booking> => {
        const response = await bookingsApi.post('', booking);
        return response.data;
    },

    // Get all tickets
    getAllTickets: async (): Promise<Ticket[]> => {
        const response = await bookingsApi.get('');
        return response.data;
    },
};
