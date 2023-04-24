import styles from "../../styles/order.add.module.css";
import { useForm } from 'react-hook-form';
import data from '../../../data/data'

const Order = () => {
    const { register, handleSubmit, errors, reset } = useForm();

    let save = async (values) => {

        console.log(values);
        const response = await data.saveOrder(values);
        console.log(response);
        if(response != null){
            reset();

        }

    }

    return(
        <>
            <div className={styles.container}>
                <h1 className={styles.form_title}>Make a new order</h1>
                <form action="src/pages#" onSubmit={handleSubmit(save)}>
                    <div className={styles.main_user_info}>
                        <div className={styles.user_input_box}>
                            <label htmlFor="customerId">Customer ID</label>
                            <input type="text"
                                   id="customerId"
                                   name="customerId"
                                   {...register('customerId',
                                       {required: true,
                                           message: 'Please enter your customer ID number' })}
                                   placeholder="Enter your customer id number"/>

                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="total">Total</label>
                            <input type="text"
                                   id="total"
                                   name="total"
                                   {...register('total',
                                       {required: true,
                                           message: 'please enter the purchase total' })}
                                   placeholder="Total Price"/>
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="shippingstate">Shipping State</label>
                            <input type="text"
                                   id="shippingstate"
                                   name="shippingstate"
                                   {...register('shippingstate',
                                       {required: true,
                                           message: 'Please enter your shipping state' })}
                                   placeholder="Enter shipping state"/>


                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="city">Shipping City</label>
                            <input type="text"
                                   id="shippingcity"
                                   name="shippingcity"
                                   {...register('shippingcity',
                                       {required: true,
                                           message: 'please enter the shipping city' })}
                                   placeholder="Enter Shipping City"/>
                        </div>



                        <div className={styles.user_input_box}>
                            <label htmlFor="shipcode">Shipping Zip Code</label>
                            <input type="text"
                                   id="shippingzip"
                                   name="shippingzip"
                                   {...register('shippingzip',
                                       {required: true,
                                           message: 'please enter shipping zipcode' })}
                                   placeholder="Shipping Zip Code"/>
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="itemname">Item Name</label>
                            <input type="text"
                                   id="itemname"
                                   name="itemname"
                                   {...register('itemname',
                                       {required: true,
                                           message: 'please enter the item name' })}
                                   placeholder="Item Name"/>
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="itemquantity">Item Quantity</label>
                            <input type="text"
                                   id="itemquanity"
                                   name="itemquanity"
                                   {...register('itemquanity',
                                       {required: true,
                                           message: 'please enter item quanity' })}
                                   placeholder="Item Quantity"/>
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="itemprice">Item Price</label>
                            <input type="text"
                                   id="itemprice"
                                   name="itemprice"
                                   {...register('itemprice',
                                       {required: true,
                                           message: 'please enter item price' })}
                                   placeholder="Item Price"/>
                        </div>

                    </div>

                    <div className={styles.form_submit_btn}>
                        <input type="submit" value="save" ></input>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Order;