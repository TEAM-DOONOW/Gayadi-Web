import { useState } from 'react'

export function SaveMemoryButton() {
  const [saved, setSaved] = useState(false)
  return (
    <>
      <button className={`save-button ${saved ? 'is-saved' : ''}`} aria-pressed={saved} onClick={() => setSaved(!saved)}>{saved ? '이 여행을 기억해 뒀어요' : '이런 여행, 기억해 두기'}<span aria-hidden="true">{saved ? '✓' : '+'}</span>
      </button>
      <p className="save-feedback" role="status">{saved ? '이 페이지를 보는 동안 기억해 둘게요.' : ''}</p>
    </>
  )
}
