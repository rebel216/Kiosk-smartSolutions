import React, { Component } from 'react'
import BarcodeReader from 'react-barcode-reader'
import { Link } from "react-router-dom";

//console.log(JSON.parse(sessionStorage.barcode2))
var barcode2 =null
var barcode = null
class ScanBarcode extends Component {
barcode2 = JSON.parse(sessionStorage.barcode2);
  constructor(props){
    super(props)
    this.state = {
      result: null,
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    this.setState({
      result: data,
    })
    //sessionStorage.barcode1 ="RP123423234IN" //JSON.stringify(data);//change barcode here ... harcoding for test

    //console.log(sessionStorage.barcode)
    barcode = data;
  }
  handleError(err) {
    barcode = null
    console.error(err)
  }
  render(){

    return (
      <div><h2 className='heading'>Take out the Parcel out of machine , stick the lable on Parcel and scan the lable in Barcode Scanner.</h2>
      <div className='login-box'>
         
         <BarcodeReader
          onError={this.handleError}
          onScan={this.handleScan}
        />
     



        {barcode ? (
          barcode=barcode2 ?(
            <><p><h1>Sucess</h1></p><p><Link to="/checkparcelweight" className="link1"><button className="link2 ">Next Page</button></Link></p></>
          ) : (
              <><h2 className="link1">Use Barcode Printed on Lable</h2><p><button className="error ">Scan Again</button></p></>)
      ) : (
        <><button className="error">Scan Again</button></>
      )}

</div>

      </div>
    )
  }

}

export default ScanBarcode
