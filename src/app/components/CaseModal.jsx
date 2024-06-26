import { useContext } from 'react'
import styles from '../styles/caseModal.module.css'
import { ModalContext } from '../contexts/ModalContext';

const CaseModal = () => {
    const { id, handleSetIsOpen, closeModal } = useContext(ModalContext)

    const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`

    const cases = [
        {
            description: "Site de Vagas de Emprego",
            message: "Bem-vindo ao Site da empresa Home Office Vagas, o portal definitivo para quem busca oportunidades de emprego e desenvolvimento profissional. A maior missão deste site é trazer até os usuários vagas de emprego remotas, para todos os usuários, faça uma visita clicando no link acima."
        },

        {
            description: "Site de Empresa de Planos de Saúde",
            message: "Embarque em uma jornada de cuidado e bem-estar conosco na Francy Seguros. Descubra uma ampla gama de planos de saúde adaptados às suas necessidades específicas. Nossa missão é proporcionar tranquilidade através de coberturas abrangentes e serviços excepcionais. Explore nossos planos diversificados e inicie sua jornada em direção a uma vida mais saudável e protegida."
        },

        {
            description: "Site de Empresa de Meio Ambiente",
            message: "Explore a sustentabilidade conosco na IPAM. Navegue por informações essenciais sobre nossa atuação em prol do meio ambiente. Apresentamos dados cruciais, desde indicadores ambientais até informações sobre a capital, microregião e muito mais. Juntos, trabalhamos para preservar a natureza e construir um futuro mais sustentável."
        },

        {
            description: "Site de Empresa de Cirurgia Plástica",
            message: "Descubra a excelência em transformação estética na Corporali. Oferecemos uma variedade de procedimentos, desde abdominoplastia até cirurgias de prótese. Navegue por nossos serviços personalizados, conheça nossa equipe especializada e mergulhe em um mundo onde a beleza encontra a expertise médica. Sua jornada para a autoconfiança começa aqui."
        },

    ]

    return (
        <div className={styles.modalComponent} onClick={e => closeModal(e)}>
            <div id='modalBody' className={styles.modalBody}>

                <div className={styles.head}>
                    <h1>{cases[id].description}</h1>
                </div>

                <div className={styles.content}>
                    <p>{cases[id].message}</p>

                    <div className={styles.btns}>
                        <button className={styles.buttonRippleEffect} onClick={handleSetIsOpen}>Fechar</button>
                        <a className={styles.buttonRippleEffect} href={whatsappLink} target='_blank'>Quero um parecido</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseModal 