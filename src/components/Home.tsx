import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  const sectionClass =
    'bg-theme-gradient shadow-lg rounded-xl p-6 transition-colors';

  return (
    <main className="p-6 space-y-8">
      <section className={sectionClass}>
        <h2 className="text-2xl font-bold mb-2">{t('welcome')}</h2>
        <p className="text-textColor">{t('description')}</p>
      </section>

      <section className={sectionClass}>
        <h3 className="text-xl font-semibold mb-2">📄 Section 2</h3>
        <p className="text-textColor">
          This is a placeholder for another content block (e.g., skills, profile).
        </p>
      </section>

      <section className={sectionClass}>
        <h3 className="text-xl font-semibold mb-2">📂 Section 3</h3>
        <p className="text-textColor">
          Another card content block for projects or highlights.
        </p>
      </section>

      <section className={sectionClass}>
        <h3 className="text-xl font-semibold mb-2">📫 Section 4</h3>
        <p className="text-textColor">
          Add your contact info or call-to-action here.
        </p>
      </section>
      <section className={sectionClass}>
        <h3 className="text-xl font-semibold mb-2">📫 Section 4</h3>
        <p className="text-textColor">
          Add your contact info or call-to-action here.
        </p>
      </section>
      <section className={sectionClass}>
        <h3 className="text-xl font-semibold mb-2">📫 Section 4</h3>
        <p className="text-textColor">
          Add your contact info or call-to-action here.
        </p>
      </section>
      <section className={sectionClass}>
        <h3 className="text-xl font-semibold mb-2">📫 Section 4</h3>
        <p className="text-textColor">
          Add your contact info or call-to-action here.
        </p>
      </section>
      <section className={sectionClass}>
        <h3 className="text-xl font-semibold mb-2">📫 Section 4</h3>
        <p className="text-textColor">
          Add your contact info or call-to-action here.
        </p>
      </section>
      <section className={sectionClass}>
        <h3 className="text-xl font-semibold mb-2">📫 Section 4</h3>
        <p className="text-textColor">
          Add your contact info or call-to-action here.
        </p>
      </section>
    </main>
  );
}
