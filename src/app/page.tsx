import { Logo, Whatsapp, Setabaixo } from "../../public";
import './globals.css';

export default function Home() {
  return (
    <>
      <header>
        <a href="/" id='logo'>
          <Logo className='logomarca' />
        </a>
        <a href="https://wa.me/+556599098117"  id='whatsapp'>
          <Whatsapp className='icon'/>
        </a>
      </header>
      <main>
        <div className="fotos">
          <div className="gradient"></div>

        <img src="/imgs/foto1.jpg"
          alt="homem-na-barbearia" className="fotoscorte"/>
        <img src="/imgs/foto3.jpg"
          alt="homem-na-barbearia" className="fotoscorte"/>
        <img src="/imgs/foto2.jpg"
          alt="homem-na-barbearia" className="fotoscorte"/>

        </div>

        <div className="destaque">
          <h1 className="querficar" style={{color:"#00bdff"}}>QUER FICAR COM O CABELO<br /><span className='semprenaregua' >SEMPRE NA REGUA?</span></h1>
          <h1>&</h1>
          <h1 className='naosepreocupar'>NÃO SE PREOCUPAR EM<br />GASTAR MUITO?</h1>
          <p className='esseplano'>Então esse plano é pra você!</p>
        </div>

        <div className="assinatura">
          <Setabaixo className="seta"/>
          <h1 className="conheça">Conheça a assinatura mensal</h1><br/>
          <h1 className='planonome'>SEMPRE NA REGUA</h1>

          <div className="box">
            <h1>Como funciona?</h1>
            <p>Durante o periodo da assinatura mensal você pode cortar o cabelo ou fazer a barba QUANTAS VEZES QUISER, podendo manter o seu cabelo sempre na régua e com um preço que cabe no seu bolso!</p>
         </div>
         <h1 className="planosdeassinatura">Planos de assinatura</h1>
         <div className="planos_lista">
           <div className="planos">
              <h1>R$80,00 Mensal</h1>
              <h2>CORTE O CABELO</h2>
              <h3>QUANTAS VEZES QUISER</h3>
              <a href="https://api.whatsapp.com/send?phone=5565999098117&text=Ol%C3%A1%2C%20Quero%20assinar%20o%20plano%20mensal%20de%20corte%20ilimitado!" target="_blank">Quero assinar</a>
           </div>
           <div className="planos">
              <h1>R$70,00 Mensal</h1>
              <h2>FAÇA A BARBA</h2>
              <h3>QUANTAS VEZES QUISER</h3>
              <a href="https://api.whatsapp.com/send?phone=5565999098117&text=Ol%C3%A1%2C%20Quero%20assinar%20o%20plano%20mensal%20de%20barba%20ilimitado!" target="_blank">Quero assinar</a>
           </div>
           <div className="planos">
              <h1>R$120,00 Mensal</h1>
              <h2>CABELO E BARBA</h2>
              <h3>QUANTAS VEZES QUISER</h3>
              <a href="https://api.whatsapp.com/send?phone=5565999098117&text=Ol%C3%A1%2C%20Quero%20assinar%20o%20plano%20mensal%20de%20cabelo%20e%20barba%20ilimitado!" target="_blank">Quero assinar</a>
           </div>
         </div>

        <h1 className="invistamais">INVISTA MAIS EM VOCÊ!</h1>
        <h1 className="cortestitle">Valores dos cortes</h1>

        <div className="valores_corte">
          <div className="valores">
            <h1>Corte Social</h1>
            <h2>R$ 20,00</h2>
          </div>
  
          <div className="valores">
            <h1>Degradê/Navalhado</h1>
            <h2>R$ 25,00</h2>
          </div>
  
          <div className="valores">
            <h1>Barba</h1>
            <h2>R$ 20,00</h2>
          </div>
  
          <div className="valores">
            <h1>Sobrancelha</h1>
            <h2>R$ 5,00</h2>
          </div>
  
          <div className="valores">
            <h1>Pigmentação</h1>
            <h2>R$ 15,00</h2>
          </div>
          </div>
        </div>
        <div className="section2">
          <div className="ondeamagia">
            <h1>
              Onde a magia acontece
            </h1>
            <div className="fotolocal">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d960.4371986954097!2d-56.10047623042367!3d-15.658359799060198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939dafa06d5ab231%3A0x24b4c42007c49bf0!2sSouza%20Barbearia!5e0!3m2!1spt-BR!2sbr!4v1695606069416!5m2!1spt-BR!2sbr" width="auto" height="auto" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <h2>
            Cohab Cristo Rei,
            Rua presidente Cardoso Júnior, 19
            </h2>
            <p>Em frente a praça da Coahb</p>
          </div>
        
        
        <div className="sobremim">
          <div className="box">
              <h1>Sobre mim</h1>
              <div className="fotosobre">
              </div>
              <p>Salve mano, meu nome é Antoniel e eu sou um Barbeiro fascinado em aumentar a autoestima do meu cliente, por que eu sei o um cabelo na régua muda o dia de uma pessoa e as pessoas que estão em volta.</p>
          </div>
        </div>
        </div>
      </main>
    </>
  )
}
