import { useContext, useState } from "react";
import Container from "../components/layout/Container";
import AuthContext from "../context/AuthContext";

const SignIn = () => {
    const { userSignIn } = useContext(AuthContext);
    const [formData, setFormData] = useState(null);

    const inputHandler = (e) => {
        const { value, name } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <>
            <Container>
                <div className="py-5">
                    <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
                    <div className="max-w-2xl mx-auto px-4">

                        <div className="mb-3">
                            <label className="block mb-3">Email</label>
                            <input type="email" name="email" onChange={inputHandler} className="h-10 border-slate-300 bg-white outline-none p-2 text-slate-950 w-full" />
                        </div>

                        <div className="mb-3">
                            <label className="block mb-3">Password</label>
                            <input type="password" name="password" onChange={inputHandler} className="h-10 border-slate-300 bg-white outline-none p-2 text-slate-950 w-full" />
                        </div>

                        <button onClick={() => userSignIn(formData)}>Sign In</button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SignIn