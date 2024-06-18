export default function About() {
  const baseStyle = 'hover:text-primary transition-colors';

  return (
    <div className="flex md:flex-row flex-col md:gap-0 gap-8 justify-between lg:w-3/4 xl:w-2/3 py-16">
      <p>ditial artist && web developer && electronic musician</p>

      <div className="flex gap-4">
        <p>contact: </p>
        <div className="flex flex-col">
          <a className={baseStyle} href="mailto:sfffj@proton.me">
            sfffj@proton.me
          </a>
          <a className={baseStyle} href="https://www.instagram.com/_sofffja/">
            instagram
          </a>
          <a className={baseStyle} href="https://twitter.com/_sofffja">
            twitter
          </a>
        </div>
      </div>

      <div>
        <a className={baseStyle} href="https://www.aguja.re/">
          aguja.re
        </a>{' '}
        |{' '}
        <a className={baseStyle} href="https://www.unun.link">
          unun.link
        </a>
      </div>
    </div>
  );
}
