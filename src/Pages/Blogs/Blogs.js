import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='mt-3'>My Articles</h2>
            <hr />

            <div>
                <div>
                    <img width="600px" src="https://lh3.googleusercontent.com/16FwaRpvUmWs1ZfVVsYmoA4gqvNH8kazS9crLGTEZAxKKDuH6d_j_GKsqzt6WWwqHqgIJmmkYOu3Nk6QFotq5l7MdT-BpAOzoTJM8KX6ToS9SZCVIsj1v2wc5YZeg8twRuX34HER" alt="" />

                    <h2 className='text-primary pt-3'>What is difference between  authentication and  authorization?</h2>
                    <p className='w-50 mx-auto text-start'> <span className='fw-bold'>Authentication:</span>Authentication is verify user identity by credentials based on knowledge.User provide authentication factors when requesting access</p>
                    <p className='w-50 mx-auto text-start'> <span className='fw-bold'>Authorization:</span>Authorization permit to access all resource.Authorization identity and access control policies.By the authorization leadership sets security strategies.Network security staff implement and maintain access control system</p>

                </div>
<hr />
                <div>
                    <img width="600px" src="https://firebase.google.com/images/products/auth/auth-3.png" alt="" />
                    <h2 className='text-primary pt-3'>Why I'm using firebase and what other option I have to implement authentication?</h2>
                    <p className='w-50 mx-auto text-start'> <span className='fw-bold'>Why I'm using firebase: </span>Firebase is  provide authentication service.I using authentication system from firebase .It maintain by google and their securities system is very heigh .</p>

                    <p className='w-50 mx-auto text-start'> <span className='fw-bold'>What other option implement: </span> First of all I'm using firebase for authentication and then I using firebase for hosting my site .</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;