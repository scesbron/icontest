// App.tsx

// Static import
import { useState, lazy, Suspense } from "react";
import Banner from "./components/banner";

const Home = lazy(() => import("./components/home")); // default export
const About = lazy(() => import("./components/about")); // default export
const Inline = lazy(() => import("./components/inline")); // default export

export default function App() {
  const [tab, setTab] = useState<"home" | "about" | "inline">("home");

  return (
    <main>
      <Banner />

      <nav>
        <button onClick={() => setTab("home")}>Home</button>
        <button onClick={() => setTab("about")}>About</button>
        <button onClick={() => setTab("inline")}>Inline</button>
      </nav>

      {tab === "home" && (
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      )}
      {tab === 'about' && (
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
      )}
      {tab === 'inline' && (
        <Suspense fallback={<div>Loading...</div>}>
          <Inline />
        </Suspense>
      )}
    </main>
  );
}
