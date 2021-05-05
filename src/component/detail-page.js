import React from 'react';
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInbox} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";

const DetailPage = ({dataSource}) => {
  const { detailId } = useParams();
  let detailsData = dataSource[detailId]
  let history = useHistory();
  const {id, sender_bank, beneficiary_bank, beneficiary_name, account_number, remark, amount, unique_code, status, created_at} = detailsData
  return (
    <>
    <div className="homepage">
      <h1 className="title">Detail Transaksi</h1>
      <div className="details-section header" >
        <div className="side-id">
          ID Transaksi: #{id}
        </div>
        <div className="side-button">
          {status === 'SUCCESS' ?
            <button className='btn btn-success'> Berhasil </button> :
            <button className='btn btn-pending'> Pengecekan </button> 
          }
        </div>
      </div>
      <div className="details-section main-content">
        <div className="left-icon">
          <FontAwesomeIcon icon={faInbox}/>
        </div>
        <div className="detail-list">
          <div className="row-list">
            <div className="label">
              Pengirim  
            </div>
            <div className="detail-text">
              {sender_bank}
            </div>
          </div>

          <div className="row-list">
            <div className="label">
              Penerima  
            </div>
            <div className="detail-text">
              {beneficiary_bank}
              <p className="account">{account_number}</p>
              <p className="name">{beneficiary_name}</p>
            </div>
          </div>

          <div className="row-list">
            <div className="label">
            Nominal  
            </div>
            <div className="detail-text">
              {amount}
            </div>
          </div>

          <div className="row-list">
            <div className="label">
            Catatan  
            </div>
            <div className="detail-text">
              {remark}
              <div className="inline-list">
                <span className="label">
                Kode Unik:  
                </span>
                {unique_code}
              </div>
              
            </div>
          </div>

          <div className="row-list">
            <div className="label">
            Waktu dibuat  
            </div>
            <div className="detail-text">
              {created_at}
            </div>
          </div>
        </div>

      </div>
      <button className="btn btn-back" onClick={() => history.goBack()}> Kembali </button>
    </div>
    
    </>
  )
}

export default DetailPage
