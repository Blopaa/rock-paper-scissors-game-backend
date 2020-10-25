import app from './app'
import './database'

const main = async () => {
    app.listen(app.get('port'))
    console.log(`server on port ${app.get('port')}`)
}

main()