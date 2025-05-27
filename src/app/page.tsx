import MedalTable from './components/MedalTable/MedalTable';

export default function Home() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      role="main"
    >
      <main
        className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"
        aria-labelledby="main-heading"
      >
        <h1
          id="main-heading"
          className="text-4xl font-bold text-center sm:text-left"
        >
          Medal Count
        </h1>
        <MedalTable />
      </main>
      <footer
        className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"
        role="contentinfo"
      ></footer>
    </div>
  );
}
