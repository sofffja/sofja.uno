export default function Gallery() {
  const obras = [
    { title: 'mas que anibios', img: 'n006.jpg', text: '' },
    {
      title: 'cover artwork for Stazma The Junglechrist - Poursuite EP',
      img: 'T010b.jpg',
      text: '',
    },
    {
      title: 'cover artwork for Sufrimiento Records V/A',
      img: 'w003.jpg',
      text: '',
    },
    {
      title: 'cover artwork for Cimarron - Sin Cara, Sin Nombre',
      img: 'cimarron-1920.jpg',
      text: '',
    },
    {
      title: '[▒▒▒╜░╜╙▒▒▒▒▒▒▒]',
      img: 'n011.jpg',
      text: `SA001 ☽•∷○
      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓`,
    },
    {
      title: 'in a pool of their own juices',
      img: 'n010.jpg',
      text: 'sin ojos ni oídos, sin piernas',
    },
    {
      title: 'anew',
      img: 'n009.jpg',
      text: `the whole body is shaking, but there is a quiet feeling inside
      a flame burning at the feet of his feet
      its flames rising by its fires and its fire rising by its flames
      and the hands are empty
      and your arms
      and your legs`,
    },
    {
      title: 'como bichos arrojados en la noche',
      img: 'n007.jpg',
      text: `sharp horns that can hide behind some thick cloth
      bodies so dense it's barely visible
      it disappeared from the sea and returned to Earth
      more flesh and fur
      new eyes
      could have just seen it for the first time`,
    },
    { title: 'landscape type II', img: 'n008.jpg', text: '' },
    { title: '', img: 'c001.jpg', text: '' },
    { title: '', img: 'c002.jpg', text: '' },
    { title: '', img: 'c003.jpg', text: '' },
  ];

  return (
    <>
      <div className="flex flex-col gap-16 text-center pb-16">
        {obras.map((obra) => (
          <div
            key={obra.img}
            className="items-center justify-center w-full min-h-screen flex flex-col gap-2"
          >
            <img
              src={`media/${obra.img}`}
              alt=""
              className="rounded-md shadow-[0_0_18px_0_rgba(0,0,0,0.3)] max-h-[80vh] h-auto max-w-2/3 lg:max-w-2/5"
            />
            <p className="">{obra.title}</p>
            <p className="whitespace-pre-line text-sm">{obra.text}</p>
          </div>
        ))}
        <div>✼</div>
      </div>
    </>
  );
}
