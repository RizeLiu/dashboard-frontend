import React, { Component } from 'react';
import AuxContainer from './AuxContainer/AuxContainer'
import Row from './Row/Row'

import data from './data/dashboard.json';
import './App.css';

class App extends Component {
  state={
    sorted: "",
    down: true,
    data: []
  }

  componentDidMount = () => {
    data.sort((a,b) => (a["owner"] > b["owner"]) ? 1 : ((b["owner"] > a["owner"]) ? -1 : 0))
    const newData = data.map(row => {
      if (row.c_last_31_days === 0) {
        row.kb_percent = 0
      } else {
        row.kb_percent = Math.floor(0.5 + row.kb_linked / row.c_last_31_days * 100)
      }
      return row
    })
    this.setState({data: newData})
  }

  sort = (sorted, column) => {
    if (sorted === column) {
      const newData = [...this.state.data]
      newData.reverse()
      this.setState(prevState => ({
        data: newData,
        down: !prevState.down
      }))
    } else {
      const newData = [...this.state.data]
      newData.sort((a,b) => (a[column] < b[column]) ? 1 : ((b[column] < a[column]) ? -1 : 0))
      this.setState({
        data: newData,
        sorted: column,
        down: true
      })
    }
  }

  total = column => {
    let total = 0
    for ( let i = 0, _len = this.state.data.length; i < _len; i++ ) {
      total += this.state.data[i][column]
    }
    return total
  }

  render() {
    const downArrow = <span className="arrow">&#9660;</span>
    const upArrow = <span className="arrow">&#9650;</span>
    const arrow = id => {
      return (
        this.state.sorted === id && this.state.down ? downArrow :
          this.state.sorted === id && !this.state.down ? upArrow : null
      )
    }

    return (
      <AuxContainer>
        <div className="dashboard-header"><h1>Global Dashboard</h1></div>
        <div className="dashboard-content">
          <table>
            <thead>
            <tr className="top-row">
              <td className="blank"/>
              <td id="incidents" colSpan="8">Open Incidents</td>
              <td id="past_7_days" colSpan="7">Incidents Taken in Past 7 Days</td>
              <td className="blank"/>
              <td className="blank"/>
              <td id="closed" colSpan="3">Closed</td>
              <td className="blank"/>
              <td id="kb" colSpan="4">Knowledge Base</td>
            </tr>
            <tr className="second-row">
              <td id="owner" onClick={() => this.sort(this.state.sorted, "owner")}>
                {arrow("owner")}Name
              </td>
              <td id="total_owned" onClick={() => this.sort(this.state.sorted, "total_owned")} className="rotated">
                {arrow("total_owned")}<div>Total</div></td>
              <td id="support" onClick={() => this.sort(this.state.sorted, "support")} className="rotated">
                {arrow("support")}<div>Support</div></td>
              <td id="customer" onClick={() => this.sort(this.state.sorted, "customer")} className="rotated">
                {arrow("customer")}<div>Customer</div></td>
              <td id="development" onClick={() => this.sort(this.state.sorted, "development")} className="rotated">
                {arrow("development")}<div>Defects</div></td>
              <td id="escalations" onClick={() => this.sort(this.state.sorted, "escalations")} className="rotated">
                {arrow("escalations")}<div>Escalations</div></td>
              <td id="open_over_30_days" onClick={() => this.sort(this.state.sorted, "open_over_30_days")} className="slim">
                {arrow("open_over_30_days")}Age Over 30 Days</td>
              <td id="update_over_7_days" onClick={() => this.sort(this.state.sorted, "update_over_7_days")} className="slim">
                {arrow("update_over_7_days")}Last Upd Over 7 Days</td>
              <td id="update_over_30_days" onClick={() => this.sort(this.state.sorted, "update_over_30_days")} className="slim">
                {arrow("update_over_30_days")}Last Upd Over 30 Days</td>
              <td id="taken_today" onClick={() => this.sort(this.state.sorted, "taken_today")} className="rotated">
                {arrow("taken_today")}<div>Today</div></td>
              <td id="taken_1" onClick={() => this.sort(this.state.sorted, "taken_1")} className="slim">
                {arrow("taken_1")}Day 1</td>
              <td id="taken_2" onClick={() => this.sort(this.state.sorted, "taken_2")} className="slim">
                {arrow("taken_2")}Day 2</td>
              <td id="taken_3" onClick={() => this.sort(this.state.sorted, "taken_3")} className="slim">
                {arrow("taken_3")}Day 3</td>
              <td id="taken_4" onClick={() => this.sort(this.state.sorted, "taken_4")} className="slim">
                {arrow("taken_4")}Day 4</td>
              <td id="taken_5" onClick={() => this.sort(this.state.sorted, "taken_5")} className="slim">
                {arrow("taken_5")}Day 5</td>
              <td id="taken_6" onClick={() => this.sort(this.state.sorted, "taken_6")} className="slim">
                {arrow("taken_6")}Day 6</td>
              <td id="taken_last_31_days" onClick={() => this.sort(this.state.sorted, "taken_last_31_days")} className="slim">
                {arrow("taken_last_31_days")}Taken Last 31 Days</td>
              <td id="response" onClick={() => this.sort(this.state.sorted, "response")} className="rotated">
                {arrow("response")}<div>Response&nbsp;%</div></td>
              <td id="c_today" onClick={() => this.sort(this.state.sorted, "c_today")} className="rotated">
                {arrow("c_today")}<div>Today</div></td>
              <td id="c_mtd" onClick={() => this.sort(this.state.sorted, "c_mtd")}>
                {arrow("c_mtd")}MTD</td>
              <td id="c_last_31_days" onClick={() => this.sort(this.state.sorted, "c_last_31_days")} className="slim">
                {arrow("c_last_31_days")}Past 31 Days</td>
              <td id="survey" onClick={() => this.sort(this.state.sorted, "survey")} className="rotated">
                {arrow("survey")}<div>Survey</div></td>
              <td id="kb_created" onClick={() => this.sort(this.state.sorted, "kb_created")} className="rotated">
                {arrow("kb_created")}<div>Created</div></td>
              <td id="kb_modified" onClick={() => this.sort(this.state.sorted, "kb_modified")} className="rotated">
                {arrow("kb_modified")}<div>Modified</div></td>
              <td id="kb_linked" onClick={() => this.sort(this.state.sorted, "kb_linked")} className="rotated">
                {arrow("kb_linked")}<div>Linked</div></td>
              <td id="kb_percent" onClick={() => this.sort(this.state.sorted, "kb_percent")} className="rotated">
                {arrow("kb_percent")}<div>Link&nbsp;%</div></td>
            </tr>
            </thead>
            <tbody>
            {this.state.data.map((row, index) => <Row key={index} row={row} index={index}/>)}
            </tbody>
            <tfoot>
            <tr>
              <td>Total</td>
              <td>{this.total("total_owned")}</td>
              <td>{this.total("support")}</td>
              <td>{this.total("customer")}</td>
              <td>{this.total("development")}</td>
              <td>{this.total("escalations")}</td>
              <td>{this.total("open_over_30_days")}</td>
              <td>{this.total("update_over_7_days")}</td>
              <td>{this.total("update_over_30_days")}</td>
              <td>{this.total("taken_today")}</td>
              <td>{this.total("taken_1")}</td>
              <td>{this.total("taken_2")}</td>
              <td>{this.total("taken_3")}</td>
              <td>{this.total("taken_4")}</td>
              <td>{this.total("taken_5")}</td>
              <td>{this.total("taken_6")}</td>
              <td>{this.total("taken_last_31_days")}</td>
              <td></td>
              <td>{this.total("c_today")}</td>
              <td>{this.total("c_mtd")}</td>
              <td>{this.total("c_last_31_days")}</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{this.total("kb_linked")}</td>
              <td>{this.total("kb_percent")}</td>
            </tr>
            </tfoot>
          </table>
        </div>
      </AuxContainer>
    )
  }
}

export default App;
