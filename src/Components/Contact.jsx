import React from 'react'

export const Contact = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contact</h1>

      <form action="mailto:layla@layla.com">
        <input type="text" name="name" id="" placeholder='Name'/>
        <input type="text" name="lastName" id="" placeholder='Last Name'/>
        <input type="text" name="email" id="" placeholder='Email'/>
        <textarea name="description" id=""  rows="6" placeholder='Reason for contact'></textarea>
        <input type="submit" name="send" id="" value="SEND" />
      </form>
    </div>
  )
}
