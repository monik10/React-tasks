/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";

const withFormHandling = (WrappedComponent) => {
        return class extends React.Component {

            constructor() {
                super();
                this.state = {
                    values: {},
                    errors: {},
                };
            }

            handleChange = (e) => {
                const {name,value} = e.target;
                this.setState({
                    [name]:value,
            
                });
               
            };
            handleSubmit = (e) => {
              e.preventDefault();
            
               console.log(this.state);
            }


            render() {
                return ( < WrappedComponent {
                        ...this.props
                    }
                    values = {
                        this.state.values
                    }
                    errors = {
                        this.state.errors
                    }
                    handleChange = {
                        this.handleChange
                    }
                    handleSubmit = {
                        this.handleSubmit
                    }
                    />)
                }

            };

        }





        export default withFormHandling