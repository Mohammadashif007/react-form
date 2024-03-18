import { useState } from "react";
import "./App.css";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayInfo, setDisplayInfo] = useState("");
    const [checkBox, setCheckBox] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const handleForm = (e) => {
        e.preventDefault();
        if (!checkBox) {
            return;
        }
        console.log({ name: name, email: email, password: password });
        setIsSubmit(true);
        setDisplayInfo({ name: name, email: email, password: password });
        setEmail('')
        setName("")
        setPassword("")
        setCheckBox(false)
    };

    return (
        <>
            <div className="flex justify-center">
                <div className="w-3/5  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl py-10">
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-bold text-5xl">Login</p>
                        <form onSubmit={handleForm} className=" mt-10">
                            <input
                                className="py-2 px-4 w-4/5 rounded-md mb-3"
                                type="text"
                                placeholder="Name"
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                                required
                            />
                            <input
                                className="py-2 px-4 w-4/5 rounded-md mb-3"
                                type="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                className="py-2 px-4 w-4/5 rounded-md mb-3"
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <br />
                            <input
                                type="checkbox"
                                onChange={(e) => setCheckBox(e.target.checked)}
                            />{" "}
                            Do you accept our terms and conditions?
                            <br />
                            <button
                                className={`${checkBox ? 'bg-black':'bg-slate-200'} text-[#fff] px-7 py-3`}
                            >
                                Submit
                            </button>
                            <button
                                className={`${
                                    checkBox ? "bg-[#000]" : "bg-gray-300"
                                } text-[#fff] px-8 py-4 rounded-lg`}
                            >
                                Submit
                            </button>
                        </form>
                        {isSubmit && (
                            <div className="fixed top-0 h-full w-full flex justify-center items-center bg-purple-600">
                                <div className="w-1/2 h-1/2 bg-slate-600">
                                    <div className="flex justify-center items-center flex-col gap-3">
                                        <p className="text-[#fff] font-bold text-4xl">
                                            Form Submit Successfully
                                        </p>
                                        <p>Name : {displayInfo.name}</p>
                                        <p>Email: {displayInfo.email}</p>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => setIsSubmit(false)}
                                            className="bg-slate-200 px-3 py-2 "
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
