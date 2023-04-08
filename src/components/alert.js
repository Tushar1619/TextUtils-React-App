import React from 'react'

function Alert({obj,msg}) {
    return (
        msg && <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{obj.status},</strong> {obj.message} 
      </div>
    )
}

export default Alert