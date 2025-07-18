export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        Micaela Solórzano
        <p>Frontend developer</p>
        <a href="/pages/about">
          <button className="cursor-pointer p-2 bg-amber-300">Click me</button>
        </a>
      </main>
    </div>
  );
}
