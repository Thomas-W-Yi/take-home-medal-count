import MedalTable from './components/MedalTable/MedalTable';

export default function Home() {
  return (
    <main aria-labelledby="main" role="main" tabIndex={-1}>
      <h1 id="main-heading" className="main-heading">
        Medal Count
      </h1>
      <MedalTable />
    </main>
  );
}
