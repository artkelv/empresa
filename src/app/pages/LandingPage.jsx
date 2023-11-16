/* eslint-disable react/no-unescaped-entities */
'use client';

import icon1 from '../../../public/icons/icon_1.svg'
import icon3 from '../../../public/icons/icon_3.svg'
import icon4 from '../../../public/icons/icon_4.svg'
import icon5 from '../../../public/icons/icon_5.svg'
import icon6 from '../../../public/icons/icon_6.svg'
import icon7 from '../../../public/icons/icon_7.svg'
import icon8 from '../../../public/icons/icon_8.svg'
import icon9 from '../../../public/icons/icon_9.svg'
import icon10 from '../../../public/icons/icon_10.svg'
import icon11 from '../../../public/icons/icon_11.svg'
import icon12 from '../../../public/icons/icon_12.svg'
import icon13 from '../../../public/icons/icon_13.svg'
import icon14 from '../../../public/icons/icon_14.svg'
import icon17 from '../../../public/icons/icon_17.svg'
import icon18 from '../../../public/icons/icon_18.svg'
import icon19 from '../../../public/icons/icon_19.svg'

import img2 from '../../../public/assets/foto_2.png'
import img4 from '../../../public/assets/foto_4.png'
import img5 from '../../../public/assets/foto_5.png'
import img6 from '../../../public/assets/foto_6.png'
import img7 from '../../../public/assets/foto_7.png'

import Image from 'next/image'
import styles from '../styles/LandingPage.module.css'
import axios from 'axios';
import { useState } from 'react';

import 'animate.css'

export default function LandingPage() {

    const [menuEvent, setMenuEvent] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertToggle, setAlertToggle] = useState(false)
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })

    const services = [
        { img: icon7, name: 'SITES COMERCIAIS', url: '' },
        { img: icon19, name: 'Design de Páginas Web', url: '', new: true },
        { img: icon8, name: 'LANDING PAGES', url: '' },
        { img: icon9, name: 'SITES INSTITUCIONAIS', url: '' },
        { img: icon10, name: 'E-COMMERCES', url: '' },
        { img: icon11, name: 'BLOGS', url: '' },
        { img: icon12, name: 'SITES ONE PAGE', url: '' },
        { img: icon13, name: 'SITE EMPRESA', url: '' },
        { img: icon14, name: 'PORTFÓLIOS', url: '' },
    ]

    const whatsappLink = "https://wa.me/61984977155"

    const sendEmail = () => {
        axios.post(`/api/email`, form)
            .then(res => {
                openAlert(res.data.message)
                setForm({ name: '', phone: '', email: '', message: '' })
            })
            .catch(e => openAlert(e.response.data.message))
    }

    const openAlert = (message) => {
        // Quando expandir mais o site criar um componente só para o alert
        setAlertMessage(message)
        setAlertToggle(true)

        setTimeout(() => {
            setAlertToggle(false)
        }, 3000);
    }

    const toggleMenu = () => {
        console.log(menuEvent)
        switch (menuEvent) {
            case 'menuOpen':
                setMenuEvent('menuClose')
                break;

            default:
                setMenuEvent('menuOpen')
                break;
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.img1Container}></div>
            <div className={styles.alertContainer}
                style={!alertToggle ? { display: "none" } : {}}
            >
                <p>{alertMessage}</p>
                <button onClick={e => setAlertToggle(false)}>X</button>
            </div>
            <div className={styles.headerContainer}>
                <a className={styles.logo} href="">WEB TECH</a>

                <ul className={styles.navContainer}>
                    <li>
                        <a href="#sobre">SOBRE</a>
                    </li>
                    <li>
                        <a href="#seviços">SERVIÇOS</a>
                    </li>
                    <li>
                        <a href="#cases">CASES</a>
                    </li>
                    <li>
                        <a href="#contatos">CONTATO</a>
                    </li>

                </ul>

                <span className={styles.phoneContainer}>
                    <Image src={icon1} alt='' width="auto" height="auto" />
                    55 61 9 9466-2277
                </span>

                <button className={styles.menuButton} onClick={toggleMenu}>
                    <Image src={icon17} alt='' width="auto" height="auto" />
                </button>
            </div>

            <div className={`${styles.menuContainer} ${styles[menuEvent]}`}>
                <button onClick={toggleMenu}>
                    <Image src={icon18} alt='' width="auto" height="auto" />
                </button>

                <ul>
                    <li>
                        <a onClick={toggleMenu} href="#seviços">SERVIÇOS</a>
                    </li>
                    <li>
                        <a onClick={toggleMenu} href="#cases">CASES</a>
                    </li>
                    <li>
                        <a onClick={toggleMenu} href="#contatos">CONTATO</a>
                    </li>
                </ul>
            </div>

            <span className={styles.headerBorder}></span>

            <div className={styles.firstSection}>
                <div className={`${styles.mainTexts} animate__animated animate__fadeInLeft`}>
                    <h1 >O NOSSO TRABALHO</h1>
                    <h1> É DEIXAR </h1>
                    <h1>A SUA EMPRESA ONLINE</h1>
                    <p>Venha construir o site da sua empresa com quem entende do assunto.</p>
                </div>

                <div className={styles.firstSectionButtons}>
                    <a href="#contatos" className={styles.buttonRippleEffect}>QUERO UM SITE</a>
                    <a href={whatsappLink} className={styles.buttonRippleEffect}>FALAR COM ATENDENTE</a>
                </div>
            </div>

            <div className={styles.testeSection}>
                <div className={`${styles.advantageContainer} animate__animated animate__fadeIn`}>
                    <span className={styles.advantageText}>
                        <h1>WEBTECH</h1>
                        <p>
                            Aqui na web-tech, levamos a serio o nosso trabalho do inicio
                            ao fim,iremos adorar construir uma parte da sua empresa.
                        </p>
                    </span>
                    <div>
                        <div className={styles.advantage}>
                            <Image src={icon3} alt='' width="auto" height="auto" />
                            <p>Profissionalismo</p>
                            <p>
                                Combinamos conhecimento técnico com ética de trabalho
                                exemplar para criar o seu site
                            </p>
                        </div>

                        <div className={styles.advantage}>
                            <Image src={icon4} alt='' width="auto" height="auto" />
                            <p>Responsabilidade</p>
                            <p>
                                Assumimos a responsabilidade
                                de transformar suas aspirações
                                em realidade digital.
                            </p>
                        </div>

                        <div className={styles.advantage}>
                            <Image src={icon5} alt='' width="auto" height="auto" />
                            <p>Criativa</p>
                            <p>
                                Somos apaixonados por
                                transformar ideias em experiências
                                cativantes.
                            </p>
                        </div>

                        <div className={styles.advantage}>
                            <Image src={icon6} alt='' width="auto" height="auto" />
                            <p>Inovadora</p>
                            <p>
                                Aqui levamos o que fazemos a
                                sério, é sua empresa no topo!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.secondSection} >
                <div className={styles.imgContainer}>
                    <Image className={styles.img2} src={img2} alt='Imagem 2' width="auto" height="auto" />

                    <div className={styles.messageContainer}>
                        <h1>"A sua empresa precisa estar online."</h1>
                        <p>WEB-TECH</p>
                    </div>
                </div>

                <span className={styles.verticalBorder}></span>

                <div className={styles.whatWeDoContainer}>
                    <h1>O QUE FAZEMOS</h1>
                    <span></span>

                    <p>
                        Construimos sua aplicação, seja ela: site de vendas,
                        blogs, landing pages, site comercial etc.
                    </p>

                    <p>
                        Aqui nós construimos o site da sua empresa de uma
                        forma elegante, responsavel e criativo. Amamos o que
                        fazemos e gostariamos de está com a sua empresa
                        nesta nova fase.
                    </p>

                    <a href={whatsappLink} className={styles.buttonRippleEffect}>QUERO UM SITE!</a>
                </div>
            </div>
            <div className={styles.thirdSection} id='sobre'>
                <div className={styles.img3}></div>

                <div className={styles.aboutUsContainer}>
                    <h1>SOBRE A WEB-TECH</h1>
                    <h2>
                        VENHA VER UM POUCO QUEM SOMOS E POR
                        QUE A WEB-TECH FOI CRIADA.
                    </h2>
                    <p>
                        A WEB-TECH, nasce de três mentes apaixonadas por tecnologia,
                        Francine, Arthur e Gessiel. Nos unimos para transformar ideias em
                        realidade digital desde 2023. Com foco na criação de sites
                        personalizados, desde blogs inspiradores até e commerces
                        revolucionários, nossa equipe diversificada combina talentos para
                        traduzir visões em experiências únicas.
                    </p>

                    <p>
                        Nossa abordagem centrada no cliente nos inspira a criar sites que
                        transcendem expectativas. Cada pixel e linha de código é uma
                        oportunidade para expressar personalidade e valores, enquanto
                        abraçamos tecnologias inovadoras para moldar o futuro digital.
                    </p>
                    <p>
                        Nossa missão é simples: capacitar negócios e indivíduos no mundo
                        digital em constante evolução. Com valores sólidos em excelência,
                        colaboração e integridade, convidamos você a explorar nossa jornada
                        digital e iniciar a sua própria conosco.
                    </p>
                </div>
            </div>

            <span className={styles.greenLine}></span>

            <div className={styles.fourthSection} id='seviços'>
                <div className={styles.servicesHeader}>
                    <div>
                        <h1>SERVIÇOS</h1>
                        <p>
                            Confira alguns serviços que ofertamos, dentre eles temos
                            construção de Sites Pessoais, Blogs, Landing pages e muito mais,
                            confira!.
                        </p>
                    </div>
                    <span>
                        CLIQUE NO CARD DESEJADO PARA SABER MAIS
                    </span>
                </div>

                <div className={styles.servicesContainer}>
                    {
                        services.map(service => {
                            return (
                                <div className={`${styles.service} ${service.new ? styles.newService : ''}`} key={service?.name}>
                                    <span
                                        style={service.new ? { display: 'block' } : { display: 'none' }}
                                        className={styles.new}
                                    >
                                        Novidade
                                    </span>
                                    <Image src={service?.img} alt='' width="auto" height="auto" />
                                    <p>{service?.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <span className={styles.greenLine}></span>

            <div className={styles.fifthSection} id='cases'>
                <div className={styles.fifthSectionHeader}>
                    <span>
                        <h1>CONFIRA ALGUNS DE NOSSOS </h1>
                        <h1>CASES</h1>
                    </span>

                    <p>
                        Confira abaixo alguns de nossos projetos que foram feitos para alguns
                        clientes, clique em “descrição do site” para visualizar o propósito do projeto.
                    </p>
                </div>

                <div className={styles.casesContainer}>
                    <div className={styles.case}>
                        <Image src={img4} alt='Imagem 4' width="auto" height="auto" />

                        <div>
                            <h1>LILIUM CASE</h1>
                            <p>Empresa de Marketing</p>
                        </div>

                        <div className={styles.caseBtnContainer}>
                            <a href="https://ludicsrous-receipt.surge.sh/" className={styles.buttonRippleEffect}>VISUALIZAR CASE</a>
                            <button className={styles.buttonRippleEffect}>DESCRIÇÃO DO SITE</button>
                        </div>
                    </div>
                    <div className={styles.case}>
                        <Image src={img5} alt='Imagem 5' width="auto" height="auto" />

                        <div>
                            <h1>FRANCY SEGUROS</h1>
                            <p>Empresa de Marketing</p>
                        </div>

                        <div className={styles.caseBtnContainer}>
                            <a href="https://necessary-rake.surge.sh/" className={styles.buttonRippleEffect}>VISUALIZAR CASE</a>
                            <button className={styles.buttonRippleEffect}>DESCRIÇÃO DO SITE</button>
                        </div>
                    </div>
                    <div className={styles.case}>
                        <Image src={img6} alt='Imagem 6' width="auto" height="auto" />

                        <div>
                            <h1>IPAM</h1>
                            <p>Empresa de Marketing</p>
                        </div>

                        <div className={styles.caseBtnContainer}>
                            <a href="https://fumblisng-celery.surge.sh/" className={styles.buttonRippleEffect}>VISUALIZAR CASE</a>
                            <button className={styles.buttonRippleEffect}>DESCRIÇÃO DO SITE</button>
                        </div>
                    </div>
                    <div className={styles.case}>
                        <Image src={img7} alt='Imagem 7' width="auto" height="auto" />

                        <div>
                            <h1>CORPORALI</h1>
                            <p>Clinica de Cirurgia Plástica</p>
                        </div>

                        <div className={styles.caseBtnContainer}>
                            <a href="https://corporali-2b182ygyu-artkelv.vercel.app/" className={styles.buttonRippleEffect}>VISUALIZAR CASE</a>
                            <button className={styles.buttonRippleEffect}>DESCRIÇÃO DO SITE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sixthSection}>
                <h1>
                    VENHA TRANSFORMAR A HISTÓRIA
                    DA SUA EMPRESA CONOSCO
                </h1>

                <p>
                    A sua empresa tem que está hoje! O mercado não espera, vamos
                    criar algo sensacional.
                </p>

                <a href={whatsappLink} className={styles.buttonRippleEffect}>FALE CONOSCO</a>
            </div>
            <div className={styles.opinionsContainer}>
                <div className={styles.opinionHeader}>
                    <span className={styles.opinionHeaderLine}></span>
                    <div className={styles.opinionHeaderContent}>
                        <h1>OPINIÕES DE NOSSOS CLIENTES</h1>

                        <p>
                            Confira o que os nossos clientes dizem sobre os
                            nossos trabalhos
                        </p>
                    </div>
                    <span className={styles.opinionHeaderLine}></span>
                </div>

                <div className={styles.opinion}>
                    <div>
                        <span>
                            <p>
                                {/* Nossa empresa está profundamente grata à WEBTECH por criar uma aplicação que
                                revolucionou a maneira como fazemos negócios. Sua expertise técnica e dedicação à
                                excelência são evidentes em cada aspecto deste projeto. Agora, estamos mais eficientes e
                                conectados do que nunca, e devemos isso a vocês. Obrigado por serem os mestres por trás do
                                nosso sucesso digital. */}

                                A WEBTECH foi fundamental na criação de nossa aplicação personalizada.
                                Sua equipe demonstrou profissionalismo, criatividade e compromisso em
                                atender às nossas necessidades. Graças a vocês, temos agora uma
                                ferramenta digital de ponta que nos diferencia da concorrência.
                                Estamos imensamente agradecidos pelo seu trabalho excepcional.
                            </p>

                            <h3 className={styles.companyName}>Aguiar Confecções</h3>
                        </span>

                        <span>
                            <h1>LUANA AGUIAR</h1>
                            <h3>Design de Produto</h3>
                        </span>
                    </div>
                </div>

                <span className={styles.greenLine}></span>

                <div className={styles.opinion}>
                    <div>
                        <span>
                            <p>
                                {/* A WEBTECH foi fundamental na criação de nossa aplicação personalizada. Sua
                                equipe demonstrou profissionalismo, criatividade e compromisso em atender às nossas
                                necessidades. Graças a vocês, temos agora uma ferramenta digital de ponta que nos diferencia
                                da concorrência. Estamos imensamente agradecidos pelo seu trabalho excepcional. */}

                                Nossa empresa está profundamente grata à WEBTECH por criar uma aplicação que revolucionou a maneira como fazemos negócios.
                                Sua expertise técnica e dedicação à excelência são evidentes em cada aspecto deste projeto.
                                Agora, estamos mais eficientes e conectados do que nunca, e devemos isso a vocês.
                                Obrigado por serem os mestres por trás do nosso sucesso digital.

                            </p>

                            <h3 className={styles.companyName}>Lain Soluções LTDA</h3>
                        </span>

                        <span>
                            <h1>MATHIAS FILLETE</h1>
                            <h3>Gerente de Projeto</h3>
                        </span>
                    </div>
                </div>

                <span className={styles.greenLine}></span>

                <div className={styles.opinion}>
                    <div>
                        <span>
                            <p>
                                Queremos expressar nossa sincera gratidão à equipe da WEBTECH por criar uma
                                aplicação sob medida que transformou completamente nossa operação. Sua dedicação e
                                competência foram essenciais para o sucesso deste projeto. Agora, temos uma ferramenta
                                digital que nos permite oferecer um serviço de excelência aos nossos clientes. Obrigado por
                                serem parceiros valiosos em nossa jornada
                            </p>

                            <h3 className={styles.companyName}>Aguiar Confecções</h3>
                        </span>

                        <span>
                            <h1>FERNANDA LEAL</h1>
                            <h3>Assistente de RH</h3>
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.seventhSection}>
                <div>
                    <h1>GOSTOU DO QUE VIU?</h1>
                    <p>
                        Fique a vontade para nos ligar, iremos adorar fazer
                        um excelente trabalho para a sua empresa!
                    </p>
                </div>
                <a href={whatsappLink}>Falar conosco</a>
            </div>
            <div className={styles.contactUsContainer} id='contatos'>
                <div>
                    <h1>CONTATE-NOS</h1>

                    <span className={styles.formTextContainer}>
                        <p>
                            Nos envie uma mensagem , respondemos rápido e dentro
                            de poucos minutos podemos discutir qual será a sua
                            aplicação de sucesso.
                        </p>
                    </span>
                    <form className={styles.form}>
                        <input type="text"
                            name="name"
                            placeholder="Nome"
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            value={form.name} />

                        <input type="text"
                            name="phone"
                            placeholder="Celular"
                            onChange={e => setForm({ ...form, phone: e.target.value })}
                            value={form.phone} />

                        <input type="text"
                            name="email"
                            placeholder="Email"
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            value={form.email} />

                        <textarea placeholder="Mensagem"
                            name="message"
                            cols="30" rows="3"
                            onChange={e => setForm({ ...form, message: e.target.value })}
                            value={form.message}>
                        </textarea>

                        <button type='button' className={styles.buttonRippleEffect} onClick={sendEmail}>ENVIAR</button>

                        <span className={styles.lines}>
                            <span></span>
                            <span></span>
                        </span>
                    </form>

                    <span>
                        <p>AGUARDAMOS O SEU CONTATO! COM CARINHO </p>
                        <p className={styles.mark}>WEB-TECH.</p>
                    </span>
                </div>
                <div className={styles.lastContainer}>
                    <div>
                        <h1>WEB-TECH</h1>

                        <h2>
                            VENHA CONSTRUIR O
                            SITE DA SUA EMPRESA
                            COM A GENTE.
                        </h2>

                        <p>
                            Aqui nós garantimos sinceridade,
                            hosnestidade e uma qualidade excepcional
                            na entrega do seu projeto.
                        </p>

                        <p className={styles.mark}>WEB-TECH</p>
                    </div>
                </div>
            </div>
        </div >
    )
}