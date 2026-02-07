export default function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-14 border-t border-line">
      <div className="max-w-5xl mx-auto px-6">
        {title ? <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2> : null}
        <div className={title ? "mt-6" : ""}>{children}</div>
      </div>
    </section>
  );
}
