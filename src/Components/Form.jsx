import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState('');
    const [branch, setBranch] = useState('');
    const [email, setEmail] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Form submitted:', { name, email, year });
    };
    return (
        <>
            <div className="container mx-auto my-10 border-4 rounded-lg max-w-screen-md">
                <form onSubmit={handleSubmit} className="m-10">
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-3xl font-thinspaced text-left flex-col text-primary">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full border p-2 rounded"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="branch" className="block mb-2 text-3xl font-thinspaced text-left flex-col text-primary">
                            Branch
                        </label>
                        <input
                            type="text"
                            id="branch"
                            className="w-full border p-2 rounded"
                            onChange={(e) => setBranch(e.target.value)}
                            value={branch}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-3xl font-thinspaced text-left flex-col text-primary">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border p-2 rounded"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="year" className="block mb-2 text-3xl font-thinspaced text-left flex-col text-primary">
                            Year
                        </label>
                        <select id="year" className="w-full border p-2 rounded" onChange={(e) => setYear(e.target.value)} value={year} required >
                            <option value="" disabled>
                                Year
                            </option>
                            <option value="1">1st year</option>
                            <option value="2">2nd year</option>
                            <option value="3">3rd year</option>
                            <option value="4">4th year</option>
                        </select>
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className="bg-secondary text-light py-3 px-10 m-4 rounded-xl hover:opacity-90" >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Form