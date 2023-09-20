/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/LandingPage.module.css'
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
                        {/* <img src="" alt="" /> */}
                        55 61 9 9466-2277
                    </span>

                    <ul className={styles.linksList}>
                        <li>SOBRE</li>
                        <li>SERVIÇOS</li>
                        <li>CASES</li>
                        <li>CONTATO</li>
                    </ul>

                    <span className={styles.headButtons}>
                        <button>
                            {/* <img src="" alt="" /> */}
                            WHATSAPP
                        </button>

                        <button>
                            MENSAGEM
                        </button>
                    </span>
                </div>
            </header>

            <span className={styles.headerBorder}></span>

            <section className={styles.first}>
                <div className={styles.mainTexts}>
                    <h1>
                        O NOSSO TRABALHO <br /> É DEIXAR <sds>A SUA EMPRESA ONLINE!</sds>
                    </h1>
                    <p>Venha construir o site da sua empresa com quem entende do assunto.</p>
                </div>
                <div className={styles.teste}>
                    <button>QUERO UM SITE</button>
                    <button>FALAR COM ATENDENTE </button>
                </div>
                <div className={styles.advantageContainer}>
                    <div className={styles.advantage}>
                        <p>Profissionalismo</p>
                        <p>
                            Combinamos conhecimento técnico com ética de trabalho
                            exemplar para criar o seu site
                        </p>
                    </div>
                    <div className={styles.advantage}>
                        <p>Responsabilidade</p>
                        <p>
                            Assumimos a responsabilidade
                            de transformar suas aspirações
                            em realidade digital.
                        </p>
                    </div>
                    <div className={styles.advantage}>
                        <p>Criativa</p>
                        <p>
                            Somos apaixonados por
                            transformar ideias em experiências
                            cativantes.
                        </p>
                    </div>
                    <div className={styles.advantage}>
                        <p>Inovadora</p>
                        <p>
                            Aqui levamos o que fazemos a
                            sério, é sua empresa no topo!
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.teste1}>
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
            <section className={styles.teste2}>
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

            <section className={styles.servicesContainer}>
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
                    <div className={styles.service}>
                        <img src="" alt="" />
                        <p>SITES COMERCIAIS</p>
                    </div>
                    <div className={styles.service}>
                        <img src="" alt="" />
                        <p>LANDING PAGES</p>
                    </div>
                    <div className={styles.service}>
                        <img src="" alt="" />
                        <p>SITES INSTITUCIONAIS</p>
                    </div>
                    <div className={styles.service}>
                        <img src="" alt="" />
                        <p>E-COMMERCES</p>
                    </div>
                    <div className={styles.service}>
                        <img src="" alt="" />
                        <p>BLOGS</p>
                    </div>
                    <div className={styles.service}>
                        <img src="" alt="" />
                        <p>SITES ONE PAGE</p>
                    </div>
                    <div className={styles.service}>
                        <img src="" alt="" />
                        <p>SITE EMPRESA</p>
                    </div>
                    <div className={styles.service}>
                        <img src="" alt="" />
                        <p>PORTFÓLIOS</p>
                    </div>
                </div>

            </section>
            <span className={styles.greenLine}></span>
            <section className={styles.teste3}>
                <div className={styles.teste3Head}>
                    <h1>CONFIRA ALGUNS DE NOSSOS CASES</h1>
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
                            <button>VISUALIZAR CASE</button>
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
                            <button>VISUALIZAR CASE</button>
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
                            <button>VISUALIZAR CASE</button>
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
                            <button>VISUALIZAR CASE</button>
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
                        <h1>OPINIÕES DE NOSSOS CLIENTES</h1>
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
            <section className={styles.teste5}>
                <div>
                    <h1>CONTATE-NOS</h1>
                    <span>
                        <p>
                            Nos envie uma mensagem , respondemos rápido e dentro
                            de poucos minutos podemos discutir qual será a sua
                            aplicação de sucesso.
                        </p>
                    </span>
                    <form className={styles.form}>
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