import React from 'react'

const SearchForm = ({sourceData, handleSelectOption, handleTypeSearch}) => {
  return (
    <div className='form-search'>
      <input type="text" placeholder="Cari nama atau bank" onChange={(e) => handleTypeSearch(e.target.value)} className="input-search"/>
      <select onChange={(e) => handleSelectOption(e.target.value)} className="input-sort">
        <option value="nama_a_z">Nama A - Z</option>
        <option value="nama_z_a">Nama Z - A</option>
        <option value="tanggal_terbaru">Tanggal terbaru</option>
        <option value="tanggal_terlama">Tanggal terlama</option>

      </select>
    </div>
  )
}

export default SearchForm
