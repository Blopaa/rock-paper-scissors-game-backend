import bcryp from 'bcrypt'

export const encryptPassword = async (password: string) => {
    const salt = await bcryp.genSalt(10)
    return bcryp.hash(password, salt)
}

export const comparePassword = async (password: string, recivedPassword: string) => {
    return bcryp.compare(recivedPassword, password)
}