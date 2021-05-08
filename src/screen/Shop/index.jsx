import {ShopProduct} from '../../components/ShopProduct'


import './styles.css'


import caffe_g from '../../image/coffee-3392168_640 1.png'
import caffe_p from '../../image/coffee-206142_640 1.png'
import caffe_c from '../../image/coffee-2049822_640 1.png'


function Shop() {

  return (
    <>
      <div className="select-product">
        <div className="btn-group " role="group" aria-label="Basic radio toggle button group">
          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
          <label className="btn btn-select" htmlFor="btnradio1"><img src={caffe_g} alt="" /><h5>CAFÉ EM GRÃOS</h5></label>

          <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
          <label className="btn btn-select" htmlFor="btnradio2"><img src={caffe_p} alt="" /><h5>CAFÉ EM PÓ</h5></label>

          <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
          <label className="btn btn-select" htmlFor="btnradio3"><img src={caffe_c} alt="" /><h5>CAFÉ EM CÁPSULAS</h5></label>
        </div>
      </div> 
      <div className="prod-list" >
        <ShopProduct  />
      </div>

    </>
  );
}

export default Shop