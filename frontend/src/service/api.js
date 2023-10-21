import axios from "axios";
const URL = "http://localhost:8001";

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("error while calling signup api", error);
  }
};

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("error while calling login api", error);
    return error.response;
  }
};

export const payUsingRazorPay = async (amount, account) => {
  try {
    const {
      data: { key },
    } = await axios.get("http://localhost:8001/getkey");
    const {
      data: { order },
    } = await axios.post("http://localhost:8001/payment", {
      amount,
    });
    var options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Sweta Patel",
      description: "Test Transaction",
      image: "https://avatars.githubusercontent.com/u/128665200?v=4",
      order_id: order.id,
      callback_url: "http://localhost:8001/paymentverification",
      prefill: {
        name: account,
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#2874f0",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open()
  } catch (error) {
    console.log(error);
  }
};
