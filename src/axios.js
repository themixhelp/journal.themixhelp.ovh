import axios from 'axios'

const API_TOKEN = import.meta.env.VITE_API_TOKEN

const instance = axios.create({
	baseURL: 'https://api.journal.themixhelp.ovh/api',
	headers: { Authorization: `Bearer ${API_TOKEN}` },
})

export default instance
