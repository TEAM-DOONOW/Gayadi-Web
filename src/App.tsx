function App() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-slate-50 px-6 py-12 text-slate-900">
      <section className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <p className="text-sm font-semibold tracking-widest text-emerald-700">
          GAYADI
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          새로운 여정의 시작
        </h1>
        <p className="mt-4 leading-7 text-slate-600">
          React, TypeScript, Tailwind CSS 개발 환경이 준비되었습니다.
          src/App.tsx를 수정하여 시작하세요.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2" aria-label="기술 스택">
          {['React', 'TypeScript', 'Tailwind CSS'].map((name) => (
            <li
              key={name}
              className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800"
            >
              {name}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
