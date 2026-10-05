export default function Home() {
  return (
    <main className="page">
      <section className="card" aria-labelledby="page-title">
        <p className="eyebrow">SOFTWARE ENGINEER · MANU</p>
        <h1 id="page-title">Hello, folks!</h1>
        <p className="intro">
          I’m Manu, a software engineer who loves building things for the web.
        </p>
        <div className="status">
          <span className="status-dot" aria-hidden="true" />
          Stay curious. Keep building.
        </div>
        <footer>Make something useful. Make it yours.</footer>
      </section>
    </main>
  );
}
