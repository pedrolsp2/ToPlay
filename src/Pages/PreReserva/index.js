import './style.css';
import {toast} from 'react-toastify';

function campus(){
    let txtData = document.getElementById('DataPartida').value;
    let txtHora = document.getElementById('HorarioPartida').value;
    let txtDuracao = document.getElementById('DuracaoPartida').value;
    let txtJogador = document.getElementById('NumeroJogadores').value;
    let txtBola = document.getElementById('NumeroBolas').value;
    let txtColete= document.getElementById('NumeroUniformes').value;
    let txtNome= document.getElementById('NomeJogador').value;
    let txtTel= document.getElementById('TelJogador').value;

    if(txtData === "" || txtHora === "" || txtDuracao === "" || txtJogador === "" || txtBola === "" || txtColete === "" || txtNome === "" || txtTel === ""){
        toast.error('Preencha todos os campos!')
    }
    else{
        toast.success('Registrado com sucesso!') 
    }

}


function PreReserva() {
    return (
        <div>
            <h1 id='h1'>Faça seu pré Agendamento aqui</h1>
            <section id='prereserva'>

                <article>
                    <h3>Partida</h3>

                    <input type="date" name="DataPartida" id="DataPartida" />

                    <select name="HorarioPartida" id="HorarioPartida">
                        <option value="">Horário da Partida</option>
                        <option value="08:00:00">08:00</option>
                        <option value="09:00:00">09:00</option>
                        <option value="10:00:00">10:00</option>
                        <option value="11:00:00">11:00</option>
                        <option value="12:00:00">12:00</option>
                        <option value="13:00:00">13:00</option>
                        <option value="14:00:00">14:00</option>
                        <option value="15:00:00">15:00</option>
                        <option value="16:00:00">16:00</option>
                        <option value="17:00:00">17:00</option>
                        <option value="18:00:00">18:00</option>
                        <option value="19:00:00">19:00</option>
                        <option value="20:00:00">20:00</option>
                        <option value="21:00:00">21:00</option>
                        <option value="22:00:00">22:00</option>
                        <option value="23:00:00">23:00</option>
                    </select>

                    <select name="DuracaoPartida" id="DuracaoPartida">
                        <option value="">Duração da Partida</option>
                        <option value="01:00:00">1 hora de Partida</option>
                        <option value="02:00:00">2 horas de Partida</option>
                        <option value="03:00:00">3 horas de Partida</option>
                    </select>

                    <div id="cx-input">
                        <input type="text" id="NumeroJogadores" name="NumeroJogadores" maxlength="2" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" /><a>Jogadores</a>
                    </div>

                </article>

                <article>
                    <h3>Informações</h3>
                    <input type="text" name="NumeroBolas" id="NumeroBolas" placeholder="Bolas"
                        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                        maxlength="2" />
                    <input type="text" name="NumeroUniformes" id="NumeroUniformes" placeholder="Coletes"
                        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                        maxlength="2" />
                    <input type="text" name="NomeJogador" id="NomeJogador" placeholder="Digite seu nome" />
                    <input type="text" name="TelJogador" id="TelJogador" placeholder="Telefone para contato" />
                </article>


            </section>
            <h2 id='submit'>
                <button onClick={()=>campus()}>Concluir</button>
            </h2>
        </div>
    )
}

export default PreReserva;