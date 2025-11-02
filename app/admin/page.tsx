'use client'

export default function AdminPage() {
  return (
    <iframe
      src="/admin/index.html"
      style={{
        width: '100%',
        height: '100vh',
        border: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    />
  )
}
