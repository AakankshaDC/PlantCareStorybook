
export function Button({ children, ...props }) {
  return <button style={{
    padding: '10px 16px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    background: '#f0f0f0',
    cursor: 'pointer'
  }} {...props}>{children}</button>
}
