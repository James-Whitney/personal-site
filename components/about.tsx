export default function About() {
  return (
    <div className="border-2 border-dotted border-black text-xl">
      <ul className="">
        <li className="list-none py-4 hover:list-disc">
          Infrastructure Lead and Backend Software Engineer at{" "}
          <a className="underline decoration-red-500" href="https://www.callin.com/">
            Callin.com
          </a>
        </li>
        <li className="list-none py-4 hover:list-disc">
          Previously at AWS: DevOps for{" "}
          <a className="underline decoration-orange-500" href="https://aws.amazon.com/s3/">
            S3
          </a>
          ,{" "}
          <a className="underline decoration-orange-500" href="https://aws.amazon.com/serverless/">
            Serverless
          </a>
          ,{" "}
          <a
            className="underline decoration-orange-500"
            href="https://aws.amazon.com/federal/us-intelligence-community/"
          >
            AWS Intelligence
          </a>
          , and{" "}
          <a className="underline decoration-cyan-700" href="https://www.linkedin.com/company/annapurna-labs/">
            Annapurna Labs
          </a>
        </li>
        <li className="list-none py-4 hover:list-disc">
          Graduated from Cal Poly in 2018 with a bachelors in{" "}
          <a className="underline decoration-green-700" href="https://www.calpoly.edu/major/computer-engineering">
            Computer Engineering
          </a>
        </li>
      </ul>
    </div>
  );
}
