import { useEffect, useId, useRef } from 'react'

export function NoticeDialog({ title, open, onClose }: {
  title: string
  open: boolean
  onClose: () => void
}) {
  const dialog = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  useEffect(() => {
    const element = dialog.current
    if (!element) return
    if (open && !element.open) element.showModal()
    if (!open && element.open) element.close()
  }, [open])
  return <dialog ref={dialog} className="trip-dialog footer-dialog" aria-labelledby={titleId}
    onClose={onClose} onCancel={onClose}
    onClick={event => { if (event.target === event.currentTarget) onClose() }}>
    <button className="dialog-close" aria-label="닫기" onClick={onClose}>닫기</button>
    <span className="pill">준비 중</span>
    <h2 id={titleId}>{title}</h2>
    <p>아직 준비 중인 페이지예요.<br />준비가 완료되면 이곳에서 안내해 드릴게요.</p>
    <button className="button" onClick={onClose}>확인</button>
  </dialog>
}
