/* eslint-disable react/no-unescaped-entities */
'use client';
import styles from '../styles/LandingPage.module.css'
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
import img1 from '../../../public/assets/foto_1.jpg'
import img2 from '../../../public/assets/foto_2.png'
import img3 from '../../../public/assets/foto_3.jpg'
import img4 from '../../../public/assets/foto_4.png'
import img5 from '../../../public/assets/foto_5.png'
import img6 from '../../../public/assets/foto_6.png'
import img7 from '../../../public/assets/foto_7.png'
import img9 from '../../../public/assets/foto_9.jpg'
import img10 from '../../../public/assets/foto_10.png'
import img11 from '../../../public/assets/foto_11.jpg'
import Image from 'next/image'


const openWhatsapp = () => {
    window.location.href = ""
}

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
    new CreateService(icon14, 'PORTFÓLIOS', ''),
    new CreateService('', 'TRÁFEGO PAGO', ''),
]

export default function LandingPage() {
    return (
        <div className={styles.container}>
            <div className={styles.img1Container}>
                <Image className={styles.img1} src={img1} alt='Imagem 1' width={0} height={0} />
            </div>
            <header className={styles.headContainer}>
                <div className={styles.head}>
                    <h1>WEB TECH</h1>
                    <span className={styles.telephoneButton}>
                        <Image src={icon1} alt='' width={0} height={0} />
                        55 61 9 9466-2277
                    </span>

                    <ul className={styles.linksList}>
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

                    <span className={styles.headButtons}>
                        <a href='https://wa.me/61984977155' >
                            <Image src={icon2} alt='' width={0} height={0} />
                            WHATSAPP
                        </a>

                        <button>
                            MENSAGEM
                        </button>
                    </span>
                </div>
            </header>

            <span className={styles.headerBorder}></span>

            <section className={styles.first}>
                <div className={styles.mainTexts}>
                    <h1>O NOSSO TRABALHO</h1>
                    <span>
                        <h1>É DEIXAR</h1>
                        <h1>A SUA EMPRESA ONLINE</h1>
                    </span>
                    <p>Venha construir o site da sua empresa com quem entende do assunto.</p>
                </div>
                <div className={styles.teste}>
                    <button>QUERO UM SITE</button>
                    <button>FALAR COM ATENDENTE </button>
                </div>
                <div className={styles.advantageContainer}>
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
            </section>
            <section className={styles.teste1} >
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
                    <button>QUERO UM SITE!</button>
                </div>
            </section>
            <section className={styles.teste2} id='sobre'>
                <Image src={img3} width={0} height={0} alt='img3' />
                <div className={styles.aboutUs}>
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
            </section>

            <span className={styles.greenLine}></span>

            <section className={styles.servicesContainer} id='seviços'>
                <div className={styles.servicesHead}>
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

                <div className={styles.allServices}>
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

            </section>
            <span className={styles.greenLine}></span>
            <section className={styles.teste3} id='cases'>
                <div className={styles.teste3Head}>
                    <span>
                        <h1>CONFIRA ALGUNS DE NOSSOS </h1>
                        <h1>CASES</h1>
                    </span>
                    <p>
                        Confira abaixo alguns de nossos projetos que foram feitos para alguns
                        clientes, clique em “descrição do site” para visualizar o propósito do projeto.
                    </p>
                </div>

                <div className={styles.clients}>
                    <div className={styles.client}>
                        <Image src={img4} alt='Imagem 4' width={0} height={0} />
                        <div>
                            <h1>LILIUM CASE</h1>
                            <p>Empresa de Marketing</p>
                        </div>

                        <div className={styles.clientBtnContainer}>
                            <a href="">VISUALIZAR CASE</a>
                            <button>DESCRIÇÃO DO SITE</button>
                        </div>
                    </div>
                    <div className={styles.client}>
                        <Image src={img5} alt='Imagem 5' width={0} height={0} />
                        <div>
                            <h1>FRANCY SEGUROS</h1>
                            <p>Empresa de Marketing</p>
                        </div>

                        <div className={styles.clientBtnContainer}>
                            <a href="">VISUALIZAR CASE</a>
                            <button>DESCRIÇÃO DO SITE</button>
                        </div>
                    </div>
                    <div className={styles.client}>
                        <Image src={img6} alt='Imagem 6' width={0} height={0} />
                        <div>
                            <h1>IPAM</h1>
                            <p>Empresa de Marketing</p>
                        </div>

                        <div className={styles.clientBtnContainer}>
                            <a href="">VISUALIZAR CASE</a>
                            <button>DESCRIÇÃO DO SITE</button>
                        </div>
                    </div>
                    <div className={styles.client}>
                        <Image src={img7} alt='Imagem 7' width={0} height={0} />
                        <div>
                            <h1>SMART SAÚDE</h1>
                            <p>Empresa de Marketing</p>
                        </div>

                        <div className={styles.clientBtnContainer}>
                            <a href="">VISUALIZAR CASE</a>
                            <button>DESCRIÇÃO DO SITE</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.teste4}>
                <h1>
                    VENHA TRANSFORMAR A HISTÓRIA
                    DA SUA EMPRESA CONOSCO
                </h1>
                <p>
                    A sua empresa tem que está hoje! O mercado não espera, vamos
                    criar algo sensacional.
                </p>
                <button>FALE CONOSCO</button>
            </section>
            <section className={styles.opinionContainer}>
                <div className={styles.opinionHead}>
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
                </div>

                <div className={styles.opinion}>
                    <Image src={img9} alt='Imagem 9' width={0} height={0} />

                    <div>
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
                        <span>
                            <h1>LUANA AGUIAR</h1>
                            <h3>Design de Produto</h3>
                        </span>
                    </div>
                </div>

                <span className={styles.greenLine}></span>

                <div className={styles.opinion}>
                    <Image src={img10} alt='Imagem 10' width={0} height={0} />

                    <div>
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
                        <span>
                            <h1>MATHIAS FILLETE</h1>
                            <h3>Gerente de Projeto</h3>
                        </span>
                    </div>
                </div>

                <span className={styles.greenLine}></span>

                <div className={styles.opinion}>
                    <Image src={img11} alt='Imagem 11' width={0} height={0} />

                    <div>
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
                        <span>
                            <h1>FERNANDA LEAL</h1>
                            <h3>Assistente de RH</h3>
                        </span>
                    </div>
                </div>
            </section>
            <section className={styles.teste5} id='contatos'>
                <div>
                    <h1>CONTATE-NOS</h1>
                    <span>
                        <p>
                            Nos envie uma mensagem , respondemos rápido e dentro
                            de poucos minutos podemos discutir qual será a sua
                            aplicação de sucesso.
                        </p>
                    </span>
                    <form method='post' action='mailto:viniolicar2004@gmail.com' className={styles.form}>
                        <input type="text" placeholder="Nome" />
                        <input type="text" placeholder="Celular" />
                        <input type="text" placeholder="Email" />
                        <textarea placeholder="Mensagem" name="" cols="30" rows="3"></textarea>
                        <button>ENVIAR</button>
                    </form>
                    <p>
                        AGUARDAMOS O SEU CONTATO! COM CARINHO <mark className={styles.mark}>WEB-TECH</mark>.
                    </p>
                </div>
                <div className={styles.last}>
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
            </section >
        </div>
    )
}