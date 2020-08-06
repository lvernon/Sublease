import React, {useState} from 'react';
import './SignUpBox.css'
import httpUser from '../../httpUser'

const SignUpBox = (props) => {
	
    //const [fields, setFields] = useState({first: "", last: "", email: "", password: ""});
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [dob, setDob] = useState({m: "", d: "", y: ""});
    const [phone, setPhone] = useState("");
    const [id, setId] = useState("");

    const [errors, setErrors] = useState({
        first: "",
        last: "",
        password: "",
        email: "",
        password2: "",
		dob: {m: "", d: "", y: ""},
        phone: "",
        id: ""
    });

    // used to update user input for either password or email
    const onFirstChange = (e) => {
        e.persist();
        setFirst(e.target.value);
    };

    const onIdChange = (e) => {
        e.persist();
        setId(e.target.value);
    }

    const onLastChange = (e) => {
        e.persist();
        setLast(e.target.value);
    };

    const onEmailChange = (e) => {
        e.persist();
        setEmail(e.target.value);
    };
	
	const onDobChangeM = (e) => {
		e.persist();
		setDob({m: e.target.value, d: dob.d, y: dob.y});
	};
	
	const onDobChangeD = (e) => {
		e.persist();
		setDob({m: dob.m, d: e.target.value, y: dob.y});
	};
	
	const onDobChangeY = (e) => {
		e.persist();
		setDob({m: dob.m, d: dob.d, y: e.target.value});
	};
	
    const onPhoneChange = (e) => {
        e.persist();
        setPhone(e.target.value);
    };

    const onPasswordChange = (e) => {
        e.persist();
        setPassword(e.target.value);
    };

    const onPassword2Change = (e) => {
        e.persist();
        setPassword2(e.target.value);
    };


    // used to submit user values for password and email
    const onFormSubmit = async (e) => {
        e.preventDefault();
			var date = new Date();
			try{
			date.setMonth(parseInt(dob.m - 1,10));
			date.setDate(parseInt(dob.d,10));
			date.setYear(parseInt(dob.y,10));
			}
			catch{
				date = null;
			}
			console.log(date);
            const newUser = {
                name: {
                    first: first,
                    last: last
                },
                email: email,
                password: password,
                password2: password2,
				dob: date,
                phone: phone,
                patientId: id
            }
            const user = await httpUser.signUp(newUser);
            console.log("Errors frontend",user.errors);
            if(user.errors !== undefined){
                setErrors({
                    first: user.errors.first,
                    last: user.errors.last,
                    email: user.errors.email,
                    password: user.errors.password,
                    id: user.errors.patientId
                });
                
                console.log(errors);
            } else if(password !== password2){
                console.log("compare pass", password, password2)
                setErrors({
                    password: "Passwords must match"
                });
            }

            else if(user.token) {
                console.log(user);
                props.onLoginSuccess(user.token, user.id, user.admin); 
                props.history.push('/Home');
            }
        }
	
	/*div SEMESSAGE: placeholder for success/error message, once I figureo ut how states work*/
    return (
        <div>
            <form id="container" onSubmit={onFormSubmit}>
                <h2 id="title" style={{fontSize: '2em'}}>Create Your Account</h2>

				<div id="semessage">
				</div>
                <div className="form-group">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input id="firstName" type="text" class="form-control" placeholder="" onChange={onFirstChange}></input>
                    {errors.first !== undefined &&
                        <label id = "error">{errors.first}</label>
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input id="lastName" type="text" class="form-control" placeholder="" onChange={onLastChange}></input>
                    {errors.last !== undefined &&
                        <label id = "error">{errors.last}</label>
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input id="email" type="email" class="form-control" placeholder="" onChange={onEmailChange}></input>
                    {errors.email !== undefined &&
                        <label id = "error">{errors.email}</label>
                    }
                </div>
				
				<div className="form-group">
                    <label htmlFor="dob" className="form-label">Date of Birth</label><br></br>
					<input id="dobm" type="dobm" style={{width: 25 + '%',marginLeft:-30 + '%'}} class="form-control-dob" placeholder="mm" maxlength="2" onChange={onDobChangeM}></input> / 
                    <input id="dobd" type="dobd" style={{width: 25 + '%'}} class="form-control-dob" placeholder="dd" maxlength="2" onChange={onDobChangeD}></input> / 
                    <input id="doby" type="doby" style={{width: 40 + '%'}} class="form-control-dob" placeholder="yyyy" maxlength="4" onChange={onDobChangeY}></input>
                </div>
				
				<div className="form-group">
                    <label htmlFor="email" className="form-label">Phone Number</label>
					<input id="phone" type="phone" class="form-control" placeholder="" maxlength="10" onChange={onPhoneChange}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input id="password" type="password" class="form-control" placeholder="" onChange={onPasswordChange}></input>
                    {errors.password !== undefined &&
                        <label id = "error">{errors.password}</label>
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="password2" className="form-label">Re-type Password</label>
                    <input id="password2" type="password" class="form-control" placeholder="" onChange={onPassword2Change}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="id" className="form-label">Patient ID</label>
                    <input id="id" type="number" class="form-control" placeholder="" onChange={onIdChange}></input>
                    {errors.id !== undefined &&
                        <label id = "error">{errors.id}</label>
                    }
                </div>

                <div className="form-group" id="button-group">
					<button type="submit" id="create-page-btn" className="btn row">Create Account</button>
                </div>
            </form>
        </div>
    );
}

export default SignUpBox;