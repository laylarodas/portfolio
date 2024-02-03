import React from 'react'

export const Contact = () => {
  return (
    <div className='page'>
      <h1>Contact</h1>

      <form action="mailto:layla@layla.com">
        <input type="text" name="name" id="" placeholder='Name'/>
        <input type="text" name="lastName" id="" />
        <input type="text" name="email" id="" />
        <textarea name="description" id="" cols="30" rows="10"></textarea>
        <input type="submit" name="send" id="" value="send" />
      </form>
    </div>
  )
}
