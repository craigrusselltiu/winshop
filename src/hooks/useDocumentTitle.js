import { useEffect } from 'react'

export default function useDocumentTitle(title) {
  useEffect(() => {
    const base = 'Winshop Australia'
    document.title = title ? `${title} | ${base}` : base
  }, [title])
}
