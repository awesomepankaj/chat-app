import io from 'socket.io-client'
import params from '../config'

let socket = io.connect(params.ipAddress)

export default socket