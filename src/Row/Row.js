import React from 'react'

import './Row.css';

const row = props => {
  let index = "even"
  if (props.index % 2 !== 0) {
    index = "odd"
  }
  return (
    <tr className={index}>
      <td>{props.row.owner}</td>
      <td>{props.row.total_owned === 0 ? "" : props.row.total_owned}</td>
      <td>{props.row.support === 0 ? "" : props.row.support}</td>
      <td>{props.row.customer === 0 ? "" : props.row.customer}</td>
      <td>{props.row.development === 0 ? "" : props.row.development}</td>
      <td>{props.row.escalations === 0 ? "" : props.row.escalations}</td>
      <td>{props.row.open_over_30_days === 0 ? "" : props.row.open_over_30_days}</td>
      <td>{props.row.update_over_7_days === 0 ? "" : props.row.update_over_7_days}</td>
      <td>{props.row.update_over_30_days === 0 ? "" : props.row.update_over_30_days}</td>
      <td>{props.row.taken_today === 0 ? "" : props.row.taken_today}</td>
      <td>{props.row.taken_1 === 0 ? "" : props.row.taken_1}</td>
      <td>{props.row.taken_2 === 0 ? "" : props.row.taken_2}</td>
      <td>{props.row.taken_3 === 0 ? "" : props.row.taken_3}</td>
      <td>{props.row.taken_4 === 0 ? "" : props.row.taken_4}</td>
      <td>{props.row.taken_5 === 0 ? "" : props.row.taken_5}</td>
      <td>{props.row.taken_6 === 0 ? "" : props.row.taken_6}</td>
      <td>{props.row.taken_last_31_days === 0 ? "" : props.row.taken_last_31_days}</td>
      <td>{props.row.response}</td>
      <td>{props.row.c_today === 0 ? "" : props.row.c_today}</td>
      <td>{props.row.c_mtd === 0 ? "" : props.row.c_mtd}</td>
      <td>{props.row.c_last_31_days === 0 ? "" : props.row.c_last_31_days}</td>
      <td>{props.row.survey}</td>
      <td>{props.row.kb_created}</td>
      <td>{props.row.kb_modified}</td>
      <td>{props.row.kb_linked}</td>
      <td>{props.row.kb_percent}</td>
    </tr>
  )
}

export default row