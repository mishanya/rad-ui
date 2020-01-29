import React from 'react';
import API from './../../service/API';
import {  Link } from "react-router-dom";
export default class OrderList extends React.Component {

    constructor() {
        super();
        this.state = {
          fetching: true
        }
    }

    componentDidMount() {
        API.call(this, 'orders')
    }

    render() {

        const { fetching, error, fetched } = this.state;

        return (
          <div className="order-list row px-1">
            { fetching ? 
              'Fetching...' : 
                error || fetched.map(item => {
                  return (
                    <Link className='col-12 border mb-2' to={'/orders/' +  item.id }>
                      {
                        Object.keys(item).map(key => {
                          return (
                            <div>
                              <b>{key}:</b> {item[key]}
                            </div>
                          )
                        })
                      }
                    </Link>
                  )
                })
            }
          </div>
        );

    }
}