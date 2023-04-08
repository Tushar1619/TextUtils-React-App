import React from 'react'

export default function About({mode}) {
  return (
    <div className={`mt-3 text-center text-${(mode==='light'?'dark':'light')}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quia mollitia laboriosam sed velit est dolorem delectus atque, nam ipsum rerum eligendi excepturi. Ipsam dolores velit fuga error aliquid laboriosam enim iure tenetur blanditiis debitis, dicta quas odit voluptate asperiores ad aut vitae quidem eos unde. Earum eveniet modi nisi.
    </div>
  )
}
