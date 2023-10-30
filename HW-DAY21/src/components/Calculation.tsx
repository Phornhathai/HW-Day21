import React from 'react'
import { useState } from 'react'


const Calculation = () => {

  const [weight, setWeight] = useState<number>(0);
  const [DrinkCount, setDrinkCount] = useState<number | string>('');

  const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(+event.target.value)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //หยุดการโหลดหน้าเว็บเมื่อกด submit
    event.preventDefault()

    //คำนวณน้ำดื่มตามน้ำหนัก
    const CalculateDrink = (weight * 2.2 * (30 / 2))
    setDrinkCount(CalculateDrink.toFixed(2))
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
        <h1>{DrinkCount} มล.</h1>
        <p><b>กรุณาระบุน้ำหนักของท่าน</b></p>
        <input type="number" name='weight' id='weight' min='3' onChange={onChangeWeight} placeholder='น้ำหนักของคุณ (กิโลกรัม)' />
        <br />
        <button type="submit">คำนวณ</button>
      </form>
    </div>
  )
}

export default Calculation
