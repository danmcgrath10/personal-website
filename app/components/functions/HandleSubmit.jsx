"use server";
import React from "react";
import { Resend } from 'resend';
import MessageUsEmail from '../MessageUsEmail';

export async function HandleSubmit(email, subject, message) {

    const resend = new Resend(process.env.RESEND_API_KEY);

    const {data} = await resend.emails.send({
        from: 'Danny <danny@dannymportfolio.com>',
        to: ['danmcgrath1035@gmail.com'],
        subject: subject,
        react: MessageUsEmail({name: email, email, message})
    })

    console.log(data);
}