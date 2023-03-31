import React from 'react';
import { useSelector } from 'react-redux';
import SpeedPost from './components/Main/SpeedPost'
import Main from './components/Main/Main';
import ScanBarcode from './components/Main/ScanBarcode';
import { Routes , Route } from 'react-router-dom';
import RegisteredPost from './components/Main/RegisteredPost';
import PrintComponent from './components/Main/PrintComponent';
import PayMent from './components/Main/PayMent';
import SignIn from './components/user/SignIn';
import RecieptPrint from './components/Main/RecieptPrint'
import SignUp from './components/user/SignUp'
import PostSignin from './components/user/postSignin'
import CheckParcel from './components/Main/CheckParcel';
import Success from './components/Main/Success';
import { ExportToExcel } from './components/Main/ExportToExcel';
import DownloadData from './components/Main/DownloadData';
import DeviceSignin from './components/user/DeviceSignin';
import SelectPage from './components/Main/SelectPage';

const App = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className='APP'>


          <Routes>
        <Route path='/registeredpost' element={<RegisteredPost />} />
        <Route path='/recieptprint' element={<RecieptPrint />} />
        {/* <Route path='/serial' element={<Serial />} /> */}
        <Route path='/speedpost' element={<SpeedPost />} />
        {<Route path='/devise' element={<SignIn />} />}
         { <Route path='/' element={<DeviceSignin />} /> }
        <Route path='/main' element={<Main />} />
        <Route path='/select' element={<SelectPage />} />
            <Route path='/PrintComponent' element={<PrintComponent />} />
        <Route path='/ScanBarcode' element={<ScanBarcode />} />
         <Route path='/ExportToExcel' element={<DownloadData />} />
        <Route path='/PayMent' element={<PayMent />} />
        <Route path='/success' element={<Success />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/postsignin' element={<PostSignin />} />

        <Route path='/checkparcelweight' element={<CheckParcel />} />

          </Routes>

    </div>

  );
};


export default App;
