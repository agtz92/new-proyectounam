import React from "react"

const Backlinks = (props) => {
  //console.log(props.categoria)
  return (
    <>
      <h2>Partners </h2>
      <ul className="">
        {props.categoria != "Español" &&
        props.categoria != "Historia de México" &&
        props.categoria != "Geografía" ? (
          <>
            <li>
              Somos expertos en productos de hule y caucho para gimnasio,
              <a
                href="https://www.matmarkt.com/productos/antiderrapantes"
                target="_blank"
                rel="noopener"
              >
                Piso antiderrapante de hule
              </a>
              , piso para uso rudo y muchos más usos. En MatMarkt puedes
              encontrar cualquier tipo de losetas y rollos de caucho industrial.
            </li>
            <li>
              En cortina-hawaiana.mx tenemos cortinas hawaianas a la medida,
              fabricadas con
              <a
                href="https://www.corthw.com/productos"
                target="_blank"
                rel="noopener"
              >
                PVC Transparente
              </a>
              , para soldadura, antiestática y muchas más
            </li>
            <li>
              En rollospvc.com tenemos cortinas hawaianas a la medida,
              fabricadas con
              <a
                href="https://www.rollospvc.com/productos"
                target="_blank"
                rel="noopener"
              >
                PVC Transparente
              </a>
              , para soldadura, antiestática y muchas más
            </li>
            <li>
              Ofertas en productos para bebés en
              <a
                href="https://www.soy-nuevo.com"
                target="_blank"
                rel="noopener"
              >
                nuestro sitio Cazador de Ofertas para Productos de Bebés como
                Safety 1st, Doona, Uppababy y más!
              </a>
            </li>
          </>
        ) : (
          <>
            <li>
              Encuentra las mejores recomendaciones de
              <a
                href="https://www.10datos.com/10-cabañas-sin-salir-de-querétaro/"
                target="_blank"
                rel="noopener"
              >
                Cabañas en Querétaro
              </a>
              en 10datos.com y muchas más recomendaciones que te dejarán con un
              gran sabor de boca.
            </li>
            <li>
              Venta al mayoreo de 
              <a
                href="https://www.foodplusfeed.com/subcategoria/benzoato-de-sodio"
                target="_blank"
                rel="noopener"
              >
                Benzoato de Sodio
              </a>
              en Food Plus Feed contamos con una amplia gama de aditivos para la industria alimentaria
            </li>
            <li>
              Read our honest
              <a
                href="https://www.3minread.com/broadway-show-review-harry-potter-and-the-cursed-child/"
                target="_blank"
                rel="noopener"
              >
                Harry Potter Broadway Review
              </a>
              in New York City. Spoiler alert: You will love it!
            </li>
            <li>
              Expertos en
              <a
                href="https://grupohule.com/categories/tapetes-para-exteriores"
                target="_blank"
                rel="noopener"
              >
                Piso para Areas Infantiles
              </a>
              Excelentes para gimnasios exteriores o parques para niños
            </li>
            <li>
              Noicias de 
              <a
                href="https://www.mexgamer.com/categories/anime"
                target="_blank"
                rel="noopener"
              >
                Anime y Videojuegos en Español
              </a>
              
            </li>
            
          </>
        )}
      </ul>
    </>
  )
}

export default Backlinks
