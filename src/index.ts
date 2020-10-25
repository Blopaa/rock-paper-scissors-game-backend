import {app, server} from './app'
import './database'

const main = async () => {
    server.listen(app.get('port'))
    console.log(`server on port ${app.get('port')}`)
}

main()