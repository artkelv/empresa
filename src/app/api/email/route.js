import { NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer'

export const POST = async (req) => {
    const res = NextResponse

    try {
        const body = await req.json()
        checkForm(body)

        await sendEmail(body)
        return res.json({ message: 'Email foi enviado com sucesso' }, { status: 201 })
    } catch (error) {
        return res.json({ message: error.message }, { status: error.code })
    }
}

const checkForm = (form) => {
    const { email, name, phone, message } = form

    if (email === '' || phone === '' || name === '' || message === '') {
        handleError('Formulário possui pelo menos um campo vazio.', 400)
    }
}

const sendEmail = async (body) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,// webtechdev3@gmail.com
            pass: process.env.EMAIL_PASSWORD, //O tipo de senha usado é "senhas de app"
        },
    });

    const message = emailMessageConfig(body)

    await new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) => {
            error ? reject(error) : resolve()
        })
    }).catch(e => {
        handleError('Não foi possível enviar esse meio tente novamente.', 500)
    })
}

const emailMessageConfig = (body) => {
    const { email, name, phone, message } = body

    const emailHtml = `
    <div>
    <h1>Nome: ${name}</h1>
    <h1>Email: ${email}</h1>
    <h1>Celular: ${phone}</h1>
    <h1>Mensagem: ${message}</h1>
    </div>
`

    const emailMessage = {
        from: process.env.EMAIL,// webtechdev3@gmail.com
        to: process.env.EMAIL,// webtechdev3@gmail.com
        subject: "Teste", // Subject line
        html: emailHtml
    };

    return emailMessage
}

const handleError = (errorMessage, errorCode) => {
    const error = new Error(errorMessage)
    error.code = errorCode
    throw error
}