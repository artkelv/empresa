import { useContext } from 'react'
import styles from '../styles/serviceModal.module.css'
import { ModalContext } from '../contexts/ModalContext'

const ServiceModal = () => {
    const { id, handleSetIsOpen, closeModal } = useContext(ModalContext)

    const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`

    const services = [
        {
            name: 'Sites Comerciais',
            description: 'Um site comercial é uma plataforma online dedicada à promoção e venda de produtos ou serviços. Sua estrutura é projetada para cativar os visitantes, apresentando de forma atrativa os produtos, preços e informações relevantes. A navegação fácil e segura é fundamental para garantir uma experiência positiva ao cliente, incentivando a conversão.'
        },
    
        {
            name: 'Design de Páginas Web',
            description: 'O design de páginas web é a arte de criar interfaces atraentes e funcionais para sites. Envolve o uso harmonioso de elementos visuais, como cores, tipografia e imagens, para melhorar a estética e usabilidade do site. Um bom design não apenas atrai a atenção, mas também facilita a navegação, promovendo uma experiência envolvente e eficaz.'
        },
    
        {
            name: 'Landing Pages',
            description: 'Landing pages são páginas dedicadas a uma única oferta, produto ou campanha. Elas visam converter visitantes em leads ou clientes, geralmente através de um call-to-action claro. O design e a mensagem devem ser persuasivos, incentivando a ação imediata.'
        },
    
        {
            name: 'Sites Institucionais',
            description: 'Sites institucionais representam organizações, instituições ou agências governamentais. Seu objetivo é fornecer informações institucionais, como missão, visão, valores, serviços e notícias relevantes. A organização clara do conteúdo e a facilidade de navegação são cruciais para atender a diferentes públicos.'
        },
    
        {
            name: 'Ecommerces',
            description: 'Ecommerces são plataformas online dedicadas à compra e venda de produtos. Eles oferecem uma ampla gama de produtos, apresentando-os de maneira organizada e acessível. Recursos como carrinho de compras, checkout seguro e métodos de pagamento variados são essenciais para criar uma experiência de compra conveniente e confiável.'
        },
    
        {
            name: 'Blogs',
            description: 'Um blog é uma ferramenta poderosa para compartilhar informações, histórias e opiniões. Sua estrutura permite a publicação regular de conteúdo, promovendo a interação com os leitores. A facilidade de navegação e a organização de categorias são aspectos-chave para manter os visitantes engajados.'
        },
    
        {
            name: 'Sites Onepage',
            description: 'Os sites onepage apresentam todo o conteúdo em uma única página, facilitando a navegação e proporcionando uma experiência contínua. Eles são ideais para transmitir informações concisas e impactantes, muitas vezes usando seções distintas para destacar diferentes aspectos do conteúdo.'
        },
    
        {
            name: 'Site Empresarial',
            description: 'Um site empresarial é a presença digital de uma empresa. Ele destaca informações fundamentais, como história da empresa, serviços oferecidos, equipe e formas de contato. O design deve refletir a identidade da marca, transmitindo profissionalismo e confiança.'
        },
    
        {
            name: 'Portfolios',
            description: 'Os portfolios online servem como vitrine para profissionais exibirem seus trabalhos. Podem incluir projetos passados, habilidades, depoimentos e informações de contato. Um design limpo e intuitivo é crucial para destacar o talento e a criatividade do profissional.'
        },
    ]

    return (
        <div className={styles.modalComponent} onClick={e => closeModal(e)}>
            <div id='modalBody' className={styles.modalBody}>
                <div className={styles.head}>
                    <h1>{services[id].name}</h1>
                </div>

                <p className={styles.content}>{services[id].description}</p>

                <div className={styles.footer}>
                    <button className={styles.buttonRippleEffect} onClick={handleSetIsOpen}>Sair</button>
                    <a className={styles.buttonRippleEffect} href={whatsappLink} target='_blank'>Quero um Site comercial</a>
                </div>
            </div>
        </div>
    )
}

export default ServiceModal