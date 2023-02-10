import React from 'react'
import NApp from './NApp'
import cert from '../images/cert.png'

function Certificate() {
  return (
    <div className='abt'>
      
      <div class="Nparent">
<div class="Ndiv1"> </div>
<div class="Ndiv2"> <img className='cert' src={cert}/></div>
<div class="Ndiv3">
<br></br>
<NApp/> </div>
</div>
    </div>
  )
}

export default Certificate
