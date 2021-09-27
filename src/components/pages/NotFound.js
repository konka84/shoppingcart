import { useHistory } from "react-router-dom";



function NotFound() {
    const history = useHistory();
    return (
        <div className="pt-24 bg-gradient-to-br from-purple-100 to-purple-200 w-full h-screen">
            <div className="flex flex-col w-5/6 md:w-1/2 mx-auto space-y-4 bg-gradient-to-br from-purple-300 to-purple-500 rounded-md my-20 p-8">
                <h4 className=" font-bold text-2xl text-center">Page not Found</h4>
                <p className="font-medium text-lg font-serif">Sorry, but the page you are looking for does not exist,
                        have been removed, name changed or is temporarily
                        unavailable</p>
                <button onClick={() => history.push('/')} className="bg-purple-200 transition transform hover:scale-102 mx-auto w-1/4 py-2 px-2 rounded-md font-semibold text-xl">Back to Home</button>
            </div>
        </div>
    )
}

export default NotFound;