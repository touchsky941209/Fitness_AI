import axios from 'axios'
const port = 8080
const api = axios.create({
    // baseURL:`https://deploy-backend-fitness-node.vercel.app/api`
    // baseURL:`https://l92.168.142.113:${port}/api`
    // baseURL:`https://fitness-backend.vercel.app/api`
    // baseURL:`https://77.37.86.133:8080/api`
    // baseURL:`http://146.59.157.53:${port}/api`
    // baseURL:`https://fitness-website-dk.vercel.app/api`
    baseURL:`http://localhost:${port}/api`
    // baseURL:`https://backend-fitness-dk.vercel.app/api`
    // baseURL:"https://back-portfolio-fitness.vercel.app/api"
})

export default api;