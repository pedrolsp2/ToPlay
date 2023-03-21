import './css/style.css';
import {toast} from 'react-toastify';
import clock from './img/clcok.svg';
import agenda from './img/agenda.svg';
import ball from './img/ball.svg';
import box from './img/box.svg';
import prt from './img/back-partida.png';
import estq from './img/back-estoque.png';
import scprt from './img/back-scprt.jpg';
import src from './img/search.svg';
import alt from './img/alter.svg';
import trs from './img/trash.svg';
import logo from './img/logo.png';

function Home() {
    return (
        <div>
            <section className='bem-vindo'>
                <article>
                    <div className='slogan'>
                        <h1>O sistema ideal para você gerenciar seu centro esportivo!</h1>
                        <span>Com o propósito de administrar a locação de quadras e centros esportivos, a ToPlay quer fazer isso de modo intuitivo e simples</span>
                    </div>

                    <div className='notificacoes'>
                        <label for="email">Deseja ter acesso às novas atualizações?</label>
                        <input type='email' id='email' name='email' placeholder='Digite seu e-mail para ter acesso' />
                        <button onClick={()=>toast.success('Feito! Agora você receberá notificações!')}>Enviar</button>
                    </div>
                </article>
            </section>
            <main>
                <section id='about'>
                    <div className='container'>
                        <article></article>
                        <article>
                            <h1>ToPlay</h1>
                            <small>tem como objetivo</small>

                            <p>Administrar a locação de quadras e centros esportivos, a ToPlay quer fazer isso de modo intuitivo e simples:</p>

                            <ol>
                                <li>Reservar horários de quadras para jogos,</li>
                                <li>Reservar os equipamentos que serão utilizados durante os jogos e realizar o sorteio dos times,</li>
                                <li>Disponibilizar a agenda de horários que já foram reservados para contrlie, e</li>
                                <li>Realizar controle de estoque.</li>
                            </ol>
                        </article>
                    </div>
                </section>

                <section id='choose'>
                    <h1 id='title'>Por que escolhe o ToPlay?</h1>
                    <p>Atualmente o número de quadras esportivas cresceram de uma forma considerável, com isso, a variedade de esportes aumentaram. Pensando nisso, desenvolvemos um software para gerenciar as partidas de jogos, estoque de materiais esportivos e sorteio de partidas para os jogos</p>
                    <h2>Algumas funcionalidades</h2>

                    <div className='card-section'>

                        <article className='card'>
                            <div className='name-card'>
                                <img src={clock} />
                                <h3>Horários</h3>
                            </div>
                            <div className='cont-card'>
                                <p>Gerenecie os horários das duas quadras. Inicio, termino e intervalos será mais facil de se controlar.</p>
                            </div>
                        </article>

                        <article className='card'>
                            <div className='name-card'>
                                <img src={ball} />
                                <h3>Equipamentos</h3>
                            </div>
                            <div className='cont-card'>
                                <p>Tenha o controle de seus equipamentos. Bolas, coletes e até apitos, são itens essenciais para uma partida de futebol.</p>
                            </div>
                        </article>

                        <article className='card'>
                            <div className='name-card'>
                                <img src={agenda} />
                                <h3>Agenda</h3>
                            </div>
                            <div className='cont-card'>
                                <p>Gerencie suas reservas de maneira rápida e eficaz, com poucos cliques e com 100% de segurança, evite marcar duas reservas no mesmo horário.</p>
                            </div>
                        </article>

                        <article className='card'>
                            <div className='name-card'>
                                <img src={box} />
                                <h3>Estoque</h3>
                            </div>
                            <div className='cont-card'>
                                <p>Obtenha em suas mãos, o controle de entrada e saida de seu estoque. Tenha também, o estoque temporario, quando há jogos.</p>
                            </div>
                        </article>
                    </div>
                </section>

                <section id='function'>
                    <h2>Principais funcionalidades</h2>
                    <p>Como o sistema tem como objetivo gerenciar quadras e horários esportivos, seus funcionalidas são básicas no momento.
                        Primeiro, iremos falar sobre a tela inicial, onde há todos os atalhos e botões que interagem com o usuário. Nela também, consta o status da quadra, nela, há 3 situações, são elas:</p>

                    <article className='fct-img'>
                        <img src={estq} />

                        <div className='cont-prin'>
                            <h1>Tela Principal</h1>

                            <p>Aqui se encontra as principais informações. Base para tudo, a tela principal se encontra com a logo da empresa, logo essa que pode ser mudada a escolha do cliente.</p>

                            <p>Encontra-se também, botões funcionais a qual leva para as telas de ações, onde é feito toda reserva, controle de estoque, etc.</p>

                            <p>Mais abaixo, como já dito, encontra o icone da quadra, com status dinamico de acordo com o status e a disponibilidade da quadra e do horário.</p>
                        </div>

                        <img src={prt} />

                    </article>
                </section>

                <section id='match'>
                    <img src={scprt} />

                    <article>
                        <h1>Partida</h1>

                        <p>Faça os agendamentos e novas partidas com controle de estoque (bolas, coletes e o proprio horario).
                            Adicione quantas partidas quiser! Porém, cuidado com os horarios.</p>

                        <p>Preencha todos os dados com informações certas e validas, caso de algum conflito de horario ou falta de estoque, o sistema alertará!</p>

                        <p>O estoque é dinamico! Ou seja, com a quantidade inicial posta no sistema, assim que se inicial a partida, a quantidade de bolas e coletes sai do estoque. Sendo assim, quando termina a partida, a mesma quantidade retorna para o estoque.</p>
                    </article>

                </section>
            </main>

            <section id='back-ag'>
                <main>
                    <h1>Agenda</h1>
                    <p>Quando clicar no botão “Agenda”, o software mostrará a tela de todas as partidas agendadas.</p>
                    <aside>
                        <div className='card-ag'>
                            <img src={src} />
                            <span>Buscar</span>
                        </div>

                        <div className='card-ag'>
                            <img src={alt} />
                            <span>Alternar</span>
                        </div>

                        <div className='card-ag'>
                            <img src={trs} />
                            <span>Excluir</span>
                        </div>
                    </aside>

                    <div className='cont-txt'>
                        <p>Gerencie suas reservas de maneira rápida e eficaz, com poucos cliques e com 100% de segurança, evite marcar duas reservas no mesmo horário. Disponibilize o Agendamento Online para seus clientes, com pagamento antecipado via cartão de crédito ou presencial, no Centro Esportivo.</p>
                        <p>Aqui se encontra as principais inforações. Base para tudo, a tela principal se encontra com a logo da empresa, logo essa que pode ser mudada a escolha do cliente.

                            Encontra-se também, botões funcionais a qual leva para as telas de ações, onde é feito toda reserva, controle de estoque, etc

                            Mais abaixo, como já dito, encontra o icone da quadra, com status dinamico de acordo com o status e a disponibilidade da quadra e do horário.</p>

                            <p>Tenha todo o controle de sua agenda, tenha dasboard com o seu faturamento, controle de status de locação, veja as proximas locações com todas as informações necessarias para a locação.</p>
                    </div>
                    <a onClick={()=>toast.success('Olhe sua caixa de e-mail.')} id='btn-sis'>Quero o sistema</a>
                </main>
            </section>
            <main>

                <section id='sec-form'>
                    <h1 id='title'>Entre em contato para ter o melhor sistema para seu centro esportivo!</h1>
                    <form>
                        <input type='text' id='nome' name='nome' placeholder='Nome'></input>
                        <input type='text' id='email' name='email' placeholder='E-mail para contato'></input>
                        <textarea id='contato' name='contato' placeholder='Um breve relato sobre seu contato'></textarea>

                        <input type='submit' id='enviar' value='Enviar' onClick={()=>toast.success('Sucesso! Assim que possivel entraremos em contato.')}></input>
                    </form>
                </section>

            </main>
        </div>
    )
}

export default Home;