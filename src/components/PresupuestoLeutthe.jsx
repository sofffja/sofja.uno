const categorias = [
  {
    category: 'figura',
    items: [
      {
        tier: '1',
        text: `- Figuras basicas y geometricas.\n- Formas abstractas simples, textos, logo a partir de diseño.`,
      },
      {
        tier: '2',
        text: `- Figuras mas complejas con detalles moderados.\n- Modelado de un objeto con varias partes.`,
      },
      {
        tier: '3',
        text: `- Figuras detalladas. Realismo.\n- Varios objetos, diseño de pieza compleja.`,
      },
    ],
  },
  {
    category: 'materiales',
    items: [
      {
        tier: '1',
        text: `- Superficie lisa, color solido, opaco, uniforme.\n- Plastico, metal mate.`,
      },
      {
        tier: '2',
        text: `- Texturas, reflejos, varios colores, brillo.\n- Metal pulido, madera simple, vidrio.`,
      },
      {
        tier: '3',
        text: `- Realismo, material animado, detalle para close-up.\n- Telas, piel, pelo, vidrio con refracciones, agua, metal con detalles.`,
      },
    ],
  },
  {
    category: 'animacion',
    items: [
      {
        tier: '1',
        text: `- Animaciones y movimientos simples, pocos objetos, una sola camara.\n- Rotaciones, traslaciones o animacion de texto simple.`,
      },
      {
        tier: '2',
        text: `- Diferentes animaciones, pocos objetos, animaciones de camara, movimientos complejos.\n- Coordinacion de varios objetos, desplazamiento y zoom de cámaras.`,
      },
      {
        tier: '3',
        text: `- Animaciones avanzadas, física realista, montaje de varias cámaras, muchos objetos, interacciones.\n- Fluidos, particulas, personajes, animación de tejido.`,
      },
    ],
  },
];

const referencias = [
  {
    titulo: 'Pull and Bear - Logo 3D',
    link: 'https://www.instagram.com/reel/C5DUqPmNHvM/',
    figura: 'Nivel 1 - Logo a partir de diseño',
    material: 'Nivel 2 - Cromado con reflejos',
    animacion: 'Nivel 1 - Objeto girando con cámara fija',
    detalle:
      'Hasta 4 segundos. 1 logo animado con movimiento simple. No incluye montaje sobre video.',
    precio: '$200.000',
    aclaracion: '',
  },
  {
    titulo: 'Bershka logo - Texto dibujándose',
    link: 'https://www.instagram.com/reel/ChrLlQYIUlA/',
    figura: 'Nivel 1 - Figura a partir de diseño',
    material: 'Nivel 2 - Combinación de colores, textura, mate',
    animacion: 'Nivel 1 - Curvas dibujándose, cámara fija.',
    detalle: 'Hasta 8 segundos. 1 objeto con 1 material',
    precio: '$250.000',
    aclaracion: '',
  },
  {
    titulo: 'Objetos cayendo',
    link: 'https://www.instagram.com/reel/C6L_hk9C7rH/',
    figura: 'Nivel 2 - Figuras simples pero en cantidad',
    material: 'Nivel 1 - Color plano mate',
    animacion: 'Nivel 2 - Simulación de física simple, cámara fija',
    detalle: 'Hasta 8 segundos, hasta 6 figuras, cámara fija.',
    precio: '$400.000',
    aclaracion: 'Extra por cada figura nueva: $30.000',
  },
  {
    titulo: 'Bershka logo - Materiales animados',
    link: 'https://www.instagram.com/reel/C5kz_9QIWu_/',
    figura: 'Nivel 1 - Logo a partir de diseño dado',
    material: 'Nivel 3 - Material complejo con detalle y animaciones',
    animacion:
      'Nivel 2 - Movimiento de cámara + animación de texto simple + materiales animados',
    detalle:
      'Hasta 10 segundos. 1 texto + hasta 4 materiales diferentes con animación de hasta 2 seg cada uno',
    precio: '$450.000',
    aclaracion: '',
  },
  {
    titulo: 'Lana nudo',
    link: 'https://www.instagram.com/reel/C8Cbe25i718/',
    figura: 'Nivel 1 - Soga en forma de nudo',
    material: 'Nivel 3 - Tela realista, detalle complejo',
    animacion:
      'Nivel 3 - Simulación de física de soga anudándose, interacción entre partes',
    detalle: 'Hasta 8 segundos. Una figura simulando nudo',
    precio: '$450.000',
    aclaracion: 'De los ejemplos de tejido, este es el más sencillo',
  },
  {
    titulo: 'Camila and Marc - Logo en espacio',
    link: 'https://www.instagram.com/reel/CgJSEYAjo-X/',
    figura: 'Nivel 2 - Logo a partir de diseño + modelado de espacio',
    material: 'Nivel 2 - Cromado realista con reflejos',
    animacion:
      'Nivel 3 - Simulación de fisica simple + movimiento de cámara + animación de luces',
    detalle: 'Hasta 12 segundos. 1 logo, 1 espacio, 1 cámara animada',
    precio: '$500.000',
    aclaracion:
      'Camila and Marc 3 - Similar pero con física más compleja: +$60.000',
  },
  {
    titulo: 'Giftcard',
    link: 'https://www.instagram.com/reel/CrySYwnIXmS/',
    figura: 'Nivel 2 - Formas simples pero en cantidad',
    material:
      'Nivel 2 - Colores planos, con brillo y mesa metálica con reflejos',
    animacion:
      'Nivel 3 - Varios objetos en interación con animaciones distintas + simulación de física simple',
    detalle: 'Hasta 8 segundos. Modelado de 1 figura + cajita + gitcard',
    precio: '$550.000',
    aclaracion: '',
  },
  // {
  //   titulo: 'Bershka producto - Reveal',
  //   link: 'https://www.instagram.com/reel/C4gAYl-onV2/',
  //   figura: 'Nivel 3 - Producto realista',
  //   material:
  //     'Nivel 3 - 1 material realista de producto + 1 material realista de efecto',
  //   animacion: 'Nivel 3 - Física + montaje de varias cámaras',
  //   detalle:
  //     'Hasta 10 segundos. 1 producto con efecto de revelado con física simulando realismo. Precio a confirmar según complejidad del producto.',
  //   precio: '$700.000',
  //   aclaración:
  //     'Bershka producto 2 (zapato de cristal) es similar pero más sencillo',
  // },
];

export default function PresupuestoLeutthe() {
  return (
    <div className="py-16 px-8 flex flex-col gap-16 font-[Helvetica] text-sm max-w-4xl mx-auto">
      <h1 className="text-3xl uppercase font-black">
        Presupuesto Le Utthe Junio 2024
      </h1>
      <div className="flex flex-col gap-8">
        <h2 className="italic">Guía de referencia niveles de complejidad</h2>
        {categorias.map((category) => (
          <div key={category.category} className="flex flex-col gap-4">
            <h2 className="uppercase font-bold">{category.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-xs">
              {category.items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 border border-zinc-400 bg-[#fff] pt-2 pb-4 px-4 rounded-sm"
                >
                  <h2 className="text-zinc-400">Nivel {item.tier}</h2>
                  <p className="whitespace-pre-line">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <hr />

      <div className="flex flex-col gap-8">
        <h2 className="uppercase font-bold">Precios</h2>
        <div className="flex flex-col gap-1">
          <h3 className="italic text-zinc-600">
            Precio minimo por animación simple
          </h3>
          <p>$250.000</p>
          <ul>
            <li className="pl-2">- Animación de hasta 8 segundos</li>
            <li className="pl-2">
              - Una categoria (figura, material o animación) en nivel 2, las
              demás en nivel 1 de complejidad
            </li>
            <li className="pl-2">- Hasta 2 correcciones</li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="italic text-zinc-600">Descuentos por paquete</h3>
          <ul>
            <li>2: 4% OFF</li>
            <li>3: 6% OFF</li>
            <li>4: 10% OFF</li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="italic text-zinc-600">Incluido en paquete</h3>
          <ul>
            <li className="pl-2">- 2 reuniones</li>
            <li className="pl-2">- Entrega de boceto</li>
            <li className="pl-2">
              - Disponibilidad para consultas de lunes a viernes de 9 a 17hs
            </li>
            <li className="pl-2">- Precio fijo hasta Agosto inclusive</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="flex flex-col gap-4">
        <h2 className="uppercase font-bold">Ejemplos / Referencias</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-xs">
          {referencias.map((referencia, index) => (
            <div key={index} className="flex flex-col gap-4 ">
              <div className="flex flex-col gap-1">
                <h2 className="font-bold">{referencia.titulo}</h2>
                <a
                  href={referencia.link}
                  className="italic underline text-[0.7rem] text-zinc-400"
                >
                  &#8594; link referencia
                </a>
                <ul className="flex flex-col gap-1">
                  <li className="pl-2">Figura: {referencia.figura}</li>
                  <li className="pl-2">Material: {referencia.material}</li>
                  <li className="pl-2">Animacion: {referencia.animacion}</li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="uppercase">Precio</h3>

                <div className="flex flex-col gap-1">
                  <p>{referencia.detalle}</p>
                  <p className="">• {referencia.precio} •</p>
                </div>
                {referencia.aclaracion && <p>{referencia.aclaracion}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
