import './styles/globals.css'
import { Inter } from 'next/font/google'
import imageWebtech from "../../public/assets/foto_13.png";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <head>
        <title>Webtech | Desenvolvimento de Sites e Design em Brasília, DF</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Webtech oferece serviços de desenvolvimento de sites e design em Brasília, DF. Desenvolvemos sites institucionais, empresariais, landing pages, blogs, e-commerces e mais. Atendimento 24 horas." />
        <meta property="og:site_name" content="Webtech - Desenvolvimento de Sites e Design em Brasília, DF" />
        <meta property="og:title" content="Desenvolvimento de Sites e Design em Brasília, DF | Webtech" />
        <meta property="og:description" content="Webtech oferece serviços de desenvolvimento de sites e design em Brasília, DF. Desenvolvemos sites institucionais, empresariais, landing pages, blogs, e-commerces e mais. Atendimento 24 horas." />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://www.webtechservicos.com.br/" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="desenvolvimento de sites, design de sites, manutenção de sites, gerenciamento de sites, web design, Brasília, DF, sites institucionais, sites empresariais, landing pages, blogs, e-commerces" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="author" content="Webtech - Soluções em Tecnologia" />
        <link rel="canonical" href="https://www.webtechservicos.com.br/" />
    </head>
    </html>
  )
}
