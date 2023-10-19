/* eslint-disable react/no-unescaped-entities */
'use client';

import icon1 from '../../../public/icons/icon_1.svg'
import icon2 from '../../../public/icons/icon_2.svg'
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
import icon15 from '../../../public/icons/icon_15.svg'
import icon16 from '../../../public/icons/icon_16.svg'
import icon17 from '../../../public/icons/icon_17.svg'
import icon18 from '../../../public/icons/icon_18.svg'
import img2 from '../../../public/assets/foto_2.png'
import img4 from '../../../public/assets/foto_4.png'
import img5 from '../../../public/assets/foto_5.png'
import img6 from '../../../public/assets/foto_6.png'
import img7 from '../../../public/assets/foto_7.png'

import Image from 'next/image'
import styles from '../styles/LandingPage.module.css'
import axios from 'axios';
import { useState } from 'react';

export default function LandingPage() {


    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuEvent, setMenuEvent] = useState('');


    function CreateService(img, name, url) {
        this.img = img
        this.name = name
        this.url = url
    }

    const services = [
        new CreateService(icon7, 'SITES COMERCIAIS', ''),
        new CreateService(icon8, 'LANDING PAGES', ''),
        new CreateService(icon9, 'SITES INSTITUCIONAIS', ''),
        new CreateService(icon10, 'E-COMMERCES', ''),
        new CreateService(icon11, 'BLOGS', ''),
        new CreateService(icon12, 'SITES ONE PAGE', ''),
        new CreateService(icon13, 'SITE EMPRESA', ''),
        new CreateService(icon14, 'PORTFÓLIOS', '')
    ]

    const sendEmail = async () => {
        const teste = await axios.post(`/api/email`, form)
            .catch(e => console.log(e))

        setForm({ name: '', phone: '', email: '', message: '' })
    }

    const toggleMenu = () => {
        if (menuEvent === '') {
            setMenuEvent('menuOpen')
            setIsMenuOpen(true)
        } else if (menuEvent === 'menuOpen') {
            setIsMenuOpen(false)
            setMenuEvent('menuClose')
        } else {
            setIsMenuOpen(true)
            setMenuEvent('menuOpen')
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.img1Container}></div>
            <div className={styles.headerContainer}>
                <a className={styles.logo} href="">WEB TECH</a>
                <span className={styles.phoneContainer}>
                    <Image src={icon1} alt='' width={0} height={0} />
                    55 61 9 9466-2277
                </span>

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

                <span className={styles.headerButtons}>
                    <a href='https://wa.me/61984977155' >
                        <Image src={icon2} alt='' width={0} height={0} />
                        WHATSAPP
                    </a>

                    <button>
                        MENSAGEM
                    </button>
                </span>
                <button className={styles.menuButton} onClick={toggleMenu}>
                    <Image src={icon17} alt='' width={0} height={0} />
                </button>
            </div>

            <div className={`${styles.menuContainer} ${isMenuOpen ? styles.menuOpen : styles.menuClose}`}>
                <button onClick={toggleMenu}>
                    <Image src={icon18} alt='' width={0} height={0} />
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
                <div className={styles.mainTexts}>
                    <h1>O NOSSO TRABALHO</h1>
                    <span>
                        <h1>É DEIXAR </h1>
                        <h1>A SUA EMPRESA ONLINE</h1>
                    </span>
                    <p>Venha construir o site da sua empresa com quem entende do assunto.</p>
                </div>

                <div className={styles.firstSectionButtons}>
                    <a href="#contatos">QUERO UM SITE</a>
                    <a href='https://wa.me/61984977155'>FALAR COM ATENDENTE</a>
                </div>

                <div className={styles.advantageContainer}>
                    <span className={styles.testee}>
                        <h1>WEBTECH</h1>
                        <p>
                            Aqui na web-tech, levamos a serio o nosso trabalho do inicio
                            ao fim,iremos adorar construir uma parte dda sua empres a.
                        </p>
                    </span>
                    <div className={styles.advantage}>
                        <Image src={icon3} alt='' width={0} height={0} />
                        <p>Profissionalismo</p>
                        <p>
                            Combinamos conhecimento técnico com ética de trabalho
                            exemplar para criar o seu site
                        </p>
                    </div>

                    <div className={styles.advantage}>
                        <Image src={icon4} alt='' width={0} height={0} />
                        <p>Responsabilidade</p>
                        <p>
                            Assumimos a responsabilidade
                            de transformar suas aspirações
                            em realidade digital.
                        </p>
                    </div>

                    <div className={styles.advantage}>
                        <Image src={icon5} alt='' width={0} height={0} />
                        <p>Criativa</p>
                        <p>
                            Somos apaixonados por
                            transformar ideias em experiências
                            cativantes.
                        </p>
                    </div>

                    <div className={styles.advantage}>
                        <Image src={icon6} alt='' width={0} height={0} />
                        <p>Inovadora</p>
                        <p>
                            Aqui levamos o que fazemos a
                            sério, é sua empresa no topo!
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.secondSection} >
                <div className={styles.imgContainerTe}>
                    <Image className={styles.img2} src={img2} alt='Imagem 2' width={0} height={0} />

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

                    <a href='https://wa.me/61984977155'>QUERO UM SITE!</a>
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
                                <div className={styles.service} key={service?.name}>
                                    <Image src={service?.img} alt='' width={0} height={0} />
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
                        <Image src={img4} alt='Imagem 4' width={0} height={0} />

                        <div>
                            <h1>LILIUM CASE</h1>
                            <p>Empresa de Marketing</p>
                        </div>

                        <div className={styles.caseBtnContainer}>
                            <a href="">VISUALIZAR CASE</a>
                            <button>DESCRIÇÃO DO SITE</button>
                        </div>
                    </div>
                    <div className={styles.case}>
                        <Image src={img5} alt='Imagem 5' width={0} height={0} />

                        <div>
                            <h1>FRANCY SEGUROS</h1>
                            <p>Empresa de Marketing</p>
                        </div>

                        <div className={styles.caseBtnContainer}>
                            <a href="">VISUALIZAR CASE</a>
                            <button>DESCRIÇÃO DO SITE</button>
                        </div>
                    </div>
                    <div className={styles.case}>
                        <Image src={img6} alt='Imagem 6' width={0} height={0} />

                        <div>
                            <h1>IPAM</h1>
                            <p>Empresa de Marketing</p>
                        </div>

                        <div className={styles.caseBtnContainer}>
                            <a href="">VISUALIZAR CASE</a>
                            <button>DESCRIÇÃO DO SITE</button>
                        </div>
                    </div>
                    <div className={styles.case}>
                        <Image src={img7} alt='Imagem 7' width={0} height={0} />

                        <div>
                            <h1>SMART SAÚDE</h1>
                            <p>Empresa de Marketing</p>
                        </div>

                        <div className={styles.caseBtnContainer}>
                            <a href="">VISUALIZAR CASE</a>
                            <button>DESCRIÇÃO DO SITE</button>
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

                <a href='https://wa.me/61984977155'>FALE CONOSCO</a>
            </div>
            <div className={styles.opinionsContainer}>
                <div className={styles.opinionHeader}>
                    <span></span>
                    <div>
                        <span>
                            <Image src={icon15} alt='' width={0} height={0} />

                            <h1>OPINIÕES DE NOSSOS CLIENTES</h1>

                            <Image src={icon16} alt='' width={0} height={0} />
                        </span>

                        <p>
                            Confira o que os nossos clientes dizem sobre os
                            nossos trabalhos
                        </p>
                    </div>
                    <span></span>
                </div>

                <div className={styles.opinion}>
                    {/* <Image src={img9} alt='Imagem 9' width={0} height={0} /> */}

                    <div>
                        <span>
                            <p>
                                Gostaria de dizer que a web tech foi
                                excelente no que fez, gostei muito estão de
                                parabéns. Desde o inicio eles se
                                dispuseram a nos ajuda e foram muito
                                solistas, o design da minha marca ficou
                                otimo, o site ficou perfeito eu adorei, ficou
                                lindo.
                            </p>

                            <h3>Aguiar Confecções</h3>
                        </span>

                        <span>
                            <h1>LUANA AGUIAR</h1>
                            <h3>Design de Produto</h3>
                        </span>
                    </div>
                </div>

                <span className={styles.greenLine}></span>

                <div className={styles.opinion} id={styles.teste}>
                    {/* <Image src={img10} alt='Imagem 10' width={0} height={0} /> */}

                    <div>
                        <span>
                            <p>
                                Gostaria de dizer que a web tech foi
                                excelente no que fez, gostei muito estão de
                                parabéns. Desde o inicio eles se
                                dispuseram a nos ajuda e foram muito
                                solistas, o design da minha marca ficou
                                otimo, o site ficou perfeito eu adorei, ficou
                                lindo.
                            </p>

                            <h3>Lain Soluções LTDA</h3>
                        </span>

                        <span>
                            <h1>MATHIAS FILLETE</h1>
                            <h3>Gerente de Projeto</h3>
                        </span>
                    </div>
                </div>

                <span className={styles.greenLine}></span>

                <div className={styles.opinion}>
                    {/* <Image src={img11} alt='Imagem 11' width={0} height={0} /> */}

                    <div>
                        <span>
                            <p>
                                Gostaria de dizer que a web tech foi
                                excelente no que fez, gostei muito estão de
                                parabéns. Desde o inicio eles se
                                dispuseram a nos ajuda e foram muito
                                solistas, o design da minha marca ficou
                                otimo, o site ficou perfeito eu adorei, ficou
                                lindo.
                            </p>

                            <h3>Aguiar Confecções</h3>
                        </span>

                        <span>
                            <h1>FERNANDA LEAL</h1>
                            <h3>Assistente de RH</h3>
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.seventhSection}>
                <h1>GOSTOU DO QUE VIU?</h1>
                <p>
                    Fique a vontade para nos ligar, iremos adorar fazer
                    um excelente trabalho para a sua empresa!
                </p>
                <p>Falar conosco</p>
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
                            placeholder="Nome"
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            value={form.name} />

                        <input type="text"
                            placeholder="Celular"
                            onChange={e => setForm({ ...form, phone: e.target.value })}
                            value={form.phone} />

                        <input type="text"
                            placeholder="Email"
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            value={form.email} />

                        <textarea placeholder="Mensagem"
                            name=""
                            cols="30" rows="3"
                            onChange={e => setForm({ ...form, message: e.target.value })}
                            value={form.message}>
                        </textarea>

                        <button type='button' onClick={sendEmail}>ENVIAR</button>

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
            <div className={styles.fixedLinks}>
                <a href="https://wa.me/61984977155">
                    <Image src={icon2} alt='' width={0} height={0} />
                </a>
            </div>
        </div >
    )
}