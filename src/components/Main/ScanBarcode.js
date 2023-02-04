import React, { Component } from 'react'
import BarcodeReader from 'react-barcode-reader'
import { Link } from "react-router-dom";

console.log(JSON.parse(sessionStorage.barcode2))
var barcode2 =JSON.parse(sessionStorage.barcode2);
var barcode = null
class ScanBarcode extends Component {

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

    console.log(sessionStorage.barcode)
    barcode = data;
  }
  handleError(err) {
    barcode = null
    console.error(err)
  }
  render(){

    return(
      <div className='ticket'>
         <BarcodeReader
          onError={this.handleError}
          onScan={this.handleScan}
        />
      <h1>Stick the lable on Parcel and place it near barcode scanner.</h1>



        {barcode ? (
          barcode === barcode2 ?(
            <><p><h1>Sucess</h1></p><p><Link to="/checkparcelweight" className="main-link"><h2>Next Page</h2></Link></p></>
          ) : (
              <><p><h2 className="main-link error">Use Barcode Printed on Lable</h2></p><p><h2 className="main-link ">Scan Again</h2></p></>)
      ) : (
        <p><h2 className="main-link error">Scan Again</h2></p>
      )}



      </div>
    )
  }

}

export default ScanBarcode
