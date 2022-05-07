import React from 'react';
import {connect} from 'react-redux';
import {setfilter, resetfilter} from '../Action';

const Filter = ({filter_name,setfilter,resetfilter}) => {
    const prod = ['All Items', 'Rice Items', 'Cold Drinks', 'Pizza', 'Hot Drinks'];
    const [filter, setFilter] = React.useState('All Items');
  return (
    <div>
        <center className='m-3'>
            <span className='m-2'>Filter</span>
            <select className='p-1 h-6' name='filter' onChange={(e) => setfilter(e.target.value)}>
                {prod.map((item,index) => (
                    <option value={item} key={index}>{item}</option>
                ))}
            </select>
        </center>
    </div>
  )
}

const mapStateToProps = state => ({
    filter_name : state.filterreducer.filter_name
})

export default connect(mapStateToProps,{setfilter,resetfilter}) (Filter)