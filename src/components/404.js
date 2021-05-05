import { React } from 'react'

function notFound({ location }) {
  return (
    <div>
      <p style={{ marginLeft: '30px', fontWeight: 'bold', fontSize: '16px' }}>
        no matching path<code>{location.pathname}</code>
      </p>
    </div>
  )
}

export default notFound
