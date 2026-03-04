import { Header } from "./components/header";
import { Aside } from "./components/aside"
import { Main } from "./components/main"

export default function Home() {
  return (
    <>
      <Header/>
      <div className="flex flex-1">
        <Aside/>
        <Main/>
      </div>
    </>
  );
}
