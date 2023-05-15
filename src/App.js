import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3 p-1">
          <a className="navbar-brand pl-4" href="#">Gerador de ID</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-links" aria-controls="navbar-links" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="collapse navbar-collapse" id="navbar-links">
              <ul className="navbar-nav mx-auto mb-1 mt-1">
                  <li className="nav-item">
                    <a className="nav-link" href="#">UUID V4</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">GUID</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">CUID</a>
                  </li>
              </ul>
          </div>
    </nav>


    <section className='container p-2 ml-4 pb-0 mb-0 float mt-0' >
      <ul className='list-unstyled mb-0'>
        <li className='media'>
          <img src='https://via.placeholder.com/250' alt=''  className='mr-3'/>
          <div className='media-body'> 
          <h5 className='mt-0 mb-1'><b><u>UUID V4</u></b></h5>
          <p>O objetivo dos UUIDs é possibilitar aos sistemas distribuídos a identificarem unicamente informações 
          sem coordenação central significante. Neste contexto a palavra única deve ser tomada com o significado 
          de "praticamente única" em vez de "garantidamente única". Uma vez que os identificadores possuam um tamanho 
          finito, é possível para dois itens diferentes compartilhar do mesmo identificador. Isto é uma forma de colisão 
          de hash. O tamanho e o processo de geração do identificador necessitam ser selecionados de forma a tornar esta 
          improbabilidade suficientemente na prática. Os UUIDs da versão 4 são gerados aleatoriamente. Existem mais de
          5,3 x 10<sup>36</sup> UUIDs v4 exclusivos. Esta é a versão UUID mais comum. A versão 4, variante 2 é chamada de "GUID" nos 
          sistemas Microsoft. GUIDs são uma implementação da Microsoft de UUIDs DCE. A maioria dos GUIDs está em 
          conformidade com RFC4122. A única diferença está na ordem dos bytes. Nosso site também oferece GUID.</p>
          </div>

        </li>

      </ul>

    </section>
    <section className='container p-0 mt-0 ml-4 float-right'>
    <ul className='list-unstyled'>
        <li className='media'>
         
          <div className='media-body'> 
          <h5 className='mt-0 mb-1'><b><u>GUID</u></b></h5>
          <p>GUID (também conhecido como UUID V4) é um acrônimo para 'Globally Unique Identifier' 
            (ou 'Identificador universal exclusivo'). É um número inteiro de 128 bits usado para identificar
            recursos. O termo GUID é geralmente usado por desenvolvedores que trabalham com tecnologias da Microsoft,
            enquanto UUID é usado em qualquer outro lugar. Os GUIDs são usados ​​no desenvolvimento de software 
            corporativo em C#, Java e C++ como chaves de banco de dados, identificadores de componentes ou em 
            qualquer outro lugar em que um identificador verdadeiramente exclusivo seja necessário..</p>
          </div>
          <img src='https://via.placeholder.com/250' alt='' className='mr-3 ml-4'/>

        </li>

      </ul>

    </section>
    <section className='container p-0 ml-4 mb-3 float-left' >
      <ul className='list-unstyled'>
        <li className='media '>
          <img src='https://via.placeholder.com/250' alt='' className='mr-3'/>
          <div className='media-body'> 
          <h5 className='mt-0 mb-1'><b><u>CUID</u></b></h5>
          <p>O CUID visa focar na escalabilidade horizontal (já que os aplicativos atuais não são executados 
            em uma única máquina), desempenho, tamanho, segurança e portabilidade. Os aplicativos podem precisar 
            oferecer suporte ao recurso online/offline, o que significa que precisamos de uma maneira para clientes 
            em diferentes hosts gerarem ids que não colidam com ids gerados por outros hosts, mesmo que não estejam 
            conectados à rede. Como as entidades podem precisar ser geradas em loops de alto desempenho, a geração de 
            id deve ser rápida. Isso significa que não há espera por solicitações de pool de entropia assíncronas ou 
            comunicação entre processos/redes cruzadas. O desempenho diminui para a impraticabilidade no navegador. 
            Todas as fontes de entropia precisam ser rápidas o suficiente para acesso síncrono, por isso o CUID é o 
            mais indicado para este tipo de aplicação..</p>
          </div>

        </li>

      </ul>

    </section>

    <footer className='footer bg-dark text-light text-center pt-3'>
        Copyright © 2023 Altsoft. Todos os direitos reservados.
    </footer>

  </div>
  );
}


export default App;
