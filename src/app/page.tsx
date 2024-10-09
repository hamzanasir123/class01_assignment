import Link from "next/link";

export default function Home() {
  return (
  <div>
    <nav className=" w-full bg-slate-400 h-10 text-center font-black font-serif  ">
    <Link href={'#'} className=" mr-5">Home</Link>
    <Link href={'/about'} className=" mr-5">About</Link>
    <Link href={'/contact'}>Contact</Link>
    </nav>
    <div
    className="w-full h-screen text-center bg-slate-300"
    >
    <p
    className="text-9xl font-mono"
    >
      <br/>
      Hi<br/> I Am Hamza Nasir</p>
    </div>
    <footer 
    className="text-center h-8 bg-slate-400"
    >
      <p>Hamza Nasir Copyright c </p>
    </footer>
  </div>
  );
}
