import { useAppFeatures } from './use-app-features'

export function AppFeatures() {
  const { data, error, isPending, isError, isFetching, refetch } = useAppFeatures()

  return (
    <section className="mt-10 border-t border-slate-200 pt-8" aria-labelledby="app-features-title">
      <h2 id="app-features-title" className="text-xl font-semibold">
        가야디와 함께하는 여행
      </h2>
      <div className="mt-5" aria-live="polite" aria-busy={isFetching}>
        {isPending && <p className="text-slate-600">앱 소개를 불러오고 있습니다.</p>}
        {isError && (
          <div>
            <p role="alert" className="text-red-700">{error.message}</p>
            <button
              type="button"
              onClick={() => void refetch()}
              disabled={isFetching}
              className="mt-3 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 disabled:cursor-wait disabled:opacity-50"
            >
              {isFetching ? '불러오는 중…' : '다시 시도'}
            </button>
          </div>
        )}
        {data && (data.length === 0 ? (
          <p className="text-slate-600">앱 소개를 준비하고 있습니다.</p>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2">
            {data.map((feature) => (
              <li key={feature.id} className="rounded-2xl bg-emerald-50 p-6">
                <h3 className="font-semibold text-emerald-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
