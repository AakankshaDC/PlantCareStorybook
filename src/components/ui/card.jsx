
export function Card({ children }) {
  return <div style={{
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    padding: '1rem',
    backgroundColor: 'white'
  }}>{children}</div>
}

export function CardContent({ children }) {
  return <div>{children}</div>
}
