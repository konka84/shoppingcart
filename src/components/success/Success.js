import { useHistory } from "react-router-dom";



export default function Success() {
    const history = useHistory();
    return (
        <div className="pt-24 bg-gradient-to-br from-purple-100 to-purple-200 w-full h-screen">
            <div className="flex flex-col w-5/6 md:w-1/2 mx-auto space-y-4 bg-purple-300 rounded-md my-20 p-8">
                <h2 className="text-black-500 font-bold text-4xl text-center">Thank you.</h2>
                <h4 className="text-black-500 font-bold text-3xl text-center">Your order was completed successfully.<br></br></h4>
                <p className="font-medium text-lg font-serif"> <br></br>An email receipt including the details about your order has been sent to the email address provided. Please keep it for your records.</p>
                <button onClick={() => history.push('/')} className="bg-purple-500 text-white p-2 rounded-lg font-semibold text-xl">Go Home</button>
            </div>
        </div>
    )
}
