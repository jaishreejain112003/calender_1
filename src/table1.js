import React from 'react';
import './App.css';


export default function table1() {
  return (
    <table>
      <thead>
        <tr className ="textname ">
          <th>  </th>
          <th >Mon</th>
          <th>Tues</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
          <th>Sun</th>
        </tr>
      <tr className ="numbers1">
          <th>  </th>
          <th >1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
          <th>7</th>
        </tr>
        </thead>
        <tbody>
        <tr >
          <td className = "textname2 " >8 AM</td>
        </tr>
        <tr >
          <td className = "textname2 " >9 AM</td>
        </tr>
        <tr >
          <td className = "textname2 " >10 AM</td>
        </tr>
        <tr >
          <td className = "textname2 " >11 AM</td>
        </tr>
        <tr >
          <td className = "textname2 " >12 PM</td>
        </tr>
        <tr >
          <td className = "textname2 " >1 PM</td>
        </tr>
        <tr >
          <td className = "textname2 " >2 PM</td>
        </tr>
        <tr >
          <td className = "textname2 " >3 PM</td>
        </tr>
      </tbody>
    </table>
  
  );
}