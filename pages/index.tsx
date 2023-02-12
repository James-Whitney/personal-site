import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>James Whitney</title>
        <meta name="description" content="James Whitney's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="flex h-screen flex-col">
          <div className=" m-1 h-20 flex-none rounded-3xl bg-red-600"></div>

          <div className="h-20 flex-grow bg-green-600">
            <div className="m-1 flex-grow rounded-3xl bg-green-200">
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
              <p>Center</p>
            </div>
          </div>

          <div className="sticky inset-x-0 bottom-0 m-1 h-20 flex-none rounded-3xl bg-blue-600"></div>
        </div>

        {/* <div className="sticky top-0 m-1 h-20 rounded-3xl bg-red-600"></div>

        <div className="flex">
          <div className="m-1 w-24 rounded-3xl bg-green-600">1</div>
          <div className="m-1 flex-grow rounded-3xl bg-green-200">
            <p>Center</p>
            <p>Center</p>
            <p>Center</p>
            <p>Center</p>
            <p>Center</p>
          </div>
          <div className="m-1 w-24 rounded-3xl bg-green-600">3</div>
        </div> */}

        {/* <div className="sticky inset-x-0 bottom-0 m-1  h-20 rounded-3xl bg-blue-600"></div> */}
      </main>
    </>
  );
}

// export default function Home() {
//   // on hover, change the color of the text to a random color
//   // on hover, change the color of the background to a random color

//   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   function hackerWaveEvent(event: any) {
//     console.log(event);
//     let interval: any = null;
//     let iteration = 0;
//     clearInterval(interval);
//     interval = setInterval(() => {
//       event.target.innerText = event.target.innerText
//         .split("")
//         .map((letter: string, index: number) => {
//           if (index < iteration) {
//             return event.target.dataset.value[index];
//           }

//           return letters[Math.floor(Math.random() * 26)];
//         })
//         .join("");

//       if (iteration >= event.target.dataset.value.length) {
//         clearInterval(interval);
//       }

//       iteration += 1 / 2;
//     }, 30);
//   }

//   const random_color = () => {
//     const letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   //

//   return (
//     <>
//       <Head>
//         <title>James Whitney</title>
//         <meta name="description" content="James Whitney's personal website" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main className="grid h-screen justify-items-center overflow-hidden bg-white font-mono text-black dark:bg-black dark:text-white">
//         <div className="place-self-center">
//           <h1 className="rounded-2xl text-dynamic-xl ">James Whitney</h1>
//         </div>
//         <div className="self-start">
//           <ul>
//             <li>
//               <Link
//                 className="rounded-2xl text-dynamic-small hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
//                 onMouseOver={hackerWaveEvent}
//                 data-value="- GitHub"
//                 href="https://github.com/James-Whitney"
//               >
//                 - GitHub
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="rounded-2xl text-dynamic-small hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
//                 onMouseOver={hackerWaveEvent}
//                 data-value="- LinkedIn"
//                 href="https://www.linkedin.com/in/james-d-whitney/"
//               >
//                 - LinkedIn
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="rounded-2xl text-dynamic-small hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
//                 onMouseOver={hackerWaveEvent}
//                 data-value="- Email"
//                 href="mailto:contact@jaswhitney.com"
//               >
//                 - Email
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </main>
//     </>
//   );
// return (
//   <>
//     <Head>
//       <title>Create Next App</title>
//       <meta name="description" content="Generated by create next app" />
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <link rel="icon" href="/favicon.ico" />
//     </Head>
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>pages/index.tsx</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//         <div className={styles.thirteen}>
//           <Image
//             src="/thirteen.svg"
//             alt="13"
//             width={40}
//             height={31}
//             priority
//           />
//         </div>
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={inter.className}>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p className={inter.className}>
//             Find in-depth information about Next.js features and&nbsp;API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={inter.className}>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p className={inter.className}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={inter.className}>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p className={inter.className}>
//             Discover and deploy boilerplate example Next.js&nbsp;projects.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={inter.className}>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p className={inter.className}>
//             Instantly deploy your Next.js site to a shareable URL
//             with&nbsp;Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   </>
// )
// }
