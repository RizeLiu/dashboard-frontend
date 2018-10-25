import React, { Component } from 'react';

import './Row.css';


class Row extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: {display: "none"}
    }

    let index = "even"
    if (this.props.index % 2 !== 0) {
      index = "odd"
    }

    this.showHide = this.showHide.bind(this)
  }

  showHide() {
    let show = {...this.state.show}
    show.display = show.display == 'none' ? show.display = 'block' : show.display = 'none'
    this.setState({
      show
    });
  }

  render(){

  if(Array.isArray(this.props.row)){
    let combined_row = {
      "c_last_31_days": 0, 
      "c_mtd": 0, 
      "c_today": 0, 
      "customer": 0, 
      "development": 0, 
      "escalations": 0, 
      "kb_linked": 0, 
      "open_over_30_days": 0, 
      "owner": "", 
      "product_line": "", 
      "support": 0, 
      "taken_1": 0, 
      "taken_2": 0, 
      "taken_3": 0, 
      "taken_4": 0, 
      "taken_5": 0, 
      "taken_6": 0, 
      "taken_last_31_days": 0, 
      "taken_today": 0, 
      "total_owned": 0, 
      "update_over_30_days": 0, 
      "update_over_7_days": 0
    }
    this.props.row.forEach(r => {
      combined_row.c_last_31_days += r.c_last_31_days
      combined_row.c_mtd += r.c_mtd
      combined_row.c_today += r.c_today
      combined_row.customer += r.customer
      combined_row.development += r.development
      combined_row.escalations += r.escalations
      combined_row.kb_linked += r.kb_linked
      combined_row.open_over_30_days += r.open_over_30_days
      combined_row.owner = r.owner + ' (combined)'
      combined_row.product_line += r.product_line
      combined_row.support += r.support
      combined_row.taken_1 += r.taken_1
      combined_row.taken_2 += r.taken_2
      combined_row.taken_3 += r.taken_3
      combined_row.taken_4 += r.taken_4
      combined_row.taken_5 += r.taken_5
      combined_row.taken_6 += r.taken_6
      combined_row.taken_last_31_days += r. taken_last_31_days
      combined_row.taken_today += r.taken_today
      combined_row.total_owned += r.total_owned
      combined_row.update_over_30_days += r.update_over_30_days 
      combined_row.update_over_7_days += r.update_over_7_days
    })
    return (
      <tr className={this.index}>
        <td onClick={this.showHide}>{combined_row.owner}
            {this.props.row.map((e,i) => {
            return (
                  <table style={this.state.show} >
                  <tbody>
                  <tr className={100 + i}>
                  <td>{e.owner}</td>
                  <td>{e.total_owned === 0 ? "" : e.total_owned}</td>
                  <td>{e.support === 0 ? "" : e.support}</td>
                  <td>{e.customer === 0 ? "" : e.customer}</td>
                  <td>{e.development === 0 ? "" : e.development}</td>
                  <td>{e.escalations === 0 ? "" : e.escalations}</td>
                  <td>{e.open_over_30_days === 0 ? "" : e.open_over_30_days}</td>
                  <td>{e.update_over_7_days === 0 ? "" : e.update_over_7_days}</td>
                  <td>{e.update_over_30_days === 0 ? "" : e.update_over_30_days}</td>
                  <td>{e.taken_today === 0 ? "" : e.taken_today}</td>
                  <td>{e.taken_1 === 0 ? "" : e.taken_1}</td>
                  <td>{e.taken_2 === 0 ? "" : e.taken_2}</td>
                  <td>{e.taken_3 === 0 ? "" : e.taken_3}</td>
                  <td>{e.taken_4 === 0 ? "" : e.taken_4}</td>
                  <td>{e.taken_5 === 0 ? "" : e.taken_5}</td>
                  <td>{e.taken_6 === 0 ? "" : e.taken_6}</td>
                  <td>{e.taken_last_31_days === 0 ? "" : e.taken_last_31_days}</td>
                  <td>{e.response}</td>
                  <td>{e.c_today === 0 ? "" : e.c_today}</td>
                  <td>{e.c_mtd === 0 ? "" : e.c_mtd}</td>
                  <td>{e.c_last_31_days === 0 ? "" : e.c_last_31_days}</td>
                  <td>{e.survey}</td>
                  <td>{e.kb_created}</td>
                  <td>{e.kb_modified}</td>
                  <td>{e.kb_linked}</td>
                  <td>{e.kb_percent}</td>
                  </tr>
                  </tbody>
                  </table>
            )
          })}
        </td>
        <td>{combined_row.total_owned === 0 ? "" : combined_row.total_owned}</td>
        <td>{combined_row.support === 0 ? "" : combined_row.support}</td>
        <td>{combined_row.customer === 0 ? "" : combined_row.customer}</td>
        <td>{combined_row.development === 0 ? "" : combined_row.development}</td>
        <td>{combined_row.escalations === 0 ? "" : combined_row.escalations}</td>
        <td>{combined_row.open_over_30_days === 0 ? "" : combined_row.open_over_30_days}</td>
        <td>{combined_row.update_over_7_days === 0 ? "" : combined_row.update_over_7_days}</td>
        <td>{combined_row.update_over_30_days === 0 ? "" : combined_row.update_over_30_days}</td>
        <td>{combined_row.taken_today === 0 ? "" : combined_row.taken_today}</td>
        <td>{combined_row.taken_1 === 0 ? "" : combined_row.taken_1}</td>
        <td>{combined_row.taken_2 === 0 ? "" : combined_row.taken_2}</td>
        <td>{combined_row.taken_3 === 0 ? "" : combined_row.taken_3}</td>
        <td>{combined_row.taken_4 === 0 ? "" : combined_row.taken_4}</td>
        <td>{combined_row.taken_5 === 0 ? "" : combined_row.taken_5}</td>
        <td>{combined_row.taken_6 === 0 ? "" : combined_row.taken_6}</td>
        <td>{combined_row.taken_last_31_days === 0 ? "" : combined_row.taken_last_31_days}</td>
        <td>{combined_row.response}</td>
        <td>{combined_row.c_today === 0 ? "" : combined_row.c_today}</td>
        <td>{combined_row.c_mtd === 0 ? "" : combined_row.c_mtd}</td>
        <td>{combined_row.c_last_31_days === 0 ? "" : combined_row.c_last_31_days}</td>
        <td>{combined_row.survey}</td>
        <td>{combined_row.kb_created}</td>
        <td>{combined_row.kb_modified}</td>
        <td>{combined_row.kb_linked}</td>
        <td>{combined_row.kb_percent}</td>
      </tr>
  )
} else {
  return (
    <tr className={this.index}>
      <td>{this.props.row.owner}</td>
      <td>{this.props.row.total_owned === 0 ? "" : this.props.row.total_owned}</td>
      <td>{this.props.row.support === 0 ? "" : this.props.row.support}</td>
      <td>{this.props.row.customer === 0 ? "" : this.props.row.customer}</td>
      <td>{this.props.row.development === 0 ? "" : this.props.row.development}</td>
      <td>{this.props.row.escalations === 0 ? "" : this.props.row.escalations}</td>
      <td>{this.props.row.open_over_30_days === 0 ? "" : this.props.row.open_over_30_days}</td>
      <td>{this.props.row.update_over_7_days === 0 ? "" : this.props.row.update_over_7_days}</td>
      <td>{this.props.row.update_over_30_days === 0 ? "" : this.props.row.update_over_30_days}</td>
      <td>{this.props.row.taken_today === 0 ? "" : this.props.row.taken_today}</td>
      <td>{this.props.row.taken_1 === 0 ? "" : this.props.row.taken_1}</td>
      <td>{this.props.row.taken_2 === 0 ? "" : this.props.row.taken_2}</td>
      <td>{this.props.row.taken_3 === 0 ? "" : this.props.row.taken_3}</td>
      <td>{this.props.row.taken_4 === 0 ? "" : this.props.row.taken_4}</td>
      <td>{this.props.row.taken_5 === 0 ? "" : this.props.row.taken_5}</td>
      <td>{this.props.row.taken_6 === 0 ? "" : this.props.row.taken_6}</td>
      <td>{this.props.row.taken_last_31_days === 0 ? "" : this.props.row.taken_last_31_days}</td>
      <td>{this.props.row.response}</td>
      <td>{this.props.row.c_today === 0 ? "" : this.props.row.c_today}</td>
      <td>{this.props.row.c_mtd === 0 ? "" : this.props.row.c_mtd}</td>
      <td>{this.props.row.c_last_31_days === 0 ? "" : this.props.row.c_last_31_days}</td>
      <td>{this.props.row.survey}</td>
      <td>{this.props.row.kb_created}</td>
      <td>{this.props.row.kb_modified}</td>
      <td>{this.props.row.kb_linked}</td>
      <td>{this.props.row.kb_percent}</td>
    </tr>
  )
}
}
}

export default Row