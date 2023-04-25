import styles from "src/styles/order.add.module.css";
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
                            <label htmlFor="shippingAddress.state">Shipping State</label>
                            <input type="text"
                                   id="shippingAddress.state"
                                   name="shippingAddress.state"
                                   {...register('shippingAddress.state',
                                       {required: true,
                                           message: 'Please enter your shipping state' })}
                                   placeholder="Enter shipping state"/>


                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="shippingAddress.city">Shipping City</label>
                            <input type="text"
                                   id="shippingAddress.city"
                                   name="shippingAddress.city"
                                   {...register('shippingAddress.city',
                                       {required: true,
                                           message: 'please enter the shipping city' })}
                                   placeholder="Enter Shipping City"/>
                        </div>



                        <div className={styles.user_input_box}>
                            <label htmlFor="shippingAddress.postalcode">Shipping Zip Code</label>
                            <input type="text"
                                   id="shippingAddress.postalcode"
                                   name="shippingAddress.postalcode"
                                   {...register('shippingAddress.postalcode',
                                       {required: true,
                                           message: 'please enter shipping zipcode' })}
                                   placeholder="Shipping Zip Code"/>
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="item.name">Item Name</label>
                            <input type="text"
                                   id="item.name"
                                   name="item.name"
                                   {...register('item.name',
                                       {required: true,
                                           message: 'please enter the item name' })}
                                   placeholder="Item Name"/>
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="item.quantity">Item Quantity</label>
                            <input type="text"
                                   id="item.quantity"
                                   name="item.quantity"
                                   {...register('item.quantity',
                                       {required: true,
                                           message: 'please enter item quanity' })}
                                   placeholder="Item Quantity"/>
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="item.price">Item Price</label>
                            <input type="text"
                                   id="item.price"
                                   name="item.price"
                                   {...register('item.price',
                                       {required: true,
                                           message: 'please enter item price' })}
                                   placeholder="Item Price"/>
                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="payment.method">Payment Method</label>
                            <input type="text"
                                   id="payment.method"
                                   name="payment.method"
                                   {...register('paymethod',
                                       {required: true,
                                           message: 'please enter Payment Method' })}
                                   placeholder="Payment Method"/>
                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="payment.number">Payment Number</label>
                            <input type="text"
                                   id="payment.number"
                                   name="payment.number"
                                   {...register('payment.number',
                                       {required: true,
                                           message: 'please enter Payment Number' })}
                                   placeholder="Payment Number"/>
                        </div>



                    </div>
                    <div className={styles.user_input_box}>
                        <label htmlFor="payment.billingAddress.state">Billing State</label>
                        <input type="text"
                               id="payment.billingAddress.state"
                               name="payment.billingAddress.state"
                               {...register('payment.billingAddress.state',
                                   {required: true,
                                       message: 'Please enter your billing state' })}
                               placeholder="Enter billing state"/>


                    </div>
                    <div className={styles.user_input_box}>
                        <label htmlFor="payment.billingAddress.city">Billing City</label>
                        <input type="text"
                               id="payment.billingAddress.city"
                               name="payment.billingAddress.city"
                               {...register('payment.billingAddress.city',
                                   {required: true,
                                       message: 'please enter the billing city' })}
                               placeholder="Enter billing City"/>
                    </div>



                    <div className={styles.user_input_box}>
                        <label htmlFor="payment.billingAddress.postalCode">Billing Zip Code</label>
                        <input type="text"
                               id="payment.billingAddress.postalCode"
                               name="payment.billingAddress.postalCode"
                               {...register('payment.billingAddress.postalCode',
                                   {required: true,
                                       message: 'please enter billing zipcode' })}
                               placeholder="Billing Zip Code"/>


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