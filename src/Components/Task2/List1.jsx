import React from 'react'
import './List1.css';


export default function List1() {
    return (
        <div>
            <div className='container'>
                <div className='col'>
                    <div className='para0'>
                        <div className='para2'>
                            <div className='para3'>
                                <p>Job List </p>
                            </div>
                            <div className='para4 gap-3 '>
                                <li>  <button class="btn  " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select<span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-down mx-2" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg></span>
                                </button>
                                    <ul class="dropdown-menu dropdown-menu-light">
                                        <li><a class="dropdown-item " href="#">Remote</a></li>
                                        <li><a class="dropdown-item" href="#">Work From Home</a></li>
                                        <li><a class="dropdown-item" href="#">Intership</a></li>
                                        <li><a class="dropdown-item" href="#">Part time</a></li>
                                    </ul>
                                </li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-grid-fill mt-1" viewBox="0 0 16 16">
                                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
                                </svg></li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-list-task mt-1" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z" />
                                    <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
                                    <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z" />
                                </svg></li>
                            </div>
                        </div>
                        <div className='text gap-5'>

                            {/* box-1 */}

                            <div className='para5  mt-3'>
                                <p className='text-start mx-5 fs-3 mt-3 '>WordPress Developer</p>
                                <ol className='d-flex gap-3'>
                                    <li>Bistro Tech Ltd</li>
                                    <li className='vr text-dark'></li>
                                    <li>Location: Dhaka, Bangladesh</li>
                                </ol>
                                <hr className='mt-3'></hr>

                                <ol className='text-start'>
                                    <li><span><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                    </svg></span> Salary: <b> $60-$90 </b>/ Per Hour</li>
                                    <li><span><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                    </svg></span><b>Skills:</b> HTML, CSS, JS,cybersecurity</li>
                                </ol>
                                <div className='para6 mt-5 d-flex ' >
                                    <li><a href="" className=' link-underline-light text-info '>View details</a></li>
                                    <li><a href="" className=' link-underline-light text-info'>Apply Now</a></li>
                                </div>

                            </div>

                            {/* box-2 */}

                            <div className='para5  mt-5'>
                                <p className='text-start mx-5 fs-3 mt-3 '>
                                    Assistant Manager</p>
                                <ol className='d-flex gap-3'>
                                    <li>Hangman Gold</li>
                                    <li className='vr text-dark'></li>
                                    <li>Location: Sylhet, Bangladesh</li>
                                </ol>
                                <hr className='mt-3'></hr>

                                <ol className='text-start'>
                                    <li><span><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                    </svg></span> Salary: <b> $20k-$50k</b>/ Per Hour</li>
                                    <li><span><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                    </svg></span><b>Skills:</b> Leadership, Customer service</li>
                                </ol>
                                <div className='para6 mt-5 d-flex ' >
                                    <li><a href="" className=' link-underline-light text-info '>View details</a></li>
                                    <li><a href="" className=' link-underline-light text-info'>Apply Now</a></li>
                                </div>

                            </div>

                            {/* box-3 */}


                            <div className='para5  mt-5'>
                                <p className='text-start mx-5 fs-3 mt-3 '>
                                    UI/UX Designer</p>
                                <ol className='d-flex gap-3'>
                                    <li>Tech-Bath IT Ltd</li>
                                    <li className='vr text-dark'></li>
                                    <li>Location: Chicago, Australia</li>
                                </ol>
                                <hr className='mt-3'></hr>

                                <ol className='text-start'>
                                    <li><span><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                    </svg></span> Salary: <b> $50K-$90K </b>/ Per Hour</li>
                                    <li><span><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                    </svg></span><b>Skills:</b> Communication and presentation</li>
                                </ol>
                                <div className='para6 mt-5 d-flex ' >
                                    <li><a href="" className=' link-underline-light text-info '>View details</a></li>
                                    <li><a href="" className=' link-underline-light text-info'>Apply Now</a></li>
                                </div>

                            </div>


                            {/* box-4 */}


                            <div className='para5  mt-5'>
                                <p className='text-start mx-5 fs-3 mt-3 '>
                                    Junior Receptionist</p>
                                <ol className='d-flex gap-3'>
                                    <li>Gangster.Hide</li>
                                    <li className='vr text-dark'></li>
                                    <li>Location: Dhaka, Bangladesh</li>
                                </ol>
                                <hr className='mt-3'></hr>

                                <ol className='text-start'>
                                    <li><span><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                    </svg></span> Salary: <b> $60-$80 </b>/ Per Hour</li>
                                    <li><span><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                    </svg></span><b>Skills:</b>Time management, Communication</li>
                                </ol>
                                <div className='para6 mt-5 d-flex ' >
                                    <li><a href="" className=' link-underline-light text-info '>View details</a></li>
                                    <li><a href="" className=' link-underline-light text-info'>Apply Now</a></li>
                                </div>

                            </div>


                            {/* box-5 */}


                            <div className='para5  mt-5'>
                                <p className='text-start mx-5 fs-3 mt-3 '>
                                    Senior Laboratoriest</p>
                                <ol className='d-flex gap-3'>
                                    <li>Laballo.Lab Ltd</li>
                                    <li className='vr text-dark'></li>
                                    <li>Location: New-York, USA</li>
                                </ol>
                                <hr className='mt-3'></hr>

                                <ol className='text-start'>
                                    <li><span><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                    </svg></span> Salary: <b> $40K-$60K </b>/ Per Hour</li>
                                    <li><span><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                    </svg></span><b>Skills:</b> Data analysis, Analytical skills</li>
                                </ol>
                                <div className='para6 mt-5 d-flex ' >
                                    <li><a href="" className=' link-underline-light text-info '>View details</a></li>
                                    <li><a href="" className=' link-underline-light text-info'>Apply Now</a></li>
                                </div>

                            </div>




                            {/* box-6 */}


                            <div className='para5 mt-5'>
                                <p className='text-start mx-5 fs-3 mt-3 '>Medical Nurse</p>
                                <ol className='d-flex gap-3'>
                                    <li>Marko Company</li>
                                    <li className='vr text-dark'></li>
                                    <li>Location: Dhaka, Bangladesh</li>
                                </ol>
                                <hr className='mt-3'></hr>

                                <ol className='text-start'>
                                    <li><span><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                    </svg></span> Salary: <b> $60-$90 </b>/ Per Hour</li>
                                    <li><span><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                    </svg></span><b>Skills:</b>Patient education, Surgical procedures</li>
                                </ol>
                                <div className='para6 mt-5 d-flex ' >
                                    <li><a href="" className=' link-underline-light text-info '>View details</a></li>
                                    <li><a href="" className=' link-underline-light text-info'>Apply Now</a></li>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}
