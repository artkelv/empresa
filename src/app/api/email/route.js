import { NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer'


export const POST = async (req) => {
    const res = NextResponse
    try {
        checkForm(await req.json())
        
        const { email, name, phone, message } = form

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'viniolicar2004@gmail.com',
                pass: "gysbmdfzbsqemtfi", //O tipo de senha usado é "senhas de app"
            },
        });

        const html = `
            <div>
            <h1>Nome: ${name}</h1>
            <h1>Email: ${email}</h1>
            <h1>Celular: ${phone}</h1>
            <h1>Mensagem: ${message}</h1>
            </div>
        `

        const messages = {
            from: 'viniolicar2004@gmail.com',
            to: 'viniolicar2004@gmail.com',
            subject: "Teste", // Subject line
            html: html
        };

        // webtechdev3@gmail.com
        await new Promise((resolve, reject) => {
            transporter.sendMail(messages, (error, info) => {
                if (error) {
                    reject(error)
                } else {
                    resolve()
                }
            })
        }).catch(e => {
            returnError('Não foi possível enviar esse meio tente novamente.', 500)
        })

        return res.json({ message: 'Email foi enviado com sucesso' }, { status: 201 })
    } catch (error) {
        return res.json({ message: error.message }, { status: error.code })
    }
}

const checkForm = (form) => {
    const { email, name, phone, message } = form

    if (email === '' || phone === '' || name === '' || message === '') {
        returnError('Formulário possui pelo menos um campo vazio.', 400)
    }
}

const returnError = (errorMessage, errorCode) => {
    const error = new Error(errorMessage)
    error.code = errorCode
    throw error
}