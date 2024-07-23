export default function Obra({ obra }) {
  if (!obra) return null;

  return (
    <div
      key={obra.title}
      className="items-center justify-center w-full min-h-[calc(100vh+3rem)] flex flex-col gap-2"
    >
      <img
        src={`media/${obra.img}`}
        alt={obra.title}
        onLoad={() => setIsLoaded(true)}
        className={`rounded-md shadow-[0_0_18px_0_rgba(0,0,0,0.3)] max-h-[80vh] h-auto max-w-2/3 lg:max-w-2/5 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } transition-opacity`}
      />
      <p className="drop-shadow-[1px_1px_0px_rgba(0,0,0,0.5)] ">{obra.title}</p>
      <p className="drop-shadow-[1px_1px_0px_rgba(0,0,0,0.5)] whitespace-pre-line text-sm">
        {obra.text}
      </p>
    </div>
  );
}
