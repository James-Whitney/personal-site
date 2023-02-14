export default function Footer() {
  return (
    <>
      <div className="sticky bottom-0 flex-none bg-black">
        <div className="px-16">
          <hr></hr>
        </div>
        <div className="flex text-center text-2xl">
          <a className="basis-1/3 py-8 hover:bg-blue-400" href="https://twitter.com/0xJamesWhitney">
            Twitter
          </a>
          <a className="basis-1/3 py-8 hover:bg-slate-600" href="https://github.com/James-Whitney">
            Github
          </a>
          <a className="basis-1/3 py-8 hover:bg-green-600" href="mailto:contact@JasWhitney.com">
            Email
          </a>
        </div>
      </div>
    </>
  );
}
