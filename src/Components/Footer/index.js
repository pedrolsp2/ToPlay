import logo from './img/logo.png';

function Footer() {
    return (
        <div>
            <footer>
                <article>
                    <h1><img src={logo} /></h1>
                    <p>Somos um grupo de 5 alunos do curso de Sistemas de Informações - UEMG Frutal. Projeto feito inicialmente na linguagem JAVA, junto com o MySql, desenvolvido pelo NetBeans.
                        <br></br><br></br>
                        O Grupo tinha como objetivo, criar um projeto interdisciplinar, com finalidade de estudos, e parte da grade do 1 semestre letivo no ano de 2022.</p>
                </article>

                <article>
                    <h1 id='tl-ft'>Links Úteis</h1>
                    <div className='info'>
                        <a href='#about'>Sobre</a>
                        <a href='#choose'>Porque nos escolher?</a>
                        <a href='#function'>Principal</a>
                        <a href='#match'>Partida</a>
                        <a href='#back-ag'>Agenda</a>
                        <a href=''>Contato</a>
                    </div>
                </article>

                <article>
                    <h1 id='tl-ft'>Siga nos</h1>
                    <div className='abt-ft'>
                        <span>toplay@gimps.com.br</span>
                        <span>(34) 3423-4033</span>
                        <span>Av. ESCÓCIA, 1001 - Frutal - MG.</span>
                    </div>

                </article>
            </footer>
            <h4>Todos os direitos reservados © GIMPS | 2023</h4>
        </div>
    )
}

export default Footer;