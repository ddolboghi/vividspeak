export default function page({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div>layout</div>
      {children}
    </main>
  );
}
