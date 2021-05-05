import React from 'react';
import formatDate from '../utils/format-date';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faCircle} from '@fortawesome/free-solid-svg-icons'


const TransactionList = ({dataTransaction}) => {
  return (
    <div className="transaction-section">
      {Object.values(dataTransaction).map((val, key) => 
        <div className={`transaction-list ${val.status === "SUCCESS" ? "success" : "pending"}`} key={key}>
          <Link to={`/${val.id}`}>
            <div className="detail-section">
              <div className="bank-group-name">
                {val.sender_bank} 
                <FontAwesomeIcon icon={faArrowRight} className="space-left-right"/> 
                {val.beneficiary_bank}</div>
              <div className="receiver-name">
                {val.beneficiary_name}
              </div>
              <div className="amount-date">
                Rp{(val.amount)}
                <FontAwesomeIcon icon={faCircle} className="space-left-right mini"/> 
                {formatDate(val.completed_at)}
              </div>
            </div>
            <div className="status-section">
              {val.status === 'SUCCESS' ?
                <button className='btn btn-success'> Berhasil </button> :
                <button className='btn btn-pending'> Pengecekan </button> 
              }
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}

export default TransactionList
