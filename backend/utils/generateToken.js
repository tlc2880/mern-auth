import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'devlopment', 
        sameSite: 'strict',
        maxAge: 30 * 24 * 3600 * 1000
    })
}

export default generateToken;