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

export default function PresupuestoLeutthe() {
  return (
    <div className="py-16 px-8 flex flex-col gap-16 font-sans text-sm max-w-4xl mx-auto">
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
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="italic text-zinc-600">
            Precios por paquete de animaciones simples
          </h3>
          <ul>
            <li>3 x $700.000</li>
            <li>4 x $900.000</li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="italic text-zinc-600">Incluido en paquete</h3>
          <ul>
            <li className="pl-2">- 1 reunión al comienzo</li>
            <li className="pl-2">- Entrega de boceto</li>
            <li className="pl-2">- Hasta 2 correcciones</li>
            <li className="pl-2">
              - Disponibilidad para consultas de lunes a viernes de 9 a 17hs
            </li>
            <li className="pl-2">- Precio fijo por 3 meses</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="flex flex-col gap-4">
        <h2 className="uppercase font-bold">Ejemplos</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-xs">
          <div className="flex flex-col gap-2">
            <img
              className="w-full h-[300px] object-center object-cover border  border-zinc-400 rounded-sm"
              src="/guide-3d/1.png"
              alt=""
            />

            <a
              href="https://www.instagram.com/reel/C5kz_9QIWu_/"
              className="italic underline text-zinc-400"
            >
              &#8594; referencia
            </a>

            <h2 className="font-bold">Logo con materiales animados</h2>

            <ul className="flex flex-col gap-1">
              <li className="pl-2">
                Figura: Nivel 1 - Logo a partir de diseño
              </li>
              <li className="pl-2">
                Animacion: Nivel 1 - Figura y cámara fijas
              </li>
              <li className="pl-2">
                Material: Nivel 3 - Material animado con combinación de colores
                y textura compleja
              </li>
            </ul>

            <h3 className="italic underline">Precio</h3>
            <ul className="flex flex-col gap-1">
              <li>
                4 animaciones de hasta 2 segundos, materiales diferentes:
                $450.000
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <img
              className="w-full h-[300px] object-center object-cover border  border-zinc-400 rounded-sm"
              src="/guide-3d/2.png"
              alt=""
            />

            <a
              href="https://www.instagram.com/reel/ChrLlQYIUlA/"
              className="italic underline text-zinc-400"
            >
              &#8594; referencia
            </a>

            <h2 className="font-bold">Texto que se va escribiendo</h2>

            <ul className="flex flex-col gap-1">
              <li className="pl-2">Figura: Nivel 1 - Texto cursiva</li>
              <li className="pl-2">
                Animacion: Nivel 1 - Un solo objeto. Curvas dibujándose con
                cámara fija
              </li>
              <li className="pl-2">
                Material: Nivel 2 - Material opaco con colores y textura
              </li>
            </ul>

            <h3 className="italic underline">Precio</h3>
            <ul className="flex flex-col gap-1">
              <li>1 animacion de hasta 8 segundos: $250.000</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <img
              className="w-full h-[300px] object-center object-cover border  border-zinc-400 rounded-sm"
              src="/guide-3d/3.png"
              alt=""
            />

            <a
              href="https://www.instagram.com/p/C7mRaVCtPwI/?hl=en"
              className="italic underline text-zinc-400"
            >
              &#8594; referencia
            </a>

            <h2 className="font-bold">Nudo</h2>

            <ul className="flex flex-col gap-1">
              <li className="pl-2">Figura: Nivel 1 - Soga en forma de nudo</li>
              <li className="pl-2">
                Animacion: Nivel 3 - Simulación de física de soga anudándose,
                interacción entre partes
              </li>
              <li className="pl-2">
                Material: Nivel 3 - Tela realista, detalle complejo
              </li>
            </ul>

            <h3 className="italic underline">Precio</h3>
            <ul className="flex flex-col gap-1">
              <li>1 animacion de hasta 8 segundos: $450.000</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
