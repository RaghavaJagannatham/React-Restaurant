import React from 'react';
import {connect} from 'react-redux';

const Card = (filter_name ) => {
    const [data,setData] = React.useState([]);
    const [clonedata, setClonedata] = React.useState([]);
    React.useEffect(() => {
        fetch('https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json').then(
            response => response.json()
        ).then(
            json => {
                setData(json.items);
                setClonedata(json.items);
            }
        )
    },[])
    React.useEffect(() => {
        if(filter_name != 'ALL ITEMS'){
            let specific = clonedata.filter(item => item.category ===filter_name);
            setData(specific);
        }else{
            setData(clonedata);
        }
    }, [filter_name])
  return (
    <div>
        <center>
            {data.length >0 ?
            
            <div className='container'>
                <div className='row'>
                    {data.map((item) =>(
                        <div className='col-md-4' style={{padding:'5px'}}>
                            <div className='card' style={{width:'25rem', padding:'5px'}}>
                            <img src={item.url} className='card-img-top'/>
                            <div className='card-body'>
                                <h4 className='card-title'>{item.name}</h4>
                                <div className='card-text'>Rs. {item.prize} </div>
                                <button className='btn btn-primary'>Order</button>
                            </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
            :
            
            <div className='Spinner'></div>
            }

        </center>
    </div>
  )  
}
const mapStateToProps = state => ({
    filter_name : state.filterreducer.filter_name
})

export default connect(mapStateToProps)(Card)