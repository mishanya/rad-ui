import React from 'react';
import API from './../../service/API';

export default class Order extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fetching: true
        }
    }

    componentDidMount() {
        API.call(this, 'orders/' + this.props.match.params.id)
    }

    render() {

        const { fetching, error, fetched } = this.state;

        return (
            <div className="order-list row px-1">
            { fetching ? 
              'Fetching...' : 
                error ||  Object.keys(fetched).map(key => {
                          return (
                            <div className='w-100'>
                              <b>{key}:</b> {fetched[key]}<br/>
                            </div>
                          )
                        })
                       
            }
             </div>
        );

    }
}