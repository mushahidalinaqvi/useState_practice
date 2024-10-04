import { useState } from 'react';
// import Navbar from './Navbar';

function NewFile() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rows, setRows] = useState([]);

    const submitForm = (event) => {
        event.preventDefault();
        console.log("Function is working");

        // update row state for each submission
        setRows([...rows, { name, email, password }]);

        // clear form fields after submission
        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <>
            <div className='pt-5 bg-dark'>
                <h1 className='text-center pb-5 text-warning'>This is assignment for UseState</h1>
                <div className="container p-5 shadow pt-5 bg-light rounded-5 pb-5" style={{ width: '60%' }}>
                    <form className="mb-3 me-5 ms-5" onSubmit={submitForm}>
                        <label className="form-label" htmlFor="name" required>Full Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <label className="form-label" htmlFor="email" required>Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label className="form-label" htmlFor="password" required>Phone</label>
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button className="btn btn-warning mt-3 pe-3 ps-3" style={{width:'100%'}}  type="submit">Submit</button>
                    </form>
                </div>

                <br /><br /><br />
                <div className="container p-5 bg-light rounded-5 shadow-lg" style={{ width: '60%' }}>
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={index}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{row.name}</td>
                                    <td>{row.email}</td>
                                    <td>{row.password}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default NewFile;
