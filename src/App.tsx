import { AppFeatures } from './features/introduction/AppFeatures'

function App() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-slate-50 px-6 py-12 text-slate-900">
      <section className="w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <p className="text-sm font-semibold tracking-widest text-emerald-700">
          GAYADI
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          다음 여행, 가야디와 함께
        </h1>
        <p className="mt-4 leading-7 text-slate-600">
          떠나고 싶은 순간부터 새로운 여정의 시작까지.
          여행 앱 가야디와 함께 나만의 여행을 준비해 보세요.
        </p>
        <AppFeatures />
      </section>
    </main>
  )
}

export default App
