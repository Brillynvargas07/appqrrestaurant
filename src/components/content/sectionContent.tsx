import Table from "../boards/table";

export default function SectionContent() {
  return (
    <main>
      <header>
        <div className="separator">
          <div className="info">
            <h3>Gestion de mesas</h3>
            <a href="#">Estado actual de mesas</a>
          </div>
        </div>
      </header>

      <div>
        <Table/>
      </div>
    </main>
  );
}
