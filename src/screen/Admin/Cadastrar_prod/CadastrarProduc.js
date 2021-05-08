// import { Form, Button, Col, InputGroup, ButtonGroup, ToggleButton } from 'react-bootstrap'
import { useState } from 'react'

import caffe_g from '../../../image/coffee-3392168_640 1.png'
import caffe_p from '../../../image/coffee-206142_640 1.png'
import caffe_c from '../../../image/coffee-2049822_640 1.png'

import './styles.css';

function AddProduct() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'CAFÉ EM GRÃOS', value: '1', img: caffe_g },
    { name: 'CAFÉ EM PÓ', value: '2', img: caffe_p },
    { name: 'CAFÉ EM CÁPSULAS', value: '3', img: caffe_c },
  ];

 



  return (
    
    <>
    <form>
      <div className='Tipo_prod form-row'>
        <div>
        {radios.map((radio, idx) => (
          <label key={idx}
          type="radio"
          variant="secondary"
          name="radio"
          value={radio.value}
          checked={radioValue === radio.value}
          onChange={(e) => setRadioValue(e.currentTarget.value)}>
          <input key={idx}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}/>
           <div><img src={radio.img}/></div> 
            CAFÉ EM GRÃOS
          </label>
         ))}
        </div>
      </div>
      <div class="form-row">
      <div class="row">
        <div class="col">
        <label class="form-label">Nome Produto</label>
        <input placeholder="Nome Produto" class="form-control"/>
         </div></div>
      <div class="row">
    <div class="col">
        <label class="form-label">Preço</label>
        <input placeholder="Preço" class="form-control"/>
        </div></div>
        <div class="row">
    <div class="col">
          <label class="form-label">Drescição</label>
          <textarea rows="3" class="form-control">
            </textarea>
          </div></div>
          <div class="row">
          <div class="col"></div>
            <button type="submit" class="button_cadastrar btn btn-primary">CADASTRAR</button>
          </div></div>
          
      </form>
    </>
  );
}

export default AddProduct;