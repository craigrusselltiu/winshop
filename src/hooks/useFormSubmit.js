import { useState, useCallback } from 'react'

export default function useFormSubmit(endpoint) {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const submit = useCallback(
    async (data) => {
      setStatus('submitting')
      setError(null)

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        })

        if (response.ok) {
          setStatus('success')
        } else {
          setStatus('error')
          setError('Something went wrong. Please try again.')
        }
      } catch {
        setStatus('error')
        setError('Network error. Please check your connection.')
      }
    },
    [endpoint],
  )

  const reset = useCallback(() => {
    setStatus('idle')
    setError(null)
  }, [])

  return { status, error, submit, reset }
}
