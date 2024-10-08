import './App.css';
import React, { Component } from "react";
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root : {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table :{
    minWidth: 1080
  }
})

const customer = [{
  'id': 1,
  'image': 'https://picsum.photos/64/64',
  'name': '홍길도',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://picsum.photos/64/64',
  'name': '박찬호',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 3,
  'image': 'https://picsum.photos/64/64',
  'name': '선동열',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
}]
class App extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableHead>
          <TableBody>
          {customer.map(c => {return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);})}
          </TableBody>     
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);
